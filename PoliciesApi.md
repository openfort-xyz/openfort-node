# .PoliciesApi

All URIs are relative to *https://api.openfort.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPolicy**](PoliciesApi.md#createPolicy) | **POST** /v1/policies | 
[**createPolicyAllowFunction**](PoliciesApi.md#createPolicyAllowFunction) | **POST** /v1/policies/{policy}/allow_functions | 
[**getPolicies**](PoliciesApi.md#getPolicies) | **GET** /v1/policies | 
[**getPolicy**](PoliciesApi.md#getPolicy) | **GET** /v1/policies/{id} | 
[**getPolicyAllowFunctions**](PoliciesApi.md#getPolicyAllowFunctions) | **GET** /v1/policies/{policy}/allow_functions | 
[**getPolicyDailyGasUsage**](PoliciesApi.md#getPolicyDailyGasUsage) | **GET** /v1/policies/{policy}/daily_gas_usage | 
[**getPolicyTotalGasUsage**](PoliciesApi.md#getPolicyTotalGasUsage) | **GET** /v1/policies/{policy}/gas_usage | 
[**updatePolicy**](PoliciesApi.md#updatePolicy) | **POST** /v1/policies/{id} | 
[**updatePolicyAllowFunction**](PoliciesApi.md#updatePolicyAllowFunction) | **POST** /v1/policies/{policy}/allow_functions/{id} | 


# **createPolicy**
> PolicyResponse createPolicy()

Create a policy object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PoliciesApi(configuration);

let body:.PoliciesApiCreatePolicyRequest = {
  // string
  name: "name_example",
  // number
  chainId: 3.14,
  // string (optional)
  strategy: "strategy_example",
  // string (optional)
  project: "project_example",
};

apiInstance.createPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **chainId** | [**number**] |  | defaults to undefined
 **strategy** | [**string**] |  | (optional) defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**PolicyResponse**

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

# **createPolicyAllowFunction**
> AllowFunctionResponse createPolicyAllowFunction()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PoliciesApi(configuration);

let body:.PoliciesApiCreatePolicyAllowFunctionRequest = {
  // string
  policy: "policy_example",
  // string
  type: "type_example",
  // string
  functionName: "functionName_example",
  // string
  contract: "contract_example",
  // string (optional)
  policy2: "policy_example",
  // string (optional)
  project: "project_example",
};

apiInstance.createPolicyAllowFunction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | [**string**] |  | defaults to undefined
 **type** | [**string**] |  | defaults to undefined
 **functionName** | [**string**] |  | defaults to undefined
 **contract** | [**string**] |  | defaults to undefined
 **policy2** | [**string**] |  | (optional) defaults to undefined
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
**400** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPolicies**
> PoliciesResponse getPolicies()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PoliciesApi(configuration);

let body:.PoliciesApiGetPoliciesRequest = {
  // string (optional)
  project: "project_example",
};

apiInstance.getPolicies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**PoliciesResponse**

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

# **getPolicy**
> PolicyResponse getPolicy()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PoliciesApi(configuration);

let body:.PoliciesApiGetPolicyRequest = {
  // string
  id: "id_example",
  // string (optional)
  project: "project_example",
};

apiInstance.getPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**PolicyResponse**

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

# **getPolicyAllowFunctions**
> AllowFunctionsResponse getPolicyAllowFunctions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PoliciesApi(configuration);

let body:.PoliciesApiGetPolicyAllowFunctionsRequest = {
  // string
  policy: "policy_example",
  // string (optional)
  project: "project_example",
};

apiInstance.getPolicyAllowFunctions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | [**string**] |  | defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


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
**400** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPolicyDailyGasUsage**
> Gas getPolicyDailyGasUsage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PoliciesApi(configuration);

let body:.PoliciesApiGetPolicyDailyGasUsageRequest = {
  // string
  policy: "policy_example",
  // string (optional)
  _from: "from_example",
  // string (optional)
  to: "to_example",
};

apiInstance.getPolicyDailyGasUsage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | [**string**] |  | defaults to undefined
 **_from** | [**string**] |  | (optional) defaults to undefined
 **to** | [**string**] |  | (optional) defaults to undefined


### Return type

**Gas**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPolicyTotalGasUsage**
> SumGas getPolicyTotalGasUsage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PoliciesApi(configuration);

let body:.PoliciesApiGetPolicyTotalGasUsageRequest = {
  // string
  policy: "policy_example",
  // string (optional)
  _from: "from_example",
  // string (optional)
  to: "to_example",
};

apiInstance.getPolicyTotalGasUsage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | [**string**] |  | defaults to undefined
 **_from** | [**string**] |  | (optional) defaults to undefined
 **to** | [**string**] |  | (optional) defaults to undefined


### Return type

**SumGas**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**400** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePolicy**
> PolicyResponse updatePolicy()

Updates a policy object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PoliciesApi(configuration);

let body:.PoliciesApiUpdatePolicyRequest = {
  // string
  id: "id_example",
  // string (optional)
  name: "name_example",
  // number (optional)
  chainId: 3.14,
  // string (optional)
  strategy: "strategy_example",
  // string (optional)
  project: "project_example",
};

apiInstance.updatePolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **chainId** | [**number**] |  | (optional) defaults to undefined
 **strategy** | [**string**] |  | (optional) defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**PolicyResponse**

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

# **updatePolicyAllowFunction**
> AllowFunctionResponse updatePolicyAllowFunction()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PoliciesApi(configuration);

let body:.PoliciesApiUpdatePolicyAllowFunctionRequest = {
  // string
  policy: "policy_example",
  // string
  id: "id_example",
  // string (optional)
  type: "type_example",
  // string (optional)
  functionName: "functionName_example",
  // string (optional)
  policy2: "policy_example",
  // string (optional)
  project: "project_example",
  // string (optional)
  contract: "contract_example",
};

apiInstance.updatePolicyAllowFunction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | [**string**] |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined
 **type** | [**string**] |  | (optional) defaults to undefined
 **functionName** | [**string**] |  | (optional) defaults to undefined
 **policy2** | [**string**] |  | (optional) defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined
 **contract** | [**string**] |  | (optional) defaults to undefined


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
**400** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


