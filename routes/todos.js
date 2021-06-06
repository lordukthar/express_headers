const axios = require("axios");

const getTodos = (req, res) => {
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
};

module.exports = getTodos;
