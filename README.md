As part of a React certification course I created this fun project to show off skills in ReactJS.

Requirements:

*Routing
*Create a new branch called routing and checkout this branch.
*We recommend that you create a new folder inside of your src folder called components. All future component files should be created in this folder.
*Set up the following routes:

*Home - the main (landing) page && login page
*Categories - a page which will contain all joke categories
*Search - a page to search for a joke by a search term
*Jokes - a page the lists all viewed jokes
*Add a button, menu, or some other way to navigate between routes.

*Save your work and push these changes to Bitbucket.
*Create a Pull Request (PR) for your code and merge it with the master branch. (Do not delete this branch.)
*Authentication
*Create a new branch called authentication and checkout this branch.
*On your main (landing) page set up a form to take an email and password to login.

*The password should have a way to toggle masking and showing the password
*The login button should be disabled until a username and password have been entered
*The email field should have an email validation check; the login button should remain disabled until a valid-like email has been entered
*The password should be validated to have at least 1 capital letter, 1 lower case letter, 1 number, and be between 6-10 characters in length.
*When the login button is submitted an authentication method should be called that will simulate an HTTP call:

*accept user input and put it in a json object
*give an appropriate delay (1500 - 3000 ms)
*show a spinner or give some other indication that the system "is working" to log the user in
*update state so that remaining pages (Categories, Search && Jokes) are viewable
*then redirect the user to a Search page (or one of the other pages in the app).
*Prevent a user from accessing any other page without passing the "authentication" process.

*Save your work and push these changes to Bitbucket.
*Create a Pull Request (PR) for your code and merge it with the master branch. (Do not delete this branch.)
*Fetching Data
*Create a new branch called data and checkout this branch.
*On the main (landing) page:

*list each page and give a short explanation of the contents of each of the pages in the app
*provide links to each page (use a menu)
*links only work if the users has "logged in"
*On the Categories page:

*utilize a React class and the componentDidMount lifecycle method in this step
*fetch a list of all the joke categories and display them in a list
*The api endpoint to get the joke categories is: https://api.chucknorris.io/jokes/categories
*Make each category in the list clickable such that when a category is clicked it should display a random joke from that category (ex: open a dialog or modal with a joke from the selected category)
*On the Search page:

*Create a search bar
*Create a way for the user to fetch jokes (ex: search for jokes as the user types in the search bar or use a submit button)
*When a search term is submitted you should fetch jokes from this api endpoint: https://api.chucknorris.io/jokes/search?query={query}
*Display the results of the search query in a list. Truncate the text of the joke to the first 50 characters.
*Each listed joke should be clickable such that when a joke is selected the entire joke should be displayed (ex: open a dialog or modal with a joke from the selected category)
*On the Jokes page:

*Don't do anything...this page will be updated in the next section
*Save your work and push these changes to Bitbucket.

*Create a Pull Request (PR) for your code and merge it with the master branch. (Do not delete this branch.)
*State Management
*Create a new branch called state-management and checkout this branch.
*Refactor your app to use state management (use Redux and a Redux Store, React Context or another state management option of your choice). You should at least have categories and viewed jokes *stored in this state Store.
*If you choose to use Redux, create actions and reducers to correspond with your data model. If you have choosen a different state management option, set up you app to utilize the applicable *management options.
*Use the Jokes page to display all of the jokes that the user has looked at or selected.

*Create a way to display every joke that the user has view
*The list should show the category of the joke and the actual joke and the order or time visited
*There will need to be a way to organize/sort the list of jokes by category (ascending/descending) or by order visited (ascending/descending)
*Save your work and push these changes to Bitbucket.

*Create a Pull Request (PR) for your code and merge it with the master branch. (Do not delete this branch.)
*Refactor to Utilize Hooks
*Create a new branch called hooks and checkout this branch.
Choose one of your class components and convert the component into a functional component that utilizes hooks. If you have already written every component in the app as a functional component, convert one of the functional components into a class component that utilizes at least two React lifecycle methods.

if you have already utilized a functional component in the app simply add a commment to identify your use of functional components as directed in the Finish Project section of this document.
Make sure to utilize at least 3 hooks in your app. (eg: useState, useEffect, etc)

Save your work and push these changes to Bitbucket.
Create a Pull Request (PR) for your code and merge it with the master branch. (Do not delete this branch.)
Testing
If you have not been adding tests as you were developing the previous features, then add tests now.

Create a new branch called testing and checkout this branch.
You will add unit tests to your project. Some examples may include:

Test routing component works correctly
Test that the http requests are configured correctly
Test login component features (email & password validation)
Test the search bar works properly
Achieve at least 90% test coverage for your project.

Make sure to document where the test coverage report is stored. You may also want to add a script to your package.json file for convenience in running your testing script with coverage.
Save your work and push these changes to Bitbucket.
Create a Pull Request (PR) for your code and merge it with the master branch. (Do not delete this branch.)
Finish Project
(If you have not already added the comments below to your project, create a comments branch)
Inside of this branch you will add comments to your code to demonstrate your use and knowledge of Javascript fundamentals as well as React basics. This should not be hard, but it will help us recognize your knowledge and use of ES6+ basics. You do not need to identify every instance, just 1-2 instances to show you know and understand these concepts.
Comments should be preceded with a # and should look something like this:
  // #closure
  function myClosure() = {...}
or this:

  /* #map function */
  myArray.map(...);
In your code you should add comments to demonstrate these Javascript fundamentals:

Closures
this keyword
Arrow functions
Array Functions

Map
Filter
Reduce
Destructuring

Spread Operator
Promises
Blocked-scoped variable let
Blocked-scoped variable const
In your code you should add comments to demonstrate these React basics:

JSX
Rendering Elements
Class Components
Functional Components
Lifecycle methods (at least 3 different methods should be commented in your class component(s))
React Hooks (at least 3 different hooks should be commented in your functional component(s))
Event Handling
Props
State
Lists & Keys
Routing
Redux Reducers, React Context (or other state management)
Styles (2-3 different methods of applying styles to React components)
Comments should be styled similar to the Javascript comments.

Create a basic.md file. In this file list each item that you do not have in your app from the above Javascript and React basics. For each item, write a short code snippet and explanation of the item to demonstrate your understanding of it. In addition, choose 4 hooks (that are not used or identified in your app) and write a short code snippet and expalanation of its use.
Finally, make sure to remove all console.log statements and unused commented code from your project.
Push and merge the commented code to your Master branch. (Do not delete this branch.)
Email your practice manager that you have completed the certification project and that it is now ready for a final review!