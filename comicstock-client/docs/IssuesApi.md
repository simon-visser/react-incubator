# ComicStockwebApi.IssuesApi

All URIs are relative to *http://frontendshowcase.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issuesAdd**](IssuesApi.md#issuesAdd) | **POST** /api/Issues/{issueId}/stock/{stockId}/add | 
[**issuesAdd_0**](IssuesApi.md#issuesAdd_0) | **POST** /api/Issues/{supplierId}/issues/{issueId}/add | 
[**issuesDelete**](IssuesApi.md#issuesDelete) | **DELETE** /api/Issues/{id} | 
[**issuesDelete_0**](IssuesApi.md#issuesDelete_0) | **DELETE** /api/Issues/{IssueId}/stock/{stockId}/Delete | 
[**issuesDelete_1**](IssuesApi.md#issuesDelete_1) | **DELETE** /api/Issues/{supplierId}/issues/{issueId}/Delete | 
[**issuesGet**](IssuesApi.md#issuesGet) | **GET** /api/Issues | 
[**issuesGetForSupplier**](IssuesApi.md#issuesGetForSupplier) | **GET** /api/Issues/{IssueId}/stock/{stockId}/GetForSupplier | 
[**issuesGetForSupplier_0**](IssuesApi.md#issuesGetForSupplier_0) | **GET** /api/Issues/{supplierId}/issues/{issueId}/GetForSupplier | 
[**issuesGet_0**](IssuesApi.md#issuesGet_0) | **GET** /api/Issues/{id} | 
[**issuesGet_1**](IssuesApi.md#issuesGet_1) | **GET** /api/Issues/{IssueId}/stock/{stockId}/Get | 
[**issuesGet_2**](IssuesApi.md#issuesGet_2) | **GET** /api/Issues/{supplierId}/issues/{issueId}/Get | 
[**issuesPost**](IssuesApi.md#issuesPost) | **POST** /api/Issues | 
[**issuesPost_0**](IssuesApi.md#issuesPost_0) | **POST** /api/Issues/{IssueId}/stock/{stockId}/Post | 
[**issuesPost_1**](IssuesApi.md#issuesPost_1) | **POST** /api/Issues/{supplierId}/issues/{issueId}/Post | 
[**issuesPut**](IssuesApi.md#issuesPut) | **PUT** /api/Issues | 
[**issuesPut_0**](IssuesApi.md#issuesPut_0) | **PUT** /api/Issues/{IssueId}/stock/{stockId}/Put | 
[**issuesPut_1**](IssuesApi.md#issuesPut_1) | **PUT** /api/Issues/{supplierId}/issues/{issueId}/Put | 
[**issuesRemove**](IssuesApi.md#issuesRemove) | **DELETE** /api/Issues | 
[**issuesRemove_0**](IssuesApi.md#issuesRemove_0) | **DELETE** /api/Issues/{issueId}/stock/{stockId}/remove | 
[**issuesRemove_1**](IssuesApi.md#issuesRemove_1) | **DELETE** /api/Issues/{supplierId}/issues/{issueId}/remove | 
[**issuesReturn**](IssuesApi.md#issuesReturn) | **POST** /api/Issues/{issueId}/stock/{stockId}/return | 
[**issuesReturn_0**](IssuesApi.md#issuesReturn_0) | **POST** /api/Issues/{supplierId}/issues/{issueId}/return | 


<a name="issuesAdd"></a>
# **issuesAdd**
> issuesAdd(issueId, conditionId, quantity, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issueId = 56; // Number | 

var conditionId = 56; // Number | 

var quantity = 56; // Number | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.issuesAdd(issueId, conditionId, quantity, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **Number**|  | 
 **conditionId** | **Number**|  | 
 **quantity** | **Number**|  | 
 **stockId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issuesAdd_0"></a>
# **issuesAdd_0**
> issuesAdd_0(issueId, conditionId, quantity, supplierId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issueId = 56; // Number | 

var conditionId = 56; // Number | 

var quantity = 56; // Number | 

var supplierId = "supplierId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.issuesAdd_0(issueId, conditionId, quantity, supplierId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **Number**|  | 
 **conditionId** | **Number**|  | 
 **quantity** | **Number**|  | 
 **supplierId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issuesDelete"></a>
# **issuesDelete**
> issuesDelete(id)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.issuesDelete(id, callback);
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

<a name="issuesDelete_0"></a>
# **issuesDelete_0**
> issuesDelete_0(id, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

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
apiInstance.issuesDelete_0(id, issueId, stockId, callback);
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

<a name="issuesDelete_1"></a>
# **issuesDelete_1**
> issuesDelete_1(id, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

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
apiInstance.issuesDelete_1(id, supplierId, issueId, callback);
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

<a name="issuesGet"></a>
# **issuesGet**
> [IssueDto] issuesGet()



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[IssueDto]**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesGetForSupplier"></a>
# **issuesGetForSupplier**
> [IssueDto] issuesGetForSupplier(supplierId, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var supplierId = 56; // Number | 

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesGetForSupplier(supplierId, issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **Number**|  | 
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**[IssueDto]**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesGetForSupplier_0"></a>
# **issuesGetForSupplier_0**
> [IssueDto] issuesGetForSupplier_0(supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var supplierId = 56; // Number | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesGetForSupplier_0(supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **Number**|  | 
 **issueId** | **String**|  | 

### Return type

[**[IssueDto]**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesGet_0"></a>
# **issuesGet_0**
> IssueDto issuesGet_0(id)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesGet_0(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**IssueDto**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesGet_1"></a>
# **issuesGet_1**
> [IssueDto] issuesGet_1(issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesGet_1(issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**[IssueDto]**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesGet_2"></a>
# **issuesGet_2**
> [IssueDto] issuesGet_2(supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesGet_2(supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**[IssueDto]**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesPost"></a>
# **issuesPost**
> IssueDto issuesPost(issue)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issue = new ComicStockwebApi.IssueDto(); // IssueDto | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesPost(issue, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue** | [**IssueDto**](IssueDto.md)|  | 

### Return type

[**IssueDto**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesPost_0"></a>
# **issuesPost_0**
> IssueDto issuesPost_0(issue, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issue = new ComicStockwebApi.IssueDto(); // IssueDto | 

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesPost_0(issue, issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue** | [**IssueDto**](IssueDto.md)|  | 
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**IssueDto**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesPost_1"></a>
# **issuesPost_1**
> IssueDto issuesPost_1(issue, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issue = new ComicStockwebApi.IssueDto(); // IssueDto | 

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesPost_1(issue, supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue** | [**IssueDto**](IssueDto.md)|  | 
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**IssueDto**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesPut"></a>
# **issuesPut**
> IssueDto issuesPut(issue)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issue = new ComicStockwebApi.IssueDto(); // IssueDto | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesPut(issue, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue** | [**IssueDto**](IssueDto.md)|  | 

### Return type

[**IssueDto**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesPut_0"></a>
# **issuesPut_0**
> IssueDto issuesPut_0(issue, issueId, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issue = new ComicStockwebApi.IssueDto(); // IssueDto | 

var issueId = "issueId_example"; // String | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesPut_0(issue, issueId, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue** | [**IssueDto**](IssueDto.md)|  | 
 **issueId** | **String**|  | 
 **stockId** | **String**|  | 

### Return type

[**IssueDto**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesPut_1"></a>
# **issuesPut_1**
> IssueDto issuesPut_1(issue, supplierId, issueId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issue = new ComicStockwebApi.IssueDto(); // IssueDto | 

var supplierId = "supplierId_example"; // String | 

var issueId = "issueId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesPut_1(issue, supplierId, issueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue** | [**IssueDto**](IssueDto.md)|  | 
 **supplierId** | **String**|  | 
 **issueId** | **String**|  | 

### Return type

[**IssueDto**](IssueDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/vnd.api+json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/vnd.api+json, application/xml, text/xml

<a name="issuesRemove"></a>
# **issuesRemove**
> issuesRemove(issueId, stockId, quantity)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issueId = 56; // Number | 

var stockId = 56; // Number | 

var quantity = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.issuesRemove(issueId, stockId, quantity, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **Number**|  | 
 **stockId** | **Number**|  | 
 **quantity** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issuesRemove_0"></a>
# **issuesRemove_0**
> issuesRemove_0(issueId, stockId, quantity)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issueId = 56; // Number | 

var stockId = 56; // Number | 

var quantity = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.issuesRemove_0(issueId, stockId, quantity, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **Number**|  | 
 **stockId** | **Number**|  | 
 **quantity** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issuesRemove_1"></a>
# **issuesRemove_1**
> issuesRemove_1(issueId, stockId, quantity, supplierId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issueId = 56; // Number | 

var stockId = 56; // Number | 

var quantity = 56; // Number | 

var supplierId = "supplierId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.issuesRemove_1(issueId, stockId, quantity, supplierId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **Number**|  | 
 **stockId** | **Number**|  | 
 **quantity** | **Number**|  | 
 **supplierId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issuesReturn"></a>
# **issuesReturn**
> issuesReturn(issueId, conditionId, quantity, stockId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issueId = 56; // Number | 

var conditionId = 56; // Number | 

var quantity = 56; // Number | 

var stockId = "stockId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.issuesReturn(issueId, conditionId, quantity, stockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **Number**|  | 
 **conditionId** | **Number**|  | 
 **quantity** | **Number**|  | 
 **stockId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issuesReturn_0"></a>
# **issuesReturn_0**
> issuesReturn_0(issueId, conditionId, quantity, supplierId)



### Example
```javascript
var ComicStockwebApi = require('comic_stockweb_api');

var apiInstance = new ComicStockwebApi.IssuesApi();

var issueId = 56; // Number | 

var conditionId = 56; // Number | 

var quantity = 56; // Number | 

var supplierId = "supplierId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.issuesReturn_0(issueId, conditionId, quantity, supplierId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueId** | **Number**|  | 
 **conditionId** | **Number**|  | 
 **quantity** | **Number**|  | 
 **supplierId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

