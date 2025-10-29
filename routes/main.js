// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
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

// Helper: simple email check (Task 8)
function isValidEmail(email) {
  if (!email) return false;
  // basic check; HTML will also validate
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Handle the main routes
// TODO
router.get("/", (req, res) => {
  res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});

router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

router.get("/search_result", (req, res) => {
  const search_text = (req.query.search_text || '').trim();
  const category = (req.query.category || '').trim();

  res.render('search-result', {
    ...shopData,
    search: { search_text, category }
  });
});

router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

router.post("/registered", (req, res) => {
  const first = (req.body.first || "").trim();
  const last = (req.body.last || "").trim();
  const email = (req.body.email || "").trim();

  res.render("registered", { ...shopData, first, last, email });
});

router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});

// Survey submission 
router.post('/survey_submitted', (req, res) => {
  const first = (req.body.first || '').trim();
  const last = (req.body.last || '').trim();
  const email = (req.body.email || '').trim();
  const age = (req.body.age || '').trim();
  const category = (req.body.category || '').trim(); // from radio group
  const isStudent = req.body.is_student === 'on' ? 'Yes' : 'No';

  res.render('survey-result', {
    ...shopData,
    survey: { first, last, email, age, category, isStudent }
  });
});

// (Optional) Friendly 404
router.use((req, res) => {
  res.status(404).send('<h1>404</h1><p>Page not found</p>');
});

// Export the router object so index.js can access it
module.exports = router;
