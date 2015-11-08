# well license api

This repository demonstrates the usage of sequelize within an express application.
The implemented logic is a well license api.

A typical well license has the following structure (all fields are required):
Well License ID
Name of Applicant
Well Type (list of available values)
NFW: New Field Wildcat
NPW: New Pool Wildcat
DPT: Deeper Pool Test
SPT: Shallower Pool Test
DEV: Development Well
Applying Company/Agency
Latitude
Longitude
Township Name
Date of License
License Status (list of available values)
Active
Confidential
Expired
Requirements
The API will generate:
1. a list of all well licenses 
2. a list of all non-expired well licenses for a particular company/agency
details of one well license
3. a list of active well licenses for a particular township, for a specific company/agency
Anonymous users, without logging in, can query the API these four ways, and retrieve JSON responses.
Note: The assignment does not require any styled views over the JSON responses. We just want to see the JSON.
4. A confidential well should never have the following fields returned by the API:
Name of Applicant
Well Type
Applying Company/Agency
Considering that this API will serve a mobile app, we want to reduce the number of API calls needed for one view request. So, the names of all the Well Types must always accompany a well license response, to populate a view drop-down list without making another API call.
Similar to '4', a listing of the different types of License Status must accompany any well license response.
Technical Notes

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
