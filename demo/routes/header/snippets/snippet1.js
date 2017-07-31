'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Header,
  HeaderRegion,
  HeaderTitle,
  injectGlobalStyle,
  injectResetStyle,
} from 'reactackle';

injectResetStyle();
injectGlobalStyle();

const HeaderDemoRouteSnippet1 = () => (
  <div>
    <Header
      behavior="fixed"
      backgroundColor="#4762b2"
    >
      <HeaderRegion verticalAlign="center">
        <HeaderTitle>Fixed header</HeaderTitle>
      </HeaderRegion>
    </Header>
    <div style={{ padding: '24px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
      placerat lacinia vehicula. In mollis orci eu finibus venenatis. Fusce
      ac pretium dolor, ac euismod nulla. Integer commodo sapien
      orci, id maximus arcu rutrum id. Ut lobortis sed elit sed sollicitudin.
      Cras lobortis mi libero, in condimentum metus elementum id. Nullam
      a maximus libero.
      
      Nunc tortor mi, iaculis a nisl sed, vestibulum porta leo.
      Pellentesque lorem dolor, tempus id maximus ornare, dapibus quis urna.
      Pellentesque semper, massa sed varius aliquet, arcu ex
      ornare mauris, eu pharetra lectus odio a neque. Aliquam semper orci
      nec odio pulvinar blandit. Aenean volutpat ligula et felis dictum
      eleifend. Nunc enim metus, sodales eget urna id, convallis fringilla
      erat. Nullam at leo id mi sagittis tincidunt interdum vel leo. In hac
      habitasse platea dictumst. Curabitur laoreet, ipsum in dapibus
      placerat, dolor lorem convallis nisi, nec euismod metus justo quis felis.
      Cras purus mauris, imperdiet id odio nec, porta viverra augue. Quisque
      luctus efficitur imperdiet. Suspendisse vehicula libero et justo
      consectetur sodales. Vivamus tempor urna tincidunt consectetur molestie.
      
      Nam facilisis elit quam, vel fermentum erat lacinia et. Curabitur
      ac lacus leo. Aenean enim mi, faucibus ut tortor eu,
      tempus vulputate lorem. Proin vitae cursus velit, sollicitudin
      vehicula mi. Morbi quis lorem quis est finibus ultricies. Donec ultrices
      facilisis ipsum a molestie. Praesent ullamcorper magna ac venenatis
      commodo. Vestibulum elit risus, venenatis ac nulla ac, ultricies egestas
      diam. Proin molestie felis nunc, in gravida neque vestibulum quis. Sed
      laoreet purus risus, quis porttitor magna tincidunt sed.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Pellentesque condimentum tellus non nunc porta, non
      hendrerit metus auctor. Quisque sagittis elementum eros sed aliquam.
      Mauris dictum augue at pulvinar facilisis.
      
      Etiam scelerisque est velit, vitae mattis risus fringilla ut. Nunc
      volutpat eu urna sit amet euismod. Praesent ac bibendum enim.
      Duis lectus odio, semper fringilla sollicitudin id, malesuada eu
      risus. Sed lobortis felis bibendum augue rutrum mollis. Proin in
      dictum purus. Integer sagittis odio a nisi tristique vulputate.
      Fusce hendrerit rhoncus congue. Nunc neque risus, semper sed dui eu,
      sodales lobortis orci. Aliquam nec sapien ut magna ornare egestas viverra
      ut sem. Suspendisse scelerisque aliquam tempus. Curabitur vel leo
      iaculis, dapibus felis eget, vulputate erat. Vestibulum aliquam, urna non
      porta mollis, odio odio fringilla lacus, non vestibulum ligula diam
      pharetra ante.
      
      Proin porttitor ex eget nibh suscipit, in scelerisque velit
      pellentesque. Cras tristique lorem lectus, ut cursus lorem malesuada
      vitae. Fusce ligula lacus, malesuada vel felis non, laoreet
      dictum risus. Aliquam hendrerit imperdiet leo, sit amet ornare
      neque. Ut maximus erat ut varius interdum. Pellentesque habitant morbi
      tristique senectus et netus et malesuada fames ac turpis egestas. Mauris
      molestie, metus vel hendrerit tincidunt, eros lorem viverra neque, non
      varius nibh magna porttitor est. In in metus vel tellus commodo
      efficitur nec in metus.
      
      Etiam scelerisque est velit, vitae mattis risus fringilla ut. Nunc
      volutpat eu urna sit amet euismod. Praesent ac bibendum enim.
      Duis lectus odio, semper fringilla sollicitudin id, malesuada eu
      risus. Sed lobortis felis bibendum augue rutrum mollis. Proin in
      dictum purus. Integer sagittis odio a nisi tristique vulputate.
      Fusce hendrerit rhoncus congue. Nunc neque risus, semper sed dui eu,
      sodales lobortis orci. Aliquam nec sapien ut magna ornare egestas viverra
      ut sem. Suspendisse scelerisque aliquam tempus. Curabitur vel leo
      iaculis, dapibus felis eget, vulputate erat. Vestibulum aliquam, urna non
      porta mollis, odio odio fringilla lacus, non vestibulum ligula diam
      pharetra ante.
      
      Proin porttitor ex eget nibh suscipit, in scelerisque velit
      pellentesque. Cras tristique lorem lectus, ut cursus lorem malesuada
      vitae. Fusce ligula lacus, malesuada vel felis non, laoreet
      dictum risus. Aliquam hendrerit imperdiet leo, sit amet ornare
      neque. Ut maximus erat ut varius interdum. Pellentesque habitant morbi
      tristique senectus et netus et malesuada fames ac turpis egestas. Mauris
      molestie, metus vel hendrerit tincidunt, eros lorem viverra neque, non
      varius nibh magna porttitor est. In in metus vel tellus commodo
      efficitur nec in metus.Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Cras placerat lacinia vehicula. In mollis orci eu finibus venenatis.
      Fusce ac pretium dolor, ac euismod nulla. Integer commodo sapien
      orci, id maximus arcu rutrum id. Ut lobortis sed elit sed sollicitudin.
      Cras lobortis mi libero, in condimentum metus elementum id. Nullam
      a maximus libero.

      Nunc tortor mi, iaculis a nisl sed, vestibulum porta leo.
      Pellentesque lorem dolor, tempus id maximus ornare, dapibus quis urna.
      Pellentesque semper, massa sed varius aliquet, arcu ex
      ornare mauris, eu pharetra lectus odio a neque. Aliquam semper orci
      nec odio pulvinar blandit. Aenean volutpat ligula et felis dictum
      eleifend. Nunc enim metus, sodales eget urna id, convallis fringilla
      erat. Nullam at leo id mi sagittis tincidunt interdum vel leo. In hac
      habitasse platea dictumst. Curabitur laoreet, ipsum in dapibus
      placerat, dolor lorem convallis nisi, nec euismod metus justo quis felis.
      Cras purus mauris, imperdiet id odio nec, porta viverra augue. Quisque
      luctus efficitur imperdiet. Suspendisse vehicula libero et justo
      consectetur sodales. Vivamus tempor urna tincidunt consectetur molestie.

      Nam facilisis elit quam, vel fermentum erat lacinia et. Curabitur
      ac lacus leo. Aenean enim mi, faucibus ut tortor eu,
      tempus vulputate lorem. Proin vitae cursus velit, sollicitudin
      vehicula mi. Morbi quis lorem quis est finibus ultricies. Donec ultrices
      facilisis ipsum a molestie. Praesent ullamcorper magna ac venenatis
      commodo. Vestibulum elit risus, venenatis ac nulla ac, ultricies egestas
      diam. Proin molestie felis nunc, in gravida neque vestibulum quis. Sed
      laoreet purus risus, quis porttitor magna tincidunt sed.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Pellentesque condimentum tellus non nunc porta, non
      hendrerit metus auctor. Quisque sagittis elementum eros sed aliquam.
      Mauris dictum augue at pulvinar facilisis.

      Etiam scelerisque est velit, vitae mattis risus fringilla ut. Nunc
      volutpat eu urna sit amet euismod. Praesent ac bibendum enim.
      Duis lectus odio, semper fringilla sollicitudin id, malesuada eu
      risus. Sed lobortis felis bibendum augue rutrum mollis. Proin in
      dictum purus. Integer sagittis odio a nisi tristique vulputate.
      Fusce hendrerit rhoncus congue. Nunc neque risus, semper sed dui eu,
      sodales lobortis orci. Aliquam nec sapien ut magna ornare egestas viverra
      ut sem. Suspendisse scelerisque aliquam tempus. Curabitur vel leo
      iaculis, dapibus felis eget, vulputate erat. Vestibulum aliquam, urna non
      porta mollis, odio odio fringilla lacus, non vestibulum ligula diam
      pharetra ante.

      Proin porttitor ex eget nibh suscipit, in scelerisque velit
      pellentesque. Cras tristique lorem lectus, ut cursus lorem malesuada
      vitae. Fusce ligula lacus, malesuada vel felis non, laoreet
      dictum risus. Aliquam hendrerit imperdiet leo, sit amet ornare
      neque. Ut maximus erat ut varius interdum. Pellentesque habitant morbi
      tristique senectus et netus et malesuada fames ac turpis egestas. Mauris
      molestie, metus vel hendrerit tincidunt, eros lorem viverra neque, non
      varius nibh magna porttitor est. In in metus vel tellus commodo
      efficitur nec in metus.

      Etiam scelerisque est velit, vitae mattis risus fringilla ut. Nunc
      volutpat eu urna sit amet euismod. Praesent ac bibendum enim.
      Duis lectus odio, semper fringilla sollicitudin id, malesuada eu
      risus. Sed lobortis felis bibendum augue rutrum mollis. Proin in
      dictum purus. Integer sagittis odio a nisi tristique vulputate.
      Fusce hendrerit rhoncus congue. Nunc neque risus, semper sed dui eu,
      sodales lobortis orci. Aliquam nec sapien ut magna ornare egestas viverra
      ut sem. Suspendisse scelerisque aliquam tempus. Curabitur vel leo
      iaculis, dapibus felis eget, vulputate erat. Vestibulum aliquam, urna non
      porta mollis, odio odio fringilla lacus, non vestibulum ligula diam
      pharetra ante.

      Proin porttitor ex eget nibh suscipit, in scelerisque velit
      pellentesque. Cras tristique lorem lectus, ut cursus lorem malesuada
      vitae. Fusce ligula lacus, malesuada vel felis non, laoreet
      dictum risus. Aliquam hendrerit imperdiet leo, sit amet ornare
      neque. Ut maximus erat ut varius interdum. Pellentesque habitant morbi
      tristique senectus et netus et malesuada fames ac turpis egestas. Mauris
      molestie, metus vel hendrerit tincidunt, eros lorem viverra neque, non
      varius nibh magna porttitor est. In in metus vel tellus commodo
      efficitur nec in metus.
    </div>
  </div>
);

ReactDOM.render(
  <HeaderDemoRouteSnippet1 />,
  document.getElementById('container'),
);
