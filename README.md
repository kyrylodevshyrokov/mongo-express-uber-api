# Uber API

## About

This is a convenient API, a prototype of Uber, that allows you to manage drivers and perform a full range of CRUD operations on drivers. It also tests each of these operations.

## Features

- Each user can create, update, or delete a driver.
- Each user can find a driver within an allowable radius around them.

## Technologies

- MongoDB: a source-available, cross-platform, document-oriented database program.
- Mongoose: a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.
- Express: a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- Mocha: a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.

## Getting started

1. Clone this repository locally on your machine.
2. Install all dependencies running command `npm install`.
3. Fill `.env` file. Here is and example:
```javascript
PORT=3000
```
In case if you want to connect your server to databse via MongoDB Atlas, include link for connection also to `.env` file.

4. Run `npm start` to start the server for production mode or run `npm run start:dev` for development mode.
5. Run `npm test` to execute all mocha tests and test API.

## API Endpoints

### _Drivers_

### Get All Drivers In A Location

- Method: **GET**
- URL: {{URL}}/api/drivers?lng=-80&lat=25
- Description: This endpoint allows users to get list of all drivers in a certain location around.

### Add New Driver

- Method: **POST**
- URL: {{URL}}/api/drivers
- Data:
```javascript
{
    "email": "test@test.com",
    "driving": "false"
}
```
- Description: This endpoint allows user (admin or driver) to add a new driver with filled following fields: email and driving.

### Edit Driver By ID

- Method: **PUT**
- URL: {{URL}}/api/drivers/:id
- Data:
```javascript
{
    "email": "test2@test.com",
    "driving": "true"
}
```
- Description: This endpoint allows users to edit the driver by changing email or/and driving fields.

### Delete Driver By ID

- Method: **DELETE**
- URL: {{URL}}/api/drivers/:id
- Description: This endpoint allows users to delete the driver by ID.
