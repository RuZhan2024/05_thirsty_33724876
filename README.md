# 05_thirsty_33724876 – Lab 5 Coursework (Thirsty Student Shop)

A small Node.js web app built with **Express** and **EJS**. It demonstrates templating (dynamic shop name & product list), GET/POST forms, a small **survey** page, basic styling, and VM deployment with a long-running process. This README follows the official Lab 5 brief and submission instructions.   

## Technologies Used

* **Node.js + Express** – server & routing
* **EJS** – view templates (partials for header/footer)
* **CSS** – external stylesheet (Task 9) 
* **Built-in Node module**: `path` (safe file paths)

## How to Install and Run Locally

```bash
git clone https://github.com/RuZhan2024/05_thirsty_33724876.git
cd 05_thirsty_33724876
npm install
npm start
# visit http://localhost:8000
```

## Available Routes

* `/` — Home; dynamic shop name + product categories (Part A/B)  
* `/about` — About; includes **list of shops & managers** (Task 10) 
* `/search` — GET form with keyword + category (Task 5) 
* `/search_result` — Displays submitted GET query (Task 6) 
* `/register` — POST form: first, last, email (Task 7/8; **no validation active**) 
* `/registered` — Echoes submitted POST body (Task 7/8) 
* `/survey` — Survey form (Task 11) 
* `/survey_submitted` — Tidy survey result page (Task 11) 

## Project Structure

05_thirsty_33724876/
├─ package.json                — Project metadata and dependencies (Express, EJS)
├─ index.js                    — App bootstrap (sets EJS, static /public, urlencoded, mounts routes)
├─ routes/
│  └─ main.js                  — All route handlers for pages below
├─ views/
│  ├─ index.ejs                — /      Home: shop name + product categories
│  ├─ about.ejs                — /about About: shop locations, managers, addresses
│  ├─ search.ejs               — /search GET form: keyword + category
│  ├─ search-result.ejs        — /search_result Echoes submitted GET query
│  ├─ register.ejs             — /register POST form: first name, last name, email
│  ├─ registered.ejs           — /registered Shows submitted registration values
│  ├─ survey.ejs               — /survey POST survey: basic info + chosen category + student flag
│  ├─ survey-result.ejs        — /survey_submitted Shows submitted survey answers (no storage)
│  └─ partials/
│     ├─ header.ejs            — Shared <head> + site header/nav wrapper
│     └─ footer.ejs            — Shared footer + closing layout tags
├─ public/
│  └─ styles.css               — External stylesheet (basic responsive dark theme)
└─ links.txt                   — REQUIRED: one line with home=YOUR_PUBLIC_URL for submission



## Deploying on the VM 

```bash
# on the VM
git clone https://github.com/RuZhan2024/05_thirsty_33724876.git
cd 05_thirsty_33724876
npm install
# optionally set PORT (defaults to 8000)
export PORT=8000
npm start
```

```bash
# if forever is available on your VM image
npx forever start -a -l forever.log -o out.log -e err.log index.js
# manage later
npx forever list
npx forever stop index.js
```

