/**
 * @example node getAllRoutes ./routes
 * @description write all exports from routes in one file
 */

const fs = require('fs');
const { promisify } = require('util');

const { argv: [, , target, file = './export.js'] } = process;

const readDirAsync = promisify(fs.readdir);
const accessAsync = promisify(fs.access);

const checkExist = path =>
  accessAsync(path, fs.constants.R_OK)
    .then(() => true)
    .catch(() => false);

const getAllRoutes = async dirname => {
  const res = await readDirAsync(dirname);

  const files =
    res
      .filter(name => name === 'index.js')
      .map(name => `${dirname}/${name}`);

  const dirs =
    res.filter(name => !name.includes('.'));

  if (dirs.length) {
    return [
      ...files,
      ...(
        await
          Promise
            .all(
              dirs
                .map(dir => getAllRoutes(`${dirname}/${dir}`)),
            )
      ).reduce(
        (acc, res) => [
          ...acc,
          ...res,
        ]
      , []),
    ];
  } else {
    return files;
  }
};

const writeExports = (stream, exports) => {
  const filtered =
    exports.filter(
      ({ exist, name, path }) =>
        // eslint-disable-next-line
        exist || console.warn(`Missing ${path} for ${name}`),
    );
  if (filtered.length > 1) {
    stream.write(
      filtered
        .map(({ name, path }) => `export { ${name} }\n from '${path}';\n`)
        .join(''),
    );
  }
};

const printExports = async (path, file) => {
  const stream = fs.createWriteStream(file);
  const routes = await getAllRoutes(path);
  await Promise.all(
    routes
      .map(
        route => {
          const name =
            route
              .split('/')
              .slice(-2)[0]
              .replace(
                /([a-z])-([a-z])/g,
                (c, p1, p2) =>
                  `${p1}${p2.toUpperCase()}`,
              )
              .replace(
                /^./, c => c.toUpperCase(),
              );

          const indexPath =
            route
              .split('/')
              .slice(0, -1)
              .join('/');

          const path =
            `${indexPath}/${indexPath.split('/').slice(-1)[0]}`;

          const demoPath =
            `${indexPath}/demo`;

          return [
            { path: indexPath, name: `${name}IndexRoute`, index: true },
            { path, name: `${name}Route` },
            { path: demoPath, name: `${name}DemoRoute` },
          ];
        },
      )
      .map(
        async exports =>
          writeExports(
            stream,
            await
              Promise
                .all(
                  exports.map(
                    async ({ path, index, name }) => ({
                      path,
                      index,
                      name,
                      exist:
                        await checkExist(
                          `${path + (index ? '/index' : '')}.js`,
                        ),
                    }),
                  ),
                ),
            ),
      ),
  );
  stream.end();
};

if (target) printExports(target, file);

module.exports = {
  printExports,
  getAllRoutes,
};
