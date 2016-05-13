# gx-js-starterkit

#### Content

- React
- Redux
- React-router
- SASS ready
- Redux dev tools

#### Structure

```
-- module-bundler           -> contain module bundler config
-- src
------ application-state    -> Contain all state logic (redux)
------ containers           -> Data binder (smart component)
------ dev-tools            -> Dev specific tools
------ static               -> Static sources
------ ui                   -> Contain all the dumb components and css. Only UI state logic should be handled here
---------- css              -> css library (components css are in same folder with same name)
---------- elements         -> very simple components (eg: button, list element)
---------- layouts          -> highest html organisation, contain views
---------- modules          -> elements composition (eg: form, list).
---------- views            -> sub-layouts (eg: header, footer)
```


#### TODO

- [ ] Add test libs
- [ ] Add bottle.js (service container)
- [ ] API communication boilerplate