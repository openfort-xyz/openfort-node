# .DefaultApi

All URIs are relative to *https://api.openfort.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccount**](DefaultApi.md#createAccount) | **POST** /v1/accounts | 
[**createAllowFunction**](DefaultApi.md#createAllowFunction) | **POST** /v1/allow_functions | 
[**getAccount**](DefaultApi.md#getAccount) | **GET** /v1/accounts/{id} | 
[**getAccountInventory**](DefaultApi.md#getAccountInventory) | **GET** /v1/accounts/{id}/inventory | 
[**getAccounts**](DefaultApi.md#getAccounts) | **GET** /v1/accounts | 
[**getAllowFunctions**](DefaultApi.md#getAllowFunctions) | **GET** /v1/allow_functions | 
[**updateAllowFunction**](DefaultApi.md#updateAllowFunction) | **POST** /v1/allow_functions/{id} | 


# **createAccount**
> AccountResponse createAccount()

Creates an account object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateAccountRequest = {
  // string | The player ID
  player: "player_example",
  // string | The project ID (optional)
  project: "project_example",
  // number | The chain_id (optional)
  chainId: 3.14,
};

apiInstance.createAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | [**string**] | The player ID | defaults to undefined
 **project** | [**string**] | The project ID | (optional) defaults to undefined
 **chainId** | [**number**] | The chain_id | (optional) defaults to undefined


### Return type

**AccountResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**401** | Error response. |  -  |
**409** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAllowFunction**
> AllowFunctionResponse createAllowFunction()

Creates an allow function object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateAllowFunctionRequest = {
  // string
  type: "type_example",
  // string
  functionName: "functionName_example",
  // string
  contract: "contract_example",
  // string (optional)
  policy: "policy_example",
  // string (optional)
  project: "project_example",
};

apiInstance.createAllowFunction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**string**] |  | defaults to undefined
 **functionName** | [**string**] |  | defaults to undefined
 **contract** | [**string**] |  | defaults to undefined
 **policy** | [**string**] |  | (optional) defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**AllowFunctionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**401** | Error response. |  -  |
**409** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccount**
> AccountResponse getAccount()

Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAccountRequest = {
  // string | Specifies the unique account ID.
  id: "id_example",
  // string | Specifies the unique project ID. (optional)
  project: "project_example",
};

apiInstance.getAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specifies the unique account ID. | defaults to undefined
 **project** | [**string**] | Specifies the unique project ID. | (optional) defaults to undefined


### Return type

**AccountResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**401** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountInventory**
> InventoryResponse getAccountInventory()

Retrieves the inventory of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAccountInventoryRequest = {
  // string | Specifies the unique account ID.
  id: "id_example",
  // string | Specifies the unique project ID. (optional)
  project: "project_example",
};

apiInstance.getAccountInventory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specifies the unique account ID. | defaults to undefined
 **project** | [**string**] | Specifies the unique project ID. | (optional) defaults to undefined


### Return type

**InventoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**401** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccounts**
> AccountsResponse getAccounts()

Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAccountsRequest = {
  // string | Specifies the unique player ID.
  player: "player_example",
  // string | Specifies the unique project ID. (optional)
  project: "project_example",
};

apiInstance.getAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | [**string**] | Specifies the unique player ID. | defaults to undefined
 **project** | [**string**] | Specifies the unique project ID. | (optional) defaults to undefined


### Return type

**AccountsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**401** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllowFunctions**
> AllowFunctionsResponse getAllowFunctions()

Returns a list of your allow functions for the given policy. The allow functions are returned sorted by creation date, with the most recently created allow functions appearing first.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAllowFunctionsRequest = {
  // string | Specifies the unique project ID. (optional)
  project: "project_example",
  // string | Specifies the unique policy ID. (optional)
  policy: "policy_example",
};

apiInstance.getAllowFunctions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] | Specifies the unique project ID. | (optional) defaults to undefined
 **policy** | [**string**] | Specifies the unique policy ID. | (optional) defaults to undefined


### Return type

**AllowFunctionsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**401** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAllowFunction**
> AllowFunctionResponse updateAllowFunction()

Updates your allow functions object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateAllowFunctionRequest = {
  // string | Specifies the unique allow function ID.
  id: "id_example",
  // string
  type: "type_example",
  // string
  functionName: "functionName_example",
  // string
  contract: "contract_example",
  // string (optional)
  policy: "policy_example",
  // string (optional)
  project: "project_example",
};

apiInstance.updateAllowFunction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specifies the unique allow function ID. | defaults to undefined
 **type** | [**string**] |  | defaults to undefined
 **functionName** | [**string**] |  | defaults to undefined
 **contract** | [**string**] |  | defaults to undefined
 **policy** | [**string**] |  | (optional) defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**AllowFunctionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**401** | Error response. |  -  |
**409** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


