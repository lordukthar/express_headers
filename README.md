# express_headers

For those doing this from scratch.

Step 1:
$npm install -g express-generator

Step 2:
$express

Step 3:
npm start

Step 4:
Go to localhost:3000/users in a browser.

Step 5:
$npm install axios

Step 6:
Modify the users route, found in routes/users.js and we use the open Json API for users online
Add this to the users file.

axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
// handle success
res.send(response.data);
});

Step 7: Add a new file ./routes/todos.js
Add this content:

const axios = require("axios");

const getTodos = (req, res) => {
axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
// handle success
res.send(response.data);
});
};

module.exports = getTodos;

Step 8: Add routing to new endpoint in app.js

var todos = require("./routes/todos");
app.get("/todos", (req, res) => {
return todos(req, res);
});

Step 9:
$npm start
Head over to localhost:3000/todos and a json response should appear

Step 10: Add your own header
Go to todos.js and add this before the line res.send()
res.header("my-dummy-header", "no-use-vale");

Step 11:
$npm start
Head over to localhost:3000/todos and a json response should appear and your custom header will be shown

Step 12: Send along all headers
Change todos.js

axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
var keys = Object.keys(response.headers);
var values = Object.values(response.headers);

    for (var i = 0; i < keys.length; i++) {
      console.log(keys[i]);
      res.header(keys[i], values[i]);
    }
    res.header("my-dummy-header", "no-use-vale");
    res.send(response.data);

});
