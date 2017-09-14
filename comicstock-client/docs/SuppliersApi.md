# ComicStockwebApi.SuppliersApi

All URIs are relative to *http://frontendshowcase.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suppliersDelete**](SuppliersApi.md#suppliersDelete) | **DELETE** /api/Suppliers/{id} | 
[**suppliersDelete_0**](SuppliersApi.md#suppliersDelete_0) | **DELETE** /api/Suppliers/{IssueId}/stock/{stockId}/Delete | 
[**suppliersDelete_1**](SuppliersApi.md#suppliersDelete_1) | **DELETE** /api/Suppliers/{supplierId}/issues/{issueId}/Delete | 
[**suppliersGet**](SuppliersApi.md#suppliersGet) | **GET** /api/Suppliers | 
[**suppliersGet_0**](SuppliersApi.md#suppliersGet_0) | **GET** /api/Suppliers/{id} | 
[**suppliersGet_1**](SuppliersApi.md#suppliersGet_1) | **GET** /api/Suppliers/{IssueId}/stock/{stockId}/Get | 
[**suppliersGet_2**](SuppliersApi.md#suppliersGet_2) | **GET** /api/Suppliers/{supplierId}/issues/{issueId}/Get | 
[**suppliersOrder**](SuppliersApi.md#suppliersOrder) | **POST** /api/Suppliers/{issueId}/stock/{stockId}/order | 
[**suppliersOrder_0**](SuppliersApi.md#suppliersOrder_0) | **POST** /api/Suppliers/{supplierId}/issues/{issueId}/order | 
[**suppliersPatch**](SuppliersApi.md#suppliersPatch) | **PATCH** /api/Suppliers | 
[**suppliersPatch_0**](SuppliersApi.md#suppliersPatch_0) | **PATCH** /api/Suppliers/{IssueId}/stock/{stockId}/Patch | 
[**suppliersPatch_1**](SuppliersApi.md#suppliersPatch_1) | **PATCH** /api/Suppliers/{supplierId}/issues/{issueId}/Patch | 
[**suppliersPost**](SuppliersApi.md#suppliersPost) | **POST** /api/Suppliers | 
[**suppliersPost_0**](SuppliersApi.md#suppliersPost_0) | **POST** /api/Suppliers/{IssueId}/stock/{stockId}/Post | 
[**suppliersPost_1**](SuppliersApi.md#suppliersPost_1) | **POST** /api/Suppliers/{supplierId}/issues/{issueId}/Post | 
[**suppliersPut**](SuppliersApi.md#suppliersPut) | **PUT** /api/Suppliers | 
[**suppliersPut_0**](SuppliersApi.md#suppliersPut_0) | **PUT** /api/Suppliers/{IssueId}/stock/{stockId}/Put | 
[**suppliersPut_1**](SuppliersApi.md#suppliersPut_1) | **PUT** /api/Suppliers/{supplierId}/issues/{issueId}/Put | 


<a name="suppliersDelete"></a>
# **suppliersDelete**
> suppliersDelete(id)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.suppliersDelete(id, callback);
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

<a name="suppliersDelete_0"></a>
# **suppliersDelete_0**
> suppliersDelete_0(id, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

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
apiInstance.suppliersDelete_0(id, issueId, stockId, callback);
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

<a name="suppliersDelete_1"></a>
# **suppliersDelete_1**
> suppliersDelete_1(id, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

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
apiInstance.suppliersDelete_1(id, supplierId, issueId, callback);
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

<a name="suppliersGet"></a>
# **suppliersGet**
> [SupplierDto] suppliersGet()



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[SupplierDto]**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersGet_0"></a>
# **suppliersGet_0**
> SupplierDto suppliersGet_0(id)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersGet_0(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**SupplierDto**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersGet_1"></a>
# **suppliersGet_1**
> [SupplierDto] suppliersGet_1(issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersGet_1(issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**[SupplierDto]**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersGet_2"></a>
# **suppliersGet_2**
> [SupplierDto] suppliersGet_2(supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersGet_2(supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**[SupplierDto]**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersOrder"></a>
# **suppliersOrder**
> OrderStockResponse suppliersOrder(supplierId, issueId, qualityInput, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplierId = 56; // Number | 

var issueId = 56; // Number | 

var qualityInput = new ComicStockwebApi.QualityInput(); // QualityInput | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersOrder(supplierId, issueId, qualityInput, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **Number**|  | 
 **issueId** | **Number**|  | 
 **qualityInput** | [**QualityInput**](QualityInput.md)|  | 
 **stockId** | **String**|  | 

### Return type

[**OrderStockResponse**](OrderStockResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json

<a name="suppliersOrder_0"></a>
# **suppliersOrder_0**
> OrderStockResponse suppliersOrder_0(supplierId, issueId, qualityInput)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplierId = 56; // Number | 

var issueId = 56; // Number | 

var qualityInput = new ComicStockwebApi.QualityInput(); // QualityInput | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersOrder_0(supplierId, issueId, qualityInput, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **Number**|  | 
 **issueId** | **Number**|  | 
 **qualityInput** | [**QualityInput**](QualityInput.md)|  | 

### Return type

[**OrderStockResponse**](OrderStockResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json

<a name="suppliersPatch"></a>
# **suppliersPatch**
> SupplierDto suppliersPatch(supplier)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplier = new ComicStockwebApi.SupplierDto(); // SupplierDto | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersPatch(supplier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**SupplierDto**](SupplierDto.md)|  | 

### Return type

[**SupplierDto**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersPatch_0"></a>
# **suppliersPatch_0**
> SupplierDto suppliersPatch_0(supplier, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplier = new ComicStockwebApi.SupplierDto(); // SupplierDto | 

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersPatch_0(supplier, issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**SupplierDto**](SupplierDto.md)|  | 
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**SupplierDto**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersPatch_1"></a>
# **suppliersPatch_1**
> SupplierDto suppliersPatch_1(supplier, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplier = new ComicStockwebApi.SupplierDto(); // SupplierDto | 

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersPatch_1(supplier, supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**SupplierDto**](SupplierDto.md)|  | 
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**SupplierDto**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersPost"></a>
# **suppliersPost**
> SupplierDto suppliersPost(supplier)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplier = new ComicStockwebApi.SupplierDto(); // SupplierDto | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersPost(supplier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**SupplierDto**](SupplierDto.md)|  | 

### Return type

[**SupplierDto**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersPost_0"></a>
# **suppliersPost_0**
> SupplierDto suppliersPost_0(supplier, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplier = new ComicStockwebApi.SupplierDto(); // SupplierDto | 

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersPost_0(supplier, issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**SupplierDto**](SupplierDto.md)|  | 
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**SupplierDto**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersPost_1"></a>
# **suppliersPost_1**
> SupplierDto suppliersPost_1(supplier, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplier = new ComicStockwebApi.SupplierDto(); // SupplierDto | 

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersPost_1(supplier, supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**SupplierDto**](SupplierDto.md)|  | 
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**SupplierDto**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersPut"></a>
# **suppliersPut**
> SupplierDto suppliersPut(supplier)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplier = new ComicStockwebApi.SupplierDto(); // SupplierDto | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersPut(supplier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**SupplierDto**](SupplierDto.md)|  | 

### Return type

[**SupplierDto**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersPut_0"></a>
# **suppliersPut_0**
> SupplierDto suppliersPut_0(supplier, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplier = new ComicStockwebApi.SupplierDto(); // SupplierDto | 

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersPut_0(supplier, issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**SupplierDto**](SupplierDto.md)|  | 
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**SupplierDto**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="suppliersPut_1"></a>
# **suppliersPut_1**
> SupplierDto suppliersPut_1(supplier, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.SuppliersApi();

var supplier = new ComicStockwebApi.SupplierDto(); // SupplierDto | 

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersPut_1(supplier, supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**SupplierDto**](SupplierDto.md)|  | 
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**SupplierDto**](SupplierDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

