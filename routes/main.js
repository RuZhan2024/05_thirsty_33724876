/**
 routes/main.js
 Express Router for the Thirsty Student Shop demo app.
 Responsibilities:
   - Defines in-memory data used by views (shop name, categories, shops).
   - Declares all page routes (home, about, search, register, survey).
   - Demonstrates handling of GET query params and POST bodies.
   - Renders EJS templates; no database/storage is used.
 */

// Create a new router
const express = require("express");
const router = express.Router();

/**
 * In-memory application data exposed to EJS templates.
 * - shopName: string shown in header/title
 * - productCategories: list rendered on Home and used in forms
 * - shops: array used on /about to list locations, managers, addresses
 */
const shopData = {
  shopName: "The Thirsty Student Shop",
  productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
  shops: [
    {
      name: "The Thirsty Student Shop - Manchester",
      manager: "John Carter",
      address: "123 Oxford Road, Manchester, M13 9GP, United Kingdom",
    },
    {
      name: "The Thirsty Student Shop - London",
      manager: "Sophie Reynolds",
      address: "45 Tottenham Court Road, London, W1T 2EW, United Kingdom",
    },
    {
      name: "The Thirsty Student Shop - Birmingham",
      manager: "Liam Patel",
      address: "78 Broad Street, Birmingham, B1 2HF, United Kingdom",
    },
    {
      name: "The Thirsty Student Shop - Leeds",
      manager: "Emily Hughes",
      address: "20 Woodhouse Lane, Leeds, LS2 8LX, United Kingdom",
    },
    {
      name: "The Thirsty Student Shop - Edinburgh",
      manager: "Fraser McDonald",
      address: "12 Nicholson Street, Edinburgh, EH8 9DH, United Kingdom",
    },
    {
      name: "The Thirsty Student Shop - Glasgow",
      manager: "Chloe Campbell",
      address: "33 Sauchiehall Street, Glasgow, G2 3AT, United Kingdom",
    },
    {
      name: "The Thirsty Student Shop - Bristol",
      manager: "James Bennett",
      address: "56 Park Street, Bristol, BS1 5JN, United Kingdom",
    },
    {
      name: "The Thirsty Student Shop - Nottingham",
      manager: "Aisha Khan",
      address: "90 Derby Road, Nottingham, NG1 5FA, United Kingdom",
    },
    {
      name: "The Thirsty Student Shop - Sheffield",
      manager: "Daniel Wright",
      address: "22 West Street, Sheffield, S1 4EZ, United Kingdom",
    },
    {
      name: "The Thirsty Student Shop - Newcastle",
      manager: "Olivia Green",
      address:
        "8 Northumberland Street, Newcastle upon Tyne, NE1 7DE, United Kingdom",
    },
  ],
};

//----------------------- Page Routes ------------------------------

/**
 * GET /
 * Home page
 * Renders the shop name and product categories.
 */
router.get("/", (req, res) => {
  res.render("index.ejs", shopData);
});

/**
 * GET /about
 * About page
 * Lists shop locations with manager names and addresses.
 */
router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});

/**
 * GET /search
 * Search form (GET)
 * Lets the user enter a keyword and choose a category.
 */
router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

/**
 * GET /search_result
 * Search results (no database — just echoes submitted params)
 * Query params:
 *   - search_text: string
 *   - category: string (one of productCategories)
 */
router.get("/search_result", (req, res) => {
  const search_text = (req.query.search_text || "").trim();
  const category = (req.query.category || "").trim();

  // Spread shopData to keep header/footer context; pass a small payload for the view
  res.render("search-result", {
    ...shopData,
    search: { search_text, category },
  });
});

/**
 * GET /register
 * Registration form (POST target: /registered)
 * Fields: first, last, email
 * Note: Validation intentionally disabled; values are echoed back.
 */
router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

/**
 * POST /registered
 * Registration summary (echo)
 * Body fields (urlencoded):
 *   - first: string
 *   - last: string
 *   - email: string
 * No validation or storage; simply renders the submitted values.
 */
router.post("/registered", (req, res) => {
  const first = (req.body.first || "").trim();
  const last = (req.body.last || "").trim();
  const email = (req.body.email || "").trim();

  res.render("registered", { ...shopData, first, last, email });
});

/**
 * GET /survey
 * Customer survey (POST target: /survey_submitted)
 * Fields collected on the form: first, last, email, age, category (radio), is_student (checkbox)
 */
router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});

/**
 * POST /survey_submitted
 * Survey summary (echo)
 * Body fields (urlencoded):
 *   - first, last, email, age: strings
 *   - category: string (chosen radio option)
 *   - is_student: "on" if checked, else undefined
 * No persistence or validation; shows a tidy table of results.
 */
router.post("/survey_submitted", (req, res) => {
  const first = (req.body.first || "").trim();
  const last = (req.body.last || "").trim();
  const email = (req.body.email || "").trim();
  const age = (req.body.age || "").trim();
  const category = (req.body.category || "").trim(); // from radio group
  const isStudent = req.body.is_student === "on" ? "Yes" : "No";

  res.render("survey-result", {
    ...shopData,
    survey: { first, last, email, age, category, isStudent },
  });
});

/**
 * Catch-all 404 handler
 * If no route matched above, return a simple not-found message.
 * (Optional — you could render a dedicated 404.ejs instead.)
 */
router.use((req, res) => {
  res.status(404).send("<h1>404</h1><p>Page not found</p>");
});

// Export the router so index.js can mount it at '/'
module.exports = router;
