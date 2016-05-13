# gx-js-starterkit

#### Structure

```
-- src
---- containers -> Glue application states with views, use molecules or atoms to return smart component
---- redux -> Contain all redux logic
---- static -> Static sources
---- ui -> Contain all the dumb components, atomic design way
------ elements -> very simple components, like button or list, they are atoms
------ layouts -> higher html organisation, contain views, they are templates
------ modules -> modules are elements compositions, they are molecules
------ views -> sub-layouts, contain organism, elements or containers, they are organisms
```