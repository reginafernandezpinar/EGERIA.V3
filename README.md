# EGERIA.V3
Final Project Codespace Bootcamp

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This project needs the following platforms installed and configured in order to work:

1. **Node.js**: This platform has been tested with the version `10.15.0` 
2. **MySQL**: This platform has been tested with the version `8.0` 

#### Database creation
Please execute the commands included in the file [egeria-schema_0.1.sql](/server/config/db/egeria-schema_0.1.sql).
The default connection parameters are as follows:
````
host: 'localhost',
user: 'root',
password: 'root',
database: 'egeria'
````

### Installing

1. **Server**

Go to the folder `server` and run the following commands

```
npm install
set PORT=5000 ($env:PORT = 5000 for PowerShell users)
npm start
```

The server should be running then.

1. **Client**

Go to the folder `client` and run the following commands

```
npm install
npm start
```

The client should then be running on the default port _(localhost://3000)_

## Built With

### Client

* [CRA](https://github.com/facebook/create-react-app) - Create React Application
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
* [Cesium.js](https://cesiumjs.org/) - An open-source JavaScript library for world-class 3D globes and maps.
* [Resium.js](https://resium.darwineducation.com/) - A library of React components for 🌍Cesium
* [Craco-cesium](https://github.com/darwin-education/craco-cesium) - 🌍Cesium + create-react-app
* [Fuse.js](https://fusejs.io/) - Lightweight fuzzy-search library.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [Bootstrap](https://getbootstrap.com/) - an open source toolkit for developing with HTML, CSS, and JS.
* [Reactstrap](https://reactstrap.github.io/) - Easy to use React Bootstrap 4 components
* [react-bootstrap-table2](https://github.com/react-bootstrap-table/react-bootstrap-table2) - Next Generation of react-bootstrap-table
* [react-redux-toastr](https://github.com/diegoddox/react-redux-toastr) - a toastr message implemented with Redux



### Server
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [JWT](https://jwt.io/) - JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.




## Authors

* **Regina Fernández Píñar** - *Initial work* - [reginafernandezpinar](https://github.com/reginafernandezpinar)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to everyone that helped me during the process! (especially to [@dtodo1paco](https://github.com/dtodo1paco)  :)

