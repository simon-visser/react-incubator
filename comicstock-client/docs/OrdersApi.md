# ComicStockwebApi.OrdersApi

All URIs are relative to *http://frontendshowcase.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ordersDelete**](OrdersApi.md#ordersDelete) | **DELETE** /api/Orders/{id} | 
[**ordersDelete_0**](OrdersApi.md#ordersDelete_0) | **DELETE** /api/Orders/{IssueId}/stock/{stockId}/Delete | 
[**ordersDelete_1**](OrdersApi.md#ordersDelete_1) | **DELETE** /api/Orders/{supplierId}/issues/{issueId}/Delete | 
[**ordersGet**](OrdersApi.md#ordersGet) | **GET** /api/Orders | 
[**ordersGet_0**](OrdersApi.md#ordersGet_0) | **GET** /api/Orders/{id} | 
[**ordersGet_1**](OrdersApi.md#ordersGet_1) | **GET** /api/Orders/{IssueId}/stock/{stockId}/Get | 
[**ordersGet_2**](OrdersApi.md#ordersGet_2) | **GET** /api/Orders/{supplierId}/issues/{issueId}/Get | 
[**ordersPut**](OrdersApi.md#ordersPut) | **PUT** /api/Orders | 
[**ordersPut_0**](OrdersApi.md#ordersPut_0) | **PUT** /api/Orders/{IssueId}/stock/{stockId}/Put | 
[**ordersPut_1**](OrdersApi.md#ordersPut_1) | **PUT** /api/Orders/{supplierId}/issues/{issueId}/Put | 


<a name="ordersDelete"></a>
# **ordersDelete**
> ordersDelete(id)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.OrdersApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.ordersDelete(id, callback);
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

<a name="ordersDelete_0"></a>
# **ordersDelete_0**
> ordersDelete_0(id, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.OrdersApi();

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
apiInstance.ordersDelete_0(id, issueId, stockId, callback);
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

<a name="ordersDelete_1"></a>
# **ordersDelete_1**
> ordersDelete_1(id, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.OrdersApi();

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
apiInstance.ordersDelete_1(id, supplierId, issueId, callback);
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

<a name="ordersGet"></a>
# **ordersGet**
> [OrderDto] ordersGet()



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.OrdersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[OrderDto]**](OrderDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="ordersGet_0"></a>
# **ordersGet_0**
> OrderDto ordersGet_0(id)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.OrdersApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersGet_0(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**OrderDto**](OrderDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="ordersGet_1"></a>
# **ordersGet_1**
> [OrderDto] ordersGet_1(issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.OrdersApi();

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersGet_1(issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**[OrderDto]**](OrderDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="ordersGet_2"></a>
# **ordersGet_2**
> [OrderDto] ordersGet_2(supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.OrdersApi();

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersGet_2(supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**[OrderDto]**](OrderDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="ordersPut"></a>
# **ordersPut**
> OrderDto ordersPut(input)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.OrdersApi();

var input = new ComicStockwebApi.OrderInput(); // OrderInput | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersPut(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**OrderInput**](OrderInput.md)|  | 

### Return type

[**OrderDto**](OrderDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="ordersPut_0"></a>
# **ordersPut_0**
> OrderDto ordersPut_0(input, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.OrdersApi();

var input = new ComicStockwebApi.OrderInput(); // OrderInput | 

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersPut_0(input, issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**OrderInput**](OrderInput.md)|  | 
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**OrderDto**](OrderDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="ordersPut_1"></a>
# **ordersPut_1**
> OrderDto ordersPut_1(input, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.OrdersApi();

var input = new ComicStockwebApi.OrderInput(); // OrderInput | 

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersPut_1(input, supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**OrderInput**](OrderInput.md)|  | 
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**OrderDto**](OrderDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

