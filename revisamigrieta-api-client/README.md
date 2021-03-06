# revisamigrietaappspotcom

Revisamigrietaappspotcom - JavaScript client for revisamigrietaappspotcom
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install revisamigrietaappspotcom --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your revisamigrietaappspotcom from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('revisamigrietaappspotcom')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/revisamigrietaappspotcom
then install it via:

```shell
    npm install YOUR_USERNAME/revisamigrietaappspotcom --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Revisamigrietaappspotcom = require('revisamigrietaappspotcom');

var defaultClient = Revisamigrietaappspotcom.ApiClient.instance;

// Configure OAuth2 access token for authorization: firebase
var firebase = defaultClient.authentications['firebase'];
firebase.accessToken = "YOUR ACCESS TOKEN"

var api = new Revisamigrietaappspotcom.DefaultApi()

var mas20porciento = true; // {Boolean} 

var comentario = "comentario_example"; // {String} 

var desplomes = true; // {Boolean} 

var desprendimiento = true; // {Boolean} 

var golpeteo = true; // {Boolean} 

var hundimiento = true; // {Boolean} 

var pisosHuecos = true; // {Boolean} 

var tweet = "tweet_example"; // {String} 

var vibraciones = true; // {Boolean} 

var latitude = 3.4; // {Number} 

var longitude = 3.4; // {Number} 

var tipo = "tipo_example"; // {String} 

var diagonales = true; // {Boolean} 

var paralelas = true; // {Boolean} 

var ubicacion = "ubicacion_example"; // {String} 

var filesId = "filesId_example"; // {String} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.grietaPublish(mas20porciento, comentario, desplomes, desprendimiento, golpeteo, hundimiento, pisosHuecos, tweet, vibraciones, latitude, longitude, tipo, diagonales, paralelas, ubicacion, filesId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://revisamigrieta.appspot.com/_ah/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Revisamigrietaappspotcom.DefaultApi* | [**grietaPublish**](docs/DefaultApi.md#grietaPublish) | **POST** /v1/grietas | 
*Revisamigrietaappspotcom.DefaultApi* | [**grietaPublishReview**](docs/DefaultApi.md#grietaPublishReview) | **POST** /v1/grietas/{id}/revisiones | 
*Revisamigrietaappspotcom.DefaultApi* | [**grietaRetrieveAllGrietas**](docs/DefaultApi.md#grietaRetrieveAllGrietas) | **GET** /v1/grietas | 
*Revisamigrietaappspotcom.DefaultApi* | [**grietaRetrieveAllGrietasReview**](docs/DefaultApi.md#grietaRetrieveAllGrietasReview) | **GET** /v1/grietas/{grietaId}/revisiones | 
*Revisamigrietaappspotcom.DefaultApi* | [**grietaRetrieveAllPendingGrietas**](docs/DefaultApi.md#grietaRetrieveAllPendingGrietas) | **GET** /v1/grietas/pending | 
*Revisamigrietaappspotcom.DefaultApi* | [**grietaRetrieveGrietas**](docs/DefaultApi.md#grietaRetrieveGrietas) | **GET** /v1/grietas/{id} | 
*Revisamigrietaappspotcom.DefaultApi* | [**grietaRetrieveGrietasReview**](docs/DefaultApi.md#grietaRetrieveGrietasReview) | **GET** /v1/grietas/{grietaId}/revisiones/{revisionId} | 


## Documentation for Models

 - [Revisamigrietaappspotcom.EstadoDeObra](docs/EstadoDeObra.md)
 - [Revisamigrietaappspotcom.GeoPt](docs/GeoPt.md)
 - [Revisamigrietaappspotcom.GrietaModel](docs/GrietaModel.md)
 - [Revisamigrietaappspotcom.GrietaModelCollection](docs/GrietaModelCollection.md)
 - [Revisamigrietaappspotcom.RevisionModel](docs/RevisionModel.md)
 - [Revisamigrietaappspotcom.RevisionModelCollection](docs/RevisionModelCollection.md)
 - [Revisamigrietaappspotcom.TipoEnum](docs/TipoEnum.md)
 - [Revisamigrietaappspotcom.UbicacionEnum](docs/UbicacionEnum.md)


## Documentation for Authorization


### firebase

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: 
- **Scopes**: N/A

