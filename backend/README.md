
## About this boilerplate


## Rutas

Rutas de autenticacion y recuperacion.
```sh
POST /api/register
```
| Param | Type |  Required |
| ------ | ------ | ------ |
| name | string | true |
| email | string | true |
| password | string | true |
| password_confirmation | string | true |

```sh
POST /api/login
```
| Param | Type |  Required |
| ------ | ------ | ------ |
| email | string | true |
| password | string | true |


```sh
POST /api/refresh
```
| Header | Type |  Required |
| ------ | ------ | ------ |
| Authorization | Bearer <token> | true


```sh
POST /api/profile
```
| Header | Type |  Required |
| ------ | ------ | ------ |
| Authorization | Bearer <token> | true



```sh
POST /api/logout
```
| Header | Type |  Required |
| ------ | ------ | ------ |
| Authorization | Bearer <token> | true


```sh
POST /api/recovery
```
| Param | Type |  Required |
| ------ | ------ | ------ |
| email | string | true



```sh
POST /api/password
```
| Param | Type |  Required |
| ------ | ------ | ------ |
| email | string | true
| token | string | true
| password | string | true


