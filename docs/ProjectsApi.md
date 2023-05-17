# openfort.ProjectsApi

All URIs are relative to *https://api.openfort.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProject**](ProjectsApi.md#createProject) | **POST** /v1/projects | 
[**get**](ProjectsApi.md#get) | **GET** /v1/projects/auth | 
[**getProject**](ProjectsApi.md#getProject) | **GET** /v1/projects/{id} | 
[**getProjects**](ProjectsApi.md#getProjects) | **GET** /v1/projects | 
[**updateProject**](ProjectsApi.md#updateProject) | **POST** /v1/projects/{id} | 


# **createProject**
> ProjectResponse createProject()

Creates a project object.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.ProjectsApi(configuration);

let body:openfort.ProjectsApiCreateProjectRequest = {
  // string
  name: "name_example",
  // boolean (optional)
  livemode: true,
  // string (optional)
  project: "project_example",
};

apiInstance.createProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **livemode** | [**boolean**] |  | (optional) defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProjectResponse**

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

# **get**
> GetProjectResponse get()


### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.ProjectsApi(configuration);

let body:any = {};

apiInstance.get(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetProjectResponse**

### Authorization

[pk](README.md#pk)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Error response. |  -  |
**409** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProject**
> ProjectResponse getProject()


### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.ProjectsApi(configuration);

let body:openfort.ProjectsApiGetProjectRequest = {
  // string
  id: "id_example",
};

apiInstance.getProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**ProjectResponse**

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

# **getProjects**
> ProjectsResponse getProjects()


### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.ProjectsApi(configuration);

let body:openfort.ProjectsApiGetProjectsRequest = {
  // string (optional)
  project: "project_example",
};

apiInstance.getProjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProjectsResponse**

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

# **updateProject**
> ProjectResponse updateProject()

Updates a project object.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.ProjectsApi(configuration);

let body:openfort.ProjectsApiUpdateProjectRequest = {
  // string
  id: "id_example",
  // string
  name: "name_example",
  // boolean (optional)
  livemode: true,
  // string (optional)
  project: "project_example",
};

apiInstance.updateProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **livemode** | [**boolean**] |  | (optional) defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProjectResponse**

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


