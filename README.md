# URL Shortener UI

Our company is building a knock off of the site [bitly](https://bitly.com/) to shorten long links. The site will take in a long link and give the user a shortened link that they can put in their browser and be taken to the original long link.

For example, this app will be able to:
* Take in a long link like `https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80`
* Submit the long link to a server
* The server will give back a short link like `http://localhost:3001/useshorturl/1`
* The short link will send the user to the same link as the long link! (some server magic that you don't need to worry about)

*Note: the example above will not readily work in the browser*

Wow, that saves a lot of space by making the URL shorter! The back-end API will save all of the URLs that have been submitted to be shortened so the user can come back and use them later.

The back-end server is already setup and ready to go from the back-end team. [The back-end server is located here](https://github.com/turingschool-examples/url-shortener-api).

We need to build a front-end for users to interact with.

## Setup

* Clone down this repo and change into the cloned down directory
* Setup your own GitHub repo so you can push changes to your own profile
* Run `npm install` to install dependencies
* Run `npm start` to start your development server

Be sure to setup the back-end repo for URL Shortener to be able to retrieve and save shortened URLs.

## Iterations

### Iteration 1

A developer just left the company, and they started this front-end. Unfortunately, they didn't document their process or where they left off. It seems like there are two bugs to fix before we get rolling with new features:

Fix the bugs:
* In the redux flow to get the URLs into the redux store and then onto the page
* In the form to be able to enter in a title and URL to be shortened (a long URL)

### Iteration 2

Right now the `App` component is connected to the store. While sometime it can be good to have `App` know about everything, in this case the developer team said that it's not necessary. (This is a common refactor!)

Remove Redux from the `App` component and move that functionality to the `UrlContainer` component. Make `App` into a functional component, and bring in the saved urls directly into the `Orders` component instead.

### Iteration 3

Test the actions, reducers, `mapStateToProps`, and `mapDispatchToProps` associated with the `UrlContainer` component.

### Iteration 4

Complete the `UrlForm` component functionality so that when a URL is submitted, it is sent to the backend, and if the response back from the server is successful, then the shortened URL is displayed on the page.

The new shortened URL information should be added to the Redux store following a successful POST request. On refresh, the new shortened URL should persist on the page.

### Iteration 5

Test the `UrlForm` component at a unit level. Do not test the `apiCalls`.

### Iteration 6

Add delete functionality for a URL (the server-side endpoint exists already).

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
