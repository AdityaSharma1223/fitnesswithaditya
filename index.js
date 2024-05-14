const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 2500;

mongoose.connect("mongodb+srv://aditya1028be22:NY6ojkaxI8iQG67a@ip.nun1kbt.mongodb.net/?retryWrites=true&w=majority&appName=ip").then(() => {
    console.log("Mongo Connected");
}).catch((err) => {
    console.log("Error", err);
})

const loginschema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    }
})

const aditya = mongoose.model("aditya", loginschema);

app.use(express.static('public'));
app.use("/dietplan",express.static('dietplan'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname });
});

app.get("/signup", (req, res) => {
    res.sendFile("./signup.html", { root: __dirname });
});

app.get("/login", (req, res) => {
    res.sendFile("./login.html", { root: __dirname });
});

app.get("/diet", (req, res) => {
    res.sendFile("diet.html",{root:__dirname});
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname,'/dietplan/contact.html'));
});
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname,'/dietplan/contact.html'));
});
app.get("/store", (req, res) => {
    res.sendFile(path.join(__dirname,'store.html'));
});

app.get("/logo-nav.png", (req, res) => {
    res.sendFile(path.join(__dirname,'logo-nav.png'));
});
app.get("/logo1.png", (req, res) => {
    res.sendFile(path.join(__dirname,'logo1.png'));
});
app.get("/logo2.png", (req, res) => {
    res.sendFile(path.join(__dirname,'logo2.png'));
});
app.get("/logo3.png", (req, res) => {
    res.sendFile(path.join(__dirname,'logo3.png'));
});
app.get("/logo4.png", (req, res) => {
    res.sendFile(path.join(__dirname,'logo4.png'));
});
app.get("/pricing1.png", (req, res) => {
    res.sendFile(path.join(__dirname,'pricing1.png'));
});
app.get("/pricing2.png", (req, res) => {
    res.sendFile(path.join(__dirname,'pricing2.png'));
});
app.get("/pricing3.png", (req, res) => {
    res.sendFile(path.join(__dirname,'pricing3.png'));
});
app.get("/program1.png", (req, res) => {
    res.sendFile(path.join(__dirname,'program1.png'));
});
app.get("/program2.png", (req, res) => {
    res.sendFile(path.join(__dirname,'program2.png'));
});
app.get("/program3.png", (req, res) => {
    res.sendFile(path.join(__dirname,'program3.png'));
});
app.get("/program4.png", (req, res) => {
    res.sendFile(path.join(__dirname,'program4.png'));
});
app.get("/calculate-img.png", (req, res) => {
    res.sendFile(path.join(__dirname,'calculate-img.png'));
});
app.get("/favicon.png", (req, res) => {
    res.sendFile(path.join(__dirname,'favicon.png'));
});
app.get("/choose-img.png", (req, res) => {
    res.sendFile(path.join(__dirname,'choose-img.png'));
});
app.get("/home-img.png", (req, res) => {
    res.sendFile(path.join(__dirname,'home-img.png'));
});
app.get("/anon-ecommerce-website/index.html", (req, res) => {
    res.sendFile(path.join(__dirname,'/anon-ecommerce-website/index.html'));
});
app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname,'login.html'));
});




app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    };

    try {
        const userExist = await aditya.findOne({ name: data.name });
        if (userExist) {
            res.send("Username already taken");
        } else {
            await aditya.create(data);
            res.send('<script>alert("User signed up successfully!"); window.location.href = "/login";</script>');
        }
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
});


app.post("/login", async (req, res) => {
    try {
        const user = await aditya.findOne({ name: req.body.username });
        if (!user) {
            res.send("User not found");
        } else {
            if (user.password === req.body.password) {
                res.sendFile("./index.html",{root:__dirname});
            } else {
                res.send("Invalid password");
            }
        }
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(port, () => {
    console.log("server started at port 2500");
});
