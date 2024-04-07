# News-Website
- News Website displaying news articles from various sources retrieved from external news API.<br>
- View top headlines on homepage and browse by different categories: Business, Entertainment, Health, Science, Sports, Technology<br>
- Search Functionality perform keyword searches and fetches search query related results from all API articles. Does not filter from the current page.<br>
- Customize endpoints as necessary.

## Steps to run
1. Generate your unique news API key from https://newsapi.org/
2. In news.js, replace `YOUR_API_KEY` with your API key in each endpoint
3. `cd` into home directory, install necessary modules with `npm i`
4. (Optional) Install `nodemon`
5. Run the project using `npm start`
6. You can change or create new endpoints as required (see documentation on https://newsapi.org/docs)

## Necessary node modules
1. Axios
2. BodyParser

## External News API 
NewsAPI.org -> https://newsapi.org/
<br>
(Only 100 free API calls per day)

## Technologies
Node.js, Express.js, EJS, HTML/CSS/SCSS
<br>
For SCSS compilation, use "Beautify css/sass/scss/less" VSCode extension
