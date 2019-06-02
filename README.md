# Forcekit Phishing Toolkit

This is only for educational perpose. 

## Currenty supported platforms

* Facebook Mobile

## How to deploy on your own

* Clone the project with `git clone git@github.com:forcekit/forcekit.git`
* You need a mongodb database. You can use mongodb.com free tier cluster.
* Type the command `cp .env.example .env` and change mongo db connection string with connection details.
* Install `now` from zeit using `npm install -g now`
* Run `now dev` to run development server locally. You can test now.
* You need to add enviroment to production too. For that use `now secrets add mongo-uri "connection string". Replace the connection string with same connection string you used in `.env` 
* Run `now` to deploy to production. You will get an url.
