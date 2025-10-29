// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
const shopData = {
    shopName: "The Thirsty Student Shop",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shops: [
        {
            "name": "The Thirsty Student Shop - Manchester",
            "manager": "John Carter",
            "address": "123 Oxford Road, Manchester, M13 9GP, United Kingdom"
        },
        {
            "name": "The Thirsty Student Shop - London",
            "manager": "Sophie Reynolds",
            "address": "45 Tottenham Court Road, London, W1T 2EW, United Kingdom"
        },
        {
            "name": "The Thirsty Student Shop - Birmingham",
            "manager": "Liam Patel",
            "address": "78 Broad Street, Birmingham, B1 2HF, United Kingdom"
        },
        {
            "name": "The Thirsty Student Shop - Leeds",
            "manager": "Emily Hughes",
            "address": "20 Woodhouse Lane, Leeds, LS2 8LX, United Kingdom"
        },
        {
            "name": "The Thirsty Student Shop - Edinburgh",
            "manager": "Fraser McDonald",
            "address": "12 Nicholson Street, Edinburgh, EH8 9DH, United Kingdom"
        },
        {
            "name": "The Thirsty Student Shop - Glasgow",
            "manager": "Chloe Campbell",
            "address": "33 Sauchiehall Street, Glasgow, G2 3AT, United Kingdom"
        },
        {
            "name": "The Thirsty Student Shop - Bristol",
            "manager": "James Bennett",
            "address": "56 Park Street, Bristol, BS1 5JN, United Kingdom"
        },
        {
            "name": "The Thirsty Student Shop - Nottingham",
            "manager": "Aisha Khan",
            "address": "90 Derby Road, Nottingham, NG1 5FA, United Kingdom"
        },
        {
            "name": "The Thirsty Student Shop - Sheffield",
            "manager": "Daniel Wright",
            "address": "22 West Street, Sheffield, S1 4EZ, United Kingdom"
        },
        {
            "name": "The Thirsty Student Shop - Newcastle",
            "manager": "Olivia Green",
            "address": "8 Northumberland Street, Newcastle upon Tyne, NE1 7DE, United Kingdom"
        }

    ]
};


// Handle the main routes
// TODO
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
});

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)

});

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData)

});

router.get("/search_result", (req, res) => {
    res.send("You searched for " + req.query.search_name + " in " + req.query.search_category);

});

router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

router.post("/registered", (req, res) => {

    res.send(' Hello ' + req.body.first + ' ' + req.body.last + ' you are now registered! We will send an email to you at ' + req.body.email);
});

router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData);
});

// Export the router object so index.js can access it
module.exports = router;

