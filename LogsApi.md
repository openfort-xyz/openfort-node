# .LogsApi

All URIs are relative to *https://api.openfort.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProjectLogs**](LogsApi.md#getProjectLogs) | **GET** /v1/logs | 


# **getProjectLogs**
> ProjectLogs getProjectLogs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LogsApi(configuration);

let body:.LogsApiGetProjectLogsRequest = {
  // string (optional)
  project: "project_example",
  // Array<string> (optional)
  method: [
    "method_example",
  ],
  // string (optional)
  id: "id_example",
};

apiInstance.getProjectLogs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] |  | (optional) defaults to undefined
 **method** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **id** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProjectLogs**

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


