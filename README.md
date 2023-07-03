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
- Once you've added db config as listed above,go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute 
`npx sequelize db:migrate`

```


## DB Design 
- Airplane Table 
- Flight 
- Airport 
- City 

- Aflight belongs to an airplane but one airplane can be used in multiple flights 
- A city has many airports but one airport belongs to a city 
- One airport can have many flight, but a flight belongs to one airport 


## Tables

## City -> id , name ,created_at , updated_at 
## Airport -> id , name, Address,city_id,created_at,updated_at 
  Relstionship -> City has many airports and airport belongs to a city (one to many )