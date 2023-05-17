# openfort.TransactionIntentsApi

All URIs are relative to *https://api.openfort.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTransactionIntent**](TransactionIntentsApi.md#createTransactionIntent) | **POST** /v1/transaction_intents | 
[**getTransactionIntent**](TransactionIntentsApi.md#getTransactionIntent) | **GET** /v1/transaction_intents/{id} | 
[**getTransactionIntents**](TransactionIntentsApi.md#getTransactionIntents) | **GET** /v1/transaction_intents | 
[**updateTransactionIntentResponse**](TransactionIntentsApi.md#updateTransactionIntentResponse) | **PUT** /v1/transaction_intents/{id}/update_response | 
[**updateTransactionIntentsResponse**](TransactionIntentsApi.md#updateTransactionIntentsResponse) | **PUT** /v1/transaction_intents/update_response | 


# **createTransactionIntent**
> TransactionIntentResponse createTransactionIntent()

Creates a transaction intent object.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.TransactionIntentsApi(configuration);

let body:openfort.TransactionIntentsApiCreateTransactionIntentRequest = {
  // string
  player: "player_example",
  // number
  chainId: 3.14,
  // boolean
  optimistic: true,
  // Array<Interaction>
  interactions: [
    {
      contract: "contract_example",
      functionName: "functionName_example",
      functionArgs: [
        null,
      ],
    },
  ],
  // string (optional)
  policy: "policy_example",
  // string (optional)
  project: "project_example",
};

apiInstance.createTransactionIntent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | [**string**] |  | defaults to undefined
 **chainId** | [**number**] |  | defaults to undefined
 **optimistic** | [**boolean**] |  | defaults to undefined
 **interactions** | **Array&lt;Interaction&gt;** |  | defaults to undefined
 **policy** | [**string**] |  | (optional) defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**TransactionIntentResponse**

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

# **getTransactionIntent**
> TransactionIntentResponse getTransactionIntent()

Updates a transaction intent object.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.TransactionIntentsApi(configuration);

let body:openfort.TransactionIntentsApiGetTransactionIntentRequest = {
  // string
  id: "id_example",
  // string (optional)
  project: "project_example",
};

apiInstance.getTransactionIntent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**TransactionIntentResponse**

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

# **getTransactionIntents**
> TransactionIntentsResponse getTransactionIntents()


### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.TransactionIntentsApi(configuration);

let body:openfort.TransactionIntentsApiGetTransactionIntentsRequest = {
  // string (optional)
  project: "project_example",
  // string (optional)
  filter: "filter_example",
  // string (optional)
  order: "order_example",
  // number (optional)
  skip: 3.14,
  // number (optional)
  take: 3.14,
};

apiInstance.getTransactionIntents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **order** | [**string**] |  | (optional) defaults to undefined
 **skip** | [**number**] |  | (optional) defaults to undefined
 **take** | [**number**] |  | (optional) defaults to undefined


### Return type

**TransactionIntentsResponse**

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

# **updateTransactionIntentResponse**
> TransactionIntentResponse updateTransactionIntentResponse()


### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.TransactionIntentsApi(configuration);

let body:openfort.TransactionIntentsApiUpdateTransactionIntentResponseRequest = {
  // string
  id: "id_example",
  // string (optional)
  project: "project_example",
};

apiInstance.updateTransactionIntentResponse(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**TransactionIntentResponse**

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
**409** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTransactionIntentsResponse**
> TransactionIntentsResponse updateTransactionIntentsResponse()


### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.TransactionIntentsApi(configuration);

let body:openfort.TransactionIntentsApiUpdateTransactionIntentsResponseRequest = {
  // string (optional)
  project: "project_example",
};

apiInstance.updateTransactionIntentsResponse(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**TransactionIntentsResponse**

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
**409** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


