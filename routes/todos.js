const axios = require("axios");

const getTodos = (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
    // handle success
    res.send(response.data);
  });
};

module.exports = getTodos;
