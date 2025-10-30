
# 05_thirsty_33724876 – Lab 5 Coursework (Thirsty Student Shop)

A small Node.js web app built with **Express** and **EJS**. It demonstrates templating (dynamic shop name & product list), GET/POST forms, a small **survey** page, basic styling, and VM deployment with a long-running process.


## Technologies Used

- **Node.js + Express** – server & routing  
- **EJS** – view templates (partials for header/footer)  
- **CSS** – external stylesheet (`public/styles.css`)  
- **Built-in Node module**: `path` (safe file paths)

## How to Install and Run Locally

```bash
git clone https://github.com/RuZhan2024/05_thirsty_33724876.git
cd 05_thirsty_33724876
npm install
npm start
# visit http://localhost:8000
````

## Available Routes

* `/` — Home; shows the shop name and product categories.
* `/about` — About; lists shops, managers, and addresses.
* `/search` — GET form with keyword + category.
* `/search_result` — Displays what was submitted via the search form.
* `/register` — POST form for first name, last name, and email (no validation active).
* `/registered` — Shows what was submitted via the register form.
* `/survey` — Survey form (basic info, category choice, student flag).
* `/survey_submitted` — Displays submitted survey answers.


## Project Structure

```text
05_thirsty_33724876/
├─ package.json                — Project metadata and dependencies (Express, EJS)
├─ index.js                    — App bootstrap (sets EJS, static /public, urlencoded, mounts routes)
├─ routes/
│  └─ main.js                  — All route handlers for pages below
├─ views/
│  ├─ index.ejs                — /                 Home: shop name + product categories
│  ├─ about.ejs                — /about            Shop locations, managers, addresses
│  ├─ search.ejs               — /search           GET form: keyword + category
│  ├─ search-result.ejs        — /search_result    Echoes submitted GET query
│  ├─ register.ejs             — /register         POST form: first name, last name, email
│  ├─ registered.ejs           — /registered       Shows submitted registration values
│  ├─ survey.ejs               — /survey           Survey form: basic info + category + student flag
│  ├─ survey-result.ejs        — /survey_submitted Shows submitted survey answers (no storage)
│  └─ partials/
│     ├─ header.ejs            — Shared <head> + site header/nav wrapper
│     └─ footer.ejs            — Shared footer + closing layout tags
├─ public/
│  └─ styles.css               — External stylesheet (light “shallow” theme)
└─ links.txt                   — REQUIRED: one line with home=http://www.doc.gold.ac.uk/usr/122/ for submission
```


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

To keep the app running for marking (if `forever` is available on your VM image):

```bash
forever start -a -l forever.log -o out.log -e err.log index.js

# manage later
forever list
forever stop index.js
```

```markdown
| Route               | Link                                                                                     |
| ------------------- | ---------------------------------------------------------------------------------------- |
| `/`                 | http://www.doc.gold.ac.uk/usr/122/                                                       |
| `/about`            | http://www.doc.gold.ac.uk/usr/122/about                                                  |
| `/search`           | http://www.doc.gold.ac.uk/usr/122/search                                                 |
| `/search_result`    | http://www.doc.gold.ac.uk/usr/122/search_result                                          |
| `/register`         | http://www.doc.gold.ac.uk/usr/122/register                                               |
| `/registered`       | http://www.doc.gold.ac.uk/usr/122/registered                                             |
| `/survey`           | http://www.doc.gold.ac.uk/usr/122/survey                                                 |
| `/survey_submitted` | http://www.doc.gold.ac.uk/usr/122/survey_submitted                                       |
```
