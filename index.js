const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./views/", "index.html"));
});
app.get("/about", (req, res) => {
	res.sendFile(path.join(__dirname, "./views/", "about.html"));
});
app.get("/contact", (req, res) => {
	res.sendFile(path.join(__dirname, "./views/", "contact.html"));
});
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./views/", "404.html"));
});

app.listen(port);
console.log(`Serving on port ${port}`);
