# ComicStockwebApi.CreatorsApi

All URIs are relative to *http://frontendshowcase.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**creatorsDelete**](CreatorsApi.md#creatorsDelete) | **DELETE** /api/Creators/{id} | 
[**creatorsDelete_0**](CreatorsApi.md#creatorsDelete_0) | **DELETE** /api/Creators/{IssueId}/stock/{stockId}/Delete | 
[**creatorsDelete_1**](CreatorsApi.md#creatorsDelete_1) | **DELETE** /api/Creators/{supplierId}/issues/{issueId}/Delete | 
[**creatorsGet**](CreatorsApi.md#creatorsGet) | **GET** /api/Creators | 
[**creatorsGet_0**](CreatorsApi.md#creatorsGet_0) | **GET** /api/Creators/{id} | 
[**creatorsGet_1**](CreatorsApi.md#creatorsGet_1) | **GET** /api/Creators/{IssueId}/stock/{stockId}/Get | 
[**creatorsGet_2**](CreatorsApi.md#creatorsGet_2) | **GET** /api/Creators/{supplierId}/issues/{issueId}/Get | 
[**creatorsPost**](CreatorsApi.md#creatorsPost) | **POST** /api/Creators | 
[**creatorsPost_0**](CreatorsApi.md#creatorsPost_0) | **POST** /api/Creators/{IssueId}/stock/{stockId}/Post | 
[**creatorsPost_1**](CreatorsApi.md#creatorsPost_1) | **POST** /api/Creators/{supplierId}/issues/{issueId}/Post | 
[**creatorsPut**](CreatorsApi.md#creatorsPut) | **PUT** /api/Creators | 
[**creatorsPut_0**](CreatorsApi.md#creatorsPut_0) | **PUT** /api/Creators/{IssueId}/stock/{stockId}/Put | 
[**creatorsPut_1**](CreatorsApi.md#creatorsPut_1) | **PUT** /api/Creators/{supplierId}/issues/{issueId}/Put | 


<a name="creatorsDelete"></a>
# **creatorsDelete**
> creatorsDelete(id)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.creatorsDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="creatorsDelete_0"></a>
# **creatorsDelete_0**
> creatorsDelete_0(id, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var id = 56; // Number | 

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.creatorsDelete_0(id, issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="creatorsDelete_1"></a>
# **creatorsDelete_1**
> creatorsDelete_1(id, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var id = 56; // Number | 

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.creatorsDelete_1(id, supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="creatorsGet"></a>
# **creatorsGet**
> [CreatorDto] creatorsGet()



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatorsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CreatorDto]**](CreatorDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="creatorsGet_0"></a>
# **creatorsGet_0**
> CreatorDto creatorsGet_0(id)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatorsGet_0(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**CreatorDto**](CreatorDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="creatorsGet_1"></a>
# **creatorsGet_1**
> [CreatorDto] creatorsGet_1(issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatorsGet_1(issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**[CreatorDto]**](CreatorDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="creatorsGet_2"></a>
# **creatorsGet_2**
> [CreatorDto] creatorsGet_2(supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatorsGet_2(supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**[CreatorDto]**](CreatorDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="creatorsPost"></a>
# **creatorsPost**
> CreatorDto creatorsPost(creator)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var creator = new ComicStockwebApi.CreatorDto(); // CreatorDto | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatorsPost(creator, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creator** | [**CreatorDto**](CreatorDto.md)|  | 

### Return type

[**CreatorDto**](CreatorDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="creatorsPost_0"></a>
# **creatorsPost_0**
> CreatorDto creatorsPost_0(creator, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var creator = new ComicStockwebApi.CreatorDto(); // CreatorDto | 

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatorsPost_0(creator, issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creator** | [**CreatorDto**](CreatorDto.md)|  | 
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**CreatorDto**](CreatorDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="creatorsPost_1"></a>
# **creatorsPost_1**
> CreatorDto creatorsPost_1(creator, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var creator = new ComicStockwebApi.CreatorDto(); // CreatorDto | 

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatorsPost_1(creator, supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creator** | [**CreatorDto**](CreatorDto.md)|  | 
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**CreatorDto**](CreatorDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="creatorsPut"></a>
# **creatorsPut**
> CreatorDto creatorsPut(creator)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var creator = new ComicStockwebApi.CreatorDto(); // CreatorDto | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatorsPut(creator, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creator** | [**CreatorDto**](CreatorDto.md)|  | 

### Return type

[**CreatorDto**](CreatorDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="creatorsPut_0"></a>
# **creatorsPut_0**
> CreatorDto creatorsPut_0(creator, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var creator = new ComicStockwebApi.CreatorDto(); // CreatorDto | 

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatorsPut_0(creator, issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creator** | [**CreatorDto**](CreatorDto.md)|  | 
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**CreatorDto**](CreatorDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="creatorsPut_1"></a>
# **creatorsPut_1**
> CreatorDto creatorsPut_1(creator, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.CreatorsApi();

var creator = new ComicStockwebApi.CreatorDto(); // CreatorDto | 

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatorsPut_1(creator, supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creator** | [**CreatorDto**](CreatorDto.md)|  | 
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**CreatorDto**](CreatorDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

