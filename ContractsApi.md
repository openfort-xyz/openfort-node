# .ContractsApi

All URIs are relative to *https://api.openfort.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContract**](ContractsApi.md#createContract) | **POST** /v1/contracts | 
[**getContract**](ContractsApi.md#getContract) | **GET** /v1/contracts/{id} | 
[**getContracts**](ContractsApi.md#getContracts) | **GET** /v1/contracts | 


# **createContract**
> ContractResponse createContract()

Creates an contract object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiCreateContractRequest = {
  // string
  name: "name_example",
  // number
  chainId: 3.14,
  // string (optional)
  address: "address_example",
  // ContractResponseAbi (optional)
  abi: null,
  // boolean (optional)
  publicVerification: true,
  // string (optional)
  project: "project_example",
};

apiInstance.createContract(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **chainId** | [**number**] |  | defaults to undefined
 **address** | [**string**] |  | (optional) defaults to undefined
 **abi** | **ContractResponseAbi** |  | (optional) defaults to undefined
 **publicVerification** | [**boolean**] |  | (optional) defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**ContractResponse**

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

# **getContract**
> ContractResponse getContract()

Retrieves the details of an existing contract. Supply the unique contract ID from either a contract creation request or the contract list, and Openfort will return the corresponding contract information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiGetContractRequest = {
  // string | Specifies the unique contract ID.
  id: "id_example",
  // string | Specifies the unique project ID. (optional)
  project: "project_example",
};

apiInstance.getContract(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specifies the unique contract ID. | defaults to undefined
 **project** | [**string**] | Specifies the unique project ID. | (optional) defaults to undefined


### Return type

**ContractResponse**

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

# **getContracts**
> ContractsResponse getContracts()

Returns a list of your contracts. The contracts are returned sorted by creation date, with the most recently created contracts appearing first.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiGetContractsRequest = {
  // string | Specifies the unique project ID. (optional)
  project: "project_example",
};

apiInstance.getContracts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] | Specifies the unique project ID. | (optional) defaults to undefined


### Return type

**ContractsResponse**

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


