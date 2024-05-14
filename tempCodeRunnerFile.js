app.get("/", (req, res) => {
    res.sendFile("./index.html", { root: __dirname });
});

app.get("/signup", (req, res) => {
    res.sendFile("./signup.html", { root: __dirname });
});

app.get("/login", (req, res) => {
    res.sendFile("./index.html", { root: __dirname });
});

app.get("/diet", (req, res) => {
    res.sendFile("diet.html",{root:__dirname});
});

app.get("/contact", (req, res) => {
    res.sendFile("dietplan\contact.html", { root: __dirname });
});
