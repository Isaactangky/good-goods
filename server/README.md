This folder is a RESTful API for Good-goods product recommendation.

The API endpoints are accessible through http://localhost:5000/

## API

#### api/post

- `GET` : Get all post
- `POST` : Create a new post

#### api/post/:id

- `GET` : Get a post
- `DELETE` : Delete a post
- `PUT` : Update a post

#### api/post/:id/like

- `POST` : Like/Unlike a post

#### api/post/:id/reviews

- `POST` : Create a new review for a post

#### api/post/:id/reviews/:reviewId

- `DELETE` : Delete a review for a post

#### auth/user

- `GET` : Get current logged-in user

#### auth/user/register

- `POST` : register and log in a new user

#### auth/user/login

- `POST` : log in a user

#### api/contactus

- `POST` : Send a email
