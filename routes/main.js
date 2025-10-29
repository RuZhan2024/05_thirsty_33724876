// Create a new router
const express = require("express");
const router = express.Router();

 // Define our data
const shopData = {
    shopName: "Drinks R Us",
    productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"]
};

// Handle the main routes
// TODO
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs")

});

router.get("/search", (req, res) => {
    res.render("search.ejs")

});

router.get("/search_result", (req, res) => {
    res.send(req.query);

});
// Export the router object so index.js can access it
module.exports = router;

