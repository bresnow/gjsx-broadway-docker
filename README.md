### Hail Hello && Goodbye! This is a The Aminion Project
# Gtk-4.0 Typescript JSX Broadway Docker
This project builds a gtk-4.0 gjs project with esbuild via nodejs as a custom jsx runtime ["Gjsx"](gi_modules/gjsx/index.ts). Types are included to help build reliable code and hover documentation in the ide. All the gnome packages containerized with docker so the only dependencies needed are Docker and NodeJs. (Docker Compose is a plus but not absolutely necessary. You will need it to follow the instructions below)

## Running the project locally
Clone the project. Compile the jsx in the source directories.
```terminal
git clone https://github.com/bresnow/gjsx-broadway-docker.git 
cd gjsx-broadway-docker
yarn
yarn build
```
Then deploy the swarm stack [Here.](docker/stack-dev.yml) with the proper environment variables.
```terminal
yarn deploy
```
Visit http://localhost:8086 

