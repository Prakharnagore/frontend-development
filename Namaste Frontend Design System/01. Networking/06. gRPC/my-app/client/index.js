const express = require("express");
const bodyParse = require("body-parser");
const client = require("./client");

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

// TODO
app.get("/", (req, res) => {
  client.getAll(null, (err, data) => {
    if (!err) {
      res.send(data.customers);
    }
  });
});
app.post("/create", (req, res) => {
  let newCustomer = {
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };

  client.insert(newCustomer, (err, data) => {
    if (err) throw err;

    console.log("Customer create successfully");
    res.send({ message: "Customer created succesfully" });
  });
});
app.post("/update", (req, res) => {
  let updateCustomer = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };

  client.update(updateCustomer, (err, data) => {
    if (err) throw err;

    console.log("Customer updated successfully");
    res.send({ message: "Customer updated succesfully" });
  });
});
app.post("/remove", (req, res) => {
  client.remove({ id: req.body.customer_id }, (err, _) => {
    if (err) throw err;

    console.log("Customer removed successfully");
    res.send({ message: "Customer removed succesfully" });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running at port %d", PORT);
});
