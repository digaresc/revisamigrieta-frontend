# Revisamigrietaappspotcom.DefaultApi

All URIs are relative to *https://revisamigrieta.appspot.com/_ah/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**grietaPublish**](DefaultApi.md#grietaPublish) | **POST** /v1/grietas | 
[**grietaPublishReview**](DefaultApi.md#grietaPublishReview) | **POST** /v1/grietas/{id}/revisiones | 
[**grietaRetrieveAllGrietas**](DefaultApi.md#grietaRetrieveAllGrietas) | **GET** /v1/grietas | 
[**grietaRetrieveAllGrietasReview**](DefaultApi.md#grietaRetrieveAllGrietasReview) | **GET** /v1/grietas/{grietaId}/revisiones | 
[**grietaRetrieveAllPendingGrietas**](DefaultApi.md#grietaRetrieveAllPendingGrietas) | **GET** /v1/grietas/pending | 
[**grietaRetrieveGrietas**](DefaultApi.md#grietaRetrieveGrietas) | **GET** /v1/grietas/{id} | 
[**grietaRetrieveGrietasReview**](DefaultApi.md#grietaRetrieveGrietasReview) | **GET** /v1/grietas/{grietaId}/revisiones/{revisionId} | 


<a name="grietaPublish"></a>
# **grietaPublish**
> grietaPublish(mas20porciento, comentario, desplomes, desprendimiento, golpeteo, hundimiento, pisosHuecos, tweet, vibraciones, latitude, longitude, tipo, diagonales, paralelas, ubicacion, filesId)



### Example
```javascript
var Revisamigrietaappspotcom = require('revisamigrietaappspotcom');
var defaultClient = Revisamigrietaappspotcom.ApiClient.instance;

// Configure OAuth2 access token for authorization: firebase
var firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Revisamigrietaappspotcom.DefaultApi();

var mas20porciento = true; // Boolean | 

var comentario = "comentario_example"; // String | 

var desplomes = true; // Boolean | 

var desprendimiento = true; // Boolean | 

var golpeteo = true; // Boolean | 

var hundimiento = true; // Boolean | 

var pisosHuecos = true; // Boolean | 

var tweet = "tweet_example"; // String | 

var vibraciones = true; // Boolean | 

var latitude = 3.4; // Number | 

var longitude = 3.4; // Number | 

var tipo = "tipo_example"; // String | 

var diagonales = true; // Boolean | 

var paralelas = true; // Boolean | 

var ubicacion = "ubicacion_example"; // String | 

var filesId = "filesId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.grietaPublish(mas20porciento, comentario, desplomes, desprendimiento, golpeteo, hundimiento, pisosHuecos, tweet, vibraciones, latitude, longitude, tipo, diagonales, paralelas, ubicacion, filesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mas20porciento** | **Boolean**|  | 
 **comentario** | **String**|  | 
 **desplomes** | **Boolean**|  | 
 **desprendimiento** | **Boolean**|  | 
 **golpeteo** | **Boolean**|  | 
 **hundimiento** | **Boolean**|  | 
 **pisosHuecos** | **Boolean**|  | 
 **tweet** | **String**|  | 
 **vibraciones** | **Boolean**|  | 
 **latitude** | **Number**|  | 
 **longitude** | **Number**|  | 
 **tipo** | **String**|  | 
 **diagonales** | **Boolean**|  | 
 **paralelas** | **Boolean**|  | 
 **ubicacion** | **String**|  | 
 **filesId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="grietaPublishReview"></a>
# **grietaPublishReview**
> grietaPublishReview(comentarios, diagonalesLosa, diagonalesPiso, paralelasPiso, peligroInminente, id)



### Example
```javascript
var Revisamigrietaappspotcom = require('revisamigrietaappspotcom');
var defaultClient = Revisamigrietaappspotcom.ApiClient.instance;

// Configure OAuth2 access token for authorization: firebase
var firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Revisamigrietaappspotcom.DefaultApi();

var comentarios = "comentarios_example"; // String | 

var diagonalesLosa = true; // Boolean | 

var diagonalesPiso = true; // Boolean | 

var paralelasPiso = true; // Boolean | 

var peligroInminente = true; // Boolean | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.grietaPublishReview(comentarios, diagonalesLosa, diagonalesPiso, paralelasPiso, peligroInminente, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **comentarios** | **String**|  | 
 **diagonalesLosa** | **Boolean**|  | 
 **diagonalesPiso** | **Boolean**|  | 
 **paralelasPiso** | **Boolean**|  | 
 **peligroInminente** | **Boolean**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="grietaRetrieveAllGrietas"></a>
# **grietaRetrieveAllGrietas**
> GrietaModelCollection grietaRetrieveAllGrietas()



### Example
```javascript
var Revisamigrietaappspotcom = require('revisamigrietaappspotcom');

var apiInstance = new Revisamigrietaappspotcom.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.grietaRetrieveAllGrietas(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GrietaModelCollection**](GrietaModelCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="grietaRetrieveAllGrietasReview"></a>
# **grietaRetrieveAllGrietasReview**
> RevisionModelCollection grietaRetrieveAllGrietasReview(grietaId)



### Example
```javascript
var Revisamigrietaappspotcom = require('revisamigrietaappspotcom');

var apiInstance = new Revisamigrietaappspotcom.DefaultApi();

var grietaId = "grietaId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.grietaRetrieveAllGrietasReview(grietaId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grietaId** | **String**|  | 

### Return type

[**RevisionModelCollection**](RevisionModelCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="grietaRetrieveAllPendingGrietas"></a>
# **grietaRetrieveAllPendingGrietas**
> GrietaModelCollection grietaRetrieveAllPendingGrietas()



### Example
```javascript
var Revisamigrietaappspotcom = require('revisamigrietaappspotcom');

var apiInstance = new Revisamigrietaappspotcom.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.grietaRetrieveAllPendingGrietas(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GrietaModelCollection**](GrietaModelCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="grietaRetrieveGrietas"></a>
# **grietaRetrieveGrietas**
> GrietaModel grietaRetrieveGrietas(id)



### Example
```javascript
var Revisamigrietaappspotcom = require('revisamigrietaappspotcom');

var apiInstance = new Revisamigrietaappspotcom.DefaultApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.grietaRetrieveGrietas(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**GrietaModel**](GrietaModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="grietaRetrieveGrietasReview"></a>
# **grietaRetrieveGrietasReview**
> RevisionModel grietaRetrieveGrietasReview(grietaId, revisionId)



### Example
```javascript
var Revisamigrietaappspotcom = require('revisamigrietaappspotcom');

var apiInstance = new Revisamigrietaappspotcom.DefaultApi();

var grietaId = "grietaId_example"; // String | 

var revisionId = "revisionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.grietaRetrieveGrietasReview(grietaId, revisionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grietaId** | **String**|  | 
 **revisionId** | **String**|  | 

### Return type

[**RevisionModel**](RevisionModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

