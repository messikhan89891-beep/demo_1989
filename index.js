const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.status(200).send("i think it working well then chill");
});

app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
});