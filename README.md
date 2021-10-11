### Instructions

[ ] Use fetch() to asynchronously retrieve data from a remote API.

[ ] Use the data from the RandomUser API(opens new window)

[ ] For the request parameters use:

- your own Algonquin username as the seed value
- a number between 16 and 32 for the results value
- format should be set to json
- nat should be au,ca,nz,gb,us
- data that is downloaded should be saved in state, so it can be used and filtered repeatedly. Remember to keep the state values lifted up to a component that allows the data to be used everywhere it is needed.

[ ] The Home page should display a welcome message and brief instructions on how to use the app.

[ ] Your app should show a list of user cards on the User List page that display the values for name, email, cell, plus a medium or thumbnail image.

[ ] There needs to be a link from each displayed card for more details for the selected user on a User Details page.

[ ] The User Details page should show the full address (street, city, state, postcode), login information (uuid, username, password), and a larger image

[ ] There should be a top-level nav menu that lets the website user see a list of all of the names and addresses sorted by last name. This is the Address List page.

[ ] You can also link a row in the Address List table to the User Details page.

[ ] If the user manually adds a URL that has no match then the app should redirect to the Home page or a 404 Error page.

[ ] React Router (opens new window)should be used for all navigation.

[ ] While data is being loaded in any component you should have a message/icon/indicator that data is loading. Animated is best because it gets the user's attention.
