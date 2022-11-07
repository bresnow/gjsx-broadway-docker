# Gtk-4.0 Typescript JSX Broadway Docker

- Uses nodejs for compiling typescript
- Uses docker to run gnome js and gtk4 
- Gtk-4 Broadway runs native applications in the browser.
- Custom JSX runtime ["Gjsx"]("lib/gjsx/index.ts") 

```terminal
yarn
yarn image up --build
```
Visit http://localhost:39660 

### Todos & Goals

- Eliminate the need for nodejs to compile by using Gnome classes during the build stage.
    Esbuild is fast and performant but using multiple runtimes can be resource heavy with larger applications.