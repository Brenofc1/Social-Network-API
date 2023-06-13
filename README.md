# NoSQL Module 18: Social Network API
   
## Description

The Social Network API is a RESTful API that provides a backend infrastructure for a social networking platform. 
It allows users to create accounts, connect with friends, and share their thoughts.


## Features

```
* User Management: Users can create accounts, update their information, and delete their accounts.
* Friend Connections: Users can add friends and manage their friend list.
* Thought Sharing: Users can post their thoughts and view thoughts shared by their friends.
* Data Relationships: Users' thoughts and friends are linked to their respective user accounts.
  ```

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
   
## Table of Contents

- [Description](#description)
- [Features](#features)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Walkthrough Video](#walkthrough-video)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)


## Walkthrough Video
  
![social-network-api](./assets/social-network-api.gif)


Walkthrough video link:

**https://app.screencastify.com/manage/videos/6M7mBOoqaPqncMXG6ceW/**


## API Endpoints
```
The API exposes the following endpoints:

GET /api/users: Retrieve a list of all users.
POST /api/users: Create a new user.
GET /api/users/:id: Retrieve a single user by ID.
PUT /api/users/:id: Update a user's information.
DELETE /api/users/:id: Delete a user by ID.
POST /api/users/:id/friends/:friendId: Add a new friend for a user.
DELETE /api/users/:id/friends/:friendId: Remove a friend from a user's friend list.
```

## Installation  
```  
`npm init`

`npm install`
```
  
## Usage
```  
`npm start`

With Nodemon:

`npm run watch`
```

## Technology Stack
```
The API is built using the following technologies:

* Node.js
* Express.js
* MongoDB
* Mongoose
```
