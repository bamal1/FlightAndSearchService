# welcome to Flight Service 

## Project Set up

- clone the project on your local 
- Execute `npm install` on the same path as your root directory of teh download project 
- Create a `.env` file in the root directory and the following environment variable 
- `PORT =3000` 
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json


```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_USER_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
```
-Once you've added db config as listed above,go to the src folder from your terminal and execute `npx sequelize db:create`