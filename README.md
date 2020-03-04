# URL Shortener UI

Our company is building a knock off of the site [bitly](https://bitly.com/) to shorten long links. The site will take in a long link and give the user a shortened link that they can put in their browser and be taken to the original long link.

For example, this app will be able to:
* Take in a long link like `https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80`
* Submit the long link to a server
* The server will give back a short link like `http://localhost:3001/useshorturl/1`
* The short link will send the user to the same link as the long link! (some server magic that you don't need to worry about)

*Note: the example above will not readily work in the browser*

Wow, that saves a lot of space by making the URL shorter!

The server is already setup and ready to go from the back-end team. [The back-end server is located here](https://github.com/turingschool-examples/url-shortener-api).

We need to build a front-end for users to interact with.

## Setup

* Clone down this repo and change into the cloned down directory
* Setup your own GitHub repo so you can push changes to your own profile
* Run `npm install` to install dependencies
* Run `npm start` to start your development server

Be sure to setup the back-end repo for URL Shortener to be able to retrieve and save burrito shortened URLs.

## Iterations

### Iteration 1

Right now the `App` component is connected to the store. While sometime it can be good to have `App` know about everything, in this case the developer team said that it's not necessary. This is a common refactor!

Remove Redux from the `App` component and move that functionality to the `Orders` component. Make `App` into a functional component, and bring in the burrito orders directly into the `Orders` component instead.

### Iteration 2

Add functionality to allow submission of the form when there is at least one ingredient added to the order. If there are no ingredients in the order, you should not be able to submit the order.

Also, right now we're seeing a warning in the console about unique keys... Get rid of that warning.

### Iteration 3

Currently, the form seems operational, but it's not actually sending information to the backend API. Complete the `OrderForm` component functionality so that when an order is submitted, it is sent to the backend, and if the response back from the server is successful, then the order is displayed on the page.

The new orders should be added to the Redux store following a successful POST request. On refresh, the new order should persist on the page.

### Iteration 4

Complete tests for the `Orders` and `OrderForm` components. Also complete tests for all actions and reducers so far.

### Iteration 5

Add delete functionality for an order (the server-side endpoint exists already) so that when the order is ready it can be removed from the ticketing system.

## Extensions

* Right now, an order can contain duplicates of ingredients. Bring some logic into the form so that an order can contain only two of the same ingredient.
* Style the form - it's hideous and the team is sad about it.
* Add a total cost for the order. Add prices to each ingredient and total each order based on the ingredient cost. Display this for each order. The backend should be able to handle any extra data beyond `name` and `ingredients`.
* Style the container so that orders are nice and tidy, especially when ingredient amounts vary between orders.


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
