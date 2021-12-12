FullstackOverflow Developer is an API developed in node.js with the function of students to answer their questions about development

## Requirements

- [node.js and npm](https://nodejs.org/en/)

- [postgres](https://nodejs.org/en/)

## How to set?

1 - `git clone`

this repository

2 - install dependencies `npm install`

3 - Add your .env file in root using env.example as template

4 - Create a new database

```bash
  $ sudo su postgres
  $ psql
  $ CREATE DATABASE my_database;
  //CTRL+D to exit
  //CTRL+D to return to your user (exit postgres user)
```

5 - Run script dump.sql on postgres

## How to run?

To run in <strong>production mode</strong>: (.env file needed)

###`npm run start`

To run in <strong>development mode</strong>: (.env.dev file needed)

###`npm run start:dev`

To <strong>test</strong>: (.env.test file needed)

###`npm run test`

To <strong>test</strong> watching file changes: (.env.test file needed)

###`npm run test:watch`
