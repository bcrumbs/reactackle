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
