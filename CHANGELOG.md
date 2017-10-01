# Icon
### Removed
* IconFontAwesome was removed.
* IconLibrary was renamed into IconCustom.
* Icon's tabIndex and onCLock props were removed.

### Changes
* IconSvg was added.
* Icon prop.size='inherit' replaced with prop.size='custom'.
* All components, dependant on Icon, now use IconSvg as a default icon component.
* All components, dependant on Icon, now can work with two icon types: 'svg' (IconSvg) and 'custom' (IconCustom).
* Renamed prop.src to prop.iconSrc in the IconCustom. It's necessary because IconSvg and IconCustom have the same prop.src but the type is different(object and string accordingly). And Icon component needs to differentiate which prop.src type to which component belongs to avoid warnings about wrong propType in the browser's console.
