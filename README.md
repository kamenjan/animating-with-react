- node-sass 4.9.0 is depending on a deprecated package called hoek 2.16.3 that has a vulnerability. hoek@5.0.3 has this solved.
- this is an actual security issue so DO NOT use this in production!
- see https://github.com/hapijs/hoek/issues/247 for more info

Optimizing rendering process:

NOTE: While playing a radio(stream) youtube content, all interactive ui sites start to lag and do funny stuff

Browsers, DOM and rendering, a must read: http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
Scroll event polling rate and lag issues: https://stackoverflow.com/questions/10966710/choppy-laggy-scroll-event-on-chrome-and-ie
Optimizing rendering process: https://developers.google.com/web/fundamentals/performance/rendering/


React inline CSS and animations:

Styled components library (ISSUE: could not define inline CSS keyframes for animating): 
https://stackoverflow.com/questions/37448937/keyframes-with-inline-styles-reactjs/43500934
https://github.com/styled-components/styled-components#animations

TASK: Try out "styled components" plugin and report (file size, usability, documentation, support, development, ...)
REPORT: It is light weight (16kb). It is nice for direct styling of un-nested elements. When dealing with importet SVGs inside react this process is obfuscated with react refs.  

TASK: Try out react-motion
REPORT:

Light weight library for manipulating SVG assets: http://svgjs.com


Nice example of isometric SVG asset with clean structure: https://github.com/projapati66/Svg-IsometricCityAnimation

Notes on SVG Namespaces: https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course

SVG to Native React Component converter: https://github.com/smooth-code/svgr

SVGO list of plugins: https://github.com/svg/svgo

SVG specs and 3D compatibility issues: https://greensock.com/forums/topic/12022-3d-transform-not-working-in-firefox/

Exporting SVGs using Sketch, best practices: 
https://medium.com/sketch-app-sources/the-best-way-to-export-an-svg-from-sketch-dd8c66bb6ef2
https://medium.com/sketch-app-sources/exploring-ways-to-export-clean-svg-icons-with-sketch-the-correct-way-752e73ec4694

Sketch preferences: https://www.sketchapp.com/docs/preferences//?utm_source=designernews

Animating along a path using GSAP: https://greensock.com/forums/topic/13581-animate-svg-object-along-motion-path/

SVGO ISSUE:
If I let my SVG through SVGO (included in react-svg-loader) without changing anything I get a nice compressed SVG that converted all transforms to attributes, but also lose my IDs. But when I enable "Clean IDs" plugin I do get my IDs, but transforms stay as a style.

SOLUTION: Rename "id" attribute to custom attribute (eg. "id_") raw unoptimized SVG file. Disable "removeUnknownsAndDefaults" plugin so we can keep the custom attribute. Write a custom SVG service in application for handling this custom attribute.