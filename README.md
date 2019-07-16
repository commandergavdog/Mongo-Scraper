# New York Times Article Scraper
This is a Node.js application which uses Cheerio and a MongoDB back-end to scrape and save articles to a front-end UI built with Bootstrap.

## Description
The New York Times Article Scraper is a website that allows users to gather articles from The New York Times website (https://www.nytimes.com/), save them for future enjoyment, and leave comments on individual articles.

## Downloading This Application
To use this application:

1. Ensure that Node.js, npm, and MongoDB are installed on your machine. For instructions, see the Technologies Used section below.

2. Next, clone this repo to your local machine:
```
git clone https://github.com/commandergavdog/Mongo-Scraper.git
```
3. Open the repository and install the application's dependencies by executing the following command in the bash terminal.
```
npm i
```
4. Run the application from the command line:
```
node server.js
```

### Technologies Used
- [Node.js and npm](https://nodejs.org/en/download/ "Download Node.js and npm"). First, this application relies on both Node.js and npm to download Node packages and to run the application. Users can download the latest versions of both by following the link to the left.
- [MongoDB](https://www.mongodb.com/ "MongoDB") - This application assumes users have already installed MongoDB. Installation instructions may be found on the MongoDB website.


### NPM Packages
This application utilizes the following NPM packages:
- [express](https://www.npmjs.com/package/express "express")
- [express-handlebars](https://www.npmjs.com/package/express-handlebars "express-handlebars")
- [mongoose](https://www.npmjs.com/package/mongoose "mongoose")
- [body-parser](https://www.npmjs.com/package/body-parser "body-parser")
- [cheerio](https://www.npmjs.com/package/cheerio "cheerio")
- [request](https://www.npmjs.com/package/request "request")

