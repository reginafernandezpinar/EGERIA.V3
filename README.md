# EGERIA.V3
Final Project Codespace Bootcamp

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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
set PORT=5000
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

* [CRA](https://github.com/facebook/create-react-app) - Create React Application


## Authors

* **Regina Fernández Píñar** - *Initial work* - [reginafernandezpinar](https://github.com/reginafernandezpinar)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to everyone that helped me during the process! (especially to [@dtodo1paco](https://github.com/dtodo1paco)  :)

