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