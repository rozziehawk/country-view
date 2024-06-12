# Getting Started with Create React App
This app is called "country-view." It can be run from https://master--storied-sundae-3bae89.netlify.app/
The source can be found at (https://github.com/rozziehawk/country-view/)
it uses the api (https://restcountries.com/v3.1) which takes the name of the country (either the common name or the "official" name) and returns a block of data containing information about that country. 

What this web app does: It allows a user to select a country from a dropdown list of all of the world's countries and display a page worth of general information about the country. THe information starts with a visual representation of the flag of that country, then lists geographic information about the country's location, then (if applicable), the coutnry's capital, languages spoken, the currency used, including its abbreviation and symbol (for example, in the case of the United States, it would display "(USD) United States dollar ($)") and lastly, the country's population (all data obtained from the REST Countries API). 

The data is parsed into fields and displayed on the Display screen, with the flag of the selected country at the top (the URL of which is also obtained from the API). Population number is parsed to add commas in appropriate places to make the number more readable (for example US Population returned from the API is "329484123" which is parsed to read 
"329,484,123").
The country name is obtained using a library called country-list which assists in building a drop-down list of all of the world's countries. The app the dropdown was customized with some data manipulation on the list to make sure the country name jibed with the names of the restcountries API.
The app uses the following resources: React, create-react-app, bootstrap (5.3), REST Countries API, country-list (for coutnries dropdown) and Axios.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
