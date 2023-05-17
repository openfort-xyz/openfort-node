# openfort.PlayersApi

All URIs are relative to *https://api.openfort.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPlayer**](PlayersApi.md#createPlayer) | **POST** /v1/players | 
[**createPlayerAccount**](PlayersApi.md#createPlayerAccount) | **POST** /v1/players/{player}/accounts | 
[**createSession**](PlayersApi.md#createSession) | **POST** /v1/players/{player}/session | 
[**getPlayer**](PlayersApi.md#getPlayer) | **GET** /v1/players/{id} | 
[**getPlayerAccounts**](PlayersApi.md#getPlayerAccounts) | **GET** /v1/players/{player}/accounts | 
[**getPlayerInventory**](PlayersApi.md#getPlayerInventory) | **GET** /v1/players/{id}/inventory | 
[**getPlayers**](PlayersApi.md#getPlayers) | **GET** /v1/players | 
[**login**](PlayersApi.md#login) | **POST** /v1/players/login | 
[**signup**](PlayersApi.md#signup) | **POST** /v1/players/signup | 
[**updatePlayer**](PlayersApi.md#updatePlayer) | **POST** /v1/players/{id} | 


# **createPlayer**
> PlayerResponse createPlayer()

Creates a player object.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.PlayersApi(configuration);

let body:openfort.PlayersApiCreatePlayerRequest = {
  // string
  name: "name_example",
  // string (optional)
  description: "description_example",
  // string (optional)
  project: "project_example",
};

apiInstance.createPlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**PlayerResponse**

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

# **createPlayerAccount**
> AccountResponse createPlayerAccount()

Updates an account object of an existing player.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.PlayersApi(configuration);

let body:openfort.PlayersApiCreatePlayerAccountRequest = {
  // string | Specifies the unique player ID.
  player: "player_example",
  // string | The player ID
  player2: "player_example",
  // string | The project ID (optional)
  project: "project_example",
  // number | The chain_id (optional)
  chainId: 3.14,
};

apiInstance.createPlayerAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | [**string**] | Specifies the unique player ID. | defaults to undefined
 **player2** | [**string**] | The player ID | defaults to undefined
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

# **createSession**
> void createSession()

Creates the session for the player.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.PlayersApi(configuration);

let body:openfort.PlayersApiCreateSessionRequest = {
  // string
  player: "player_example",
  // string
  publicKey: "publicKey_example",
  // string (optional)
  policy: "policy_example",
};

apiInstance.createSession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | [**string**] |  | defaults to undefined
 **publicKey** | [**string**] |  | defaults to undefined
 **policy** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**401** | Error response. |  -  |
**409** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPlayer**
> PlayerResponse getPlayer()

Retrieves the details of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.PlayersApi(configuration);

let body:openfort.PlayersApiGetPlayerRequest = {
  // string | Specifies the unique player ID.
  id: "id_example",
  // string | Specifies the unique project ID. (optional)
  project: "project_example",
};

apiInstance.getPlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specifies the unique player ID. | defaults to undefined
 **project** | [**string**] | Specifies the unique project ID. | (optional) defaults to undefined


### Return type

**PlayerResponse**

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

# **getPlayerAccounts**
> AccountsResponse getPlayerAccounts()

Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.PlayersApi(configuration);

let body:openfort.PlayersApiGetPlayerAccountsRequest = {
  // string | Specifies the unique player ID.
  player: "player_example",
  // string | Specifies the unique project ID. (optional)
  project: "project_example",
};

apiInstance.getPlayerAccounts(body).then((data:any) => {
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

# **getPlayerInventory**
> InventoryResponse getPlayerInventory()

Retrieves the inventory of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.PlayersApi(configuration);

let body:openfort.PlayersApiGetPlayerInventoryRequest = {
  // string | Specifies the unique player ID.
  id: "id_example",
  // number
  chainId: 3.14,
  // string | Specifies the unique project ID. (optional)
  project: "project_example",
};

apiInstance.getPlayerInventory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specifies the unique player ID. | defaults to undefined
 **chainId** | [**number**] |  | defaults to undefined
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

# **getPlayers**
> PlayersResponse getPlayers()

Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.PlayersApi(configuration);

let body:openfort.PlayersApiGetPlayersRequest = {
  // string | Specifies the unique project ID. (optional)
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

apiInstance.getPlayers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] | Specifies the unique project ID. | (optional) defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **order** | [**string**] |  | (optional) defaults to undefined
 **skip** | [**number**] |  | (optional) defaults to undefined
 **take** | [**number**] |  | (optional) defaults to undefined


### Return type

**PlayersResponse**

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

# **login**
> AuthResponse login()


### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.PlayersApi(configuration);

let body:openfort.PlayersApiLoginRequest = {
  // string
  email: "email_example",
  // string
  password: "password_example",
};

apiInstance.login(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined


### Return type

**AuthResponse**

### Authorization

[pk](README.md#pk)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **signup**
> AuthResponse signup()


### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.PlayersApi(configuration);

let body:openfort.PlayersApiSignupRequest = {
  // string
  email: "email_example",
  // string
  password: "password_example",
};

apiInstance.signup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined


### Return type

**AuthResponse**

### Authorization

[pk](README.md#pk)

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

# **updatePlayer**
> PlayerResponse updatePlayer()

Updates a player object.

### Example


```typescript
import { openfort } from '@openfort/openfort-node';
import * as fs from 'fs';

const configuration = openfort.createConfiguration();
const apiInstance = new openfort.PlayersApi(configuration);

let body:openfort.PlayersApiUpdatePlayerRequest = {
  // string
  id: "id_example",
  // string
  name: "name_example",
  // string (optional)
  description: "description_example",
  // string (optional)
  project: "project_example",
};

apiInstance.updatePlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **project** | [**string**] |  | (optional) defaults to undefined


### Return type

**PlayerResponse**

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


