# well license api

This repository demonstrates the usage of sequelize within an express application.
The implemented logic is a well license api.

## Starting the app

```
npm install
npm start
```

This will start the application. Please ensure that prior to starting the application
you go into /config/environment and update the respective configuration for the
various environments.
Just open [http://localhost:3000](http://localhost:3000).


## API Routes
Get all the status - [http://localhost:3000/statuses/view](http://localhost:3000/statuses/view).
Create new status - [http://localhost:3000/statuses/create](http://localhost:3000/statuses/create).

Get all the type - [http://localhost:3000/types/view](http://localhost:3000/types/view).
Create new type - [http://localhost:3000/types/create](http://localhost:3000/types/create).

Get all the licenses - [http://localhost:3000/licenses/](http://localhost:3000/licenses/)
Get license by Id - [http://localhost:3000/licenses/:licenseId](http://localhost:3000/licenses/:licenseId)
Get licenses by township & company - [http://localhost:3000/licenses/:township/:company](http://localhost:3000/licenses/:township/:company)
Get non expired licenses by company - [http://localhost:3000/licenses/api/nonexpired/:company](http://localhost:3000/licenses/api/nonexpired/:company)

## The tests

You can run the tests by executing `npm test`.
