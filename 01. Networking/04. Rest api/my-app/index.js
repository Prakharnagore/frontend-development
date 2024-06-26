
const express = require('express');
const app = express()
const PORT = 5111;

app.all("/", (req, res) => {
    console.log("Request", req)
    console.log("Response", res)
    res.send(`I'm up!`);
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})


