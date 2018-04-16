<h1 align="center"> FAC-APT </h1> <br>
<p align="center">
    <img alt="GitPoint" title="GitPoint" src="https://avatars2.githubusercontent.com/u/9970257?s=200&v=4" width="450">
</p>

# FAC-jobs-platform
A jobs provider for the Founders & Coders members, where the graduates could look for jobs and present their interests in the ones which they like to work on.

## Getting Started:
Clone the repo

  ```
  git clone git@github.com:gazaskygeeks/FAC-jobs-platform.git
  ```
 Or easely click here

<a href='https://facapt.herokuapp.com/'>FAC-APT</a>

 ### Prerequisites:
 If cloning, install the packages:

  ```
  npm i
  ```
  If not; you should have GitHub account and a founders and coders membership :smile:

## Register with GH

Run the following commands.

On github, go to Settings > Developer settings > OAuth applications. For your application url use http://localhost:3000, and as your callback url, use http://localhost:3000/auth/github/callback. Create a
```
config.env
```

 file, and store in it your GITHUB_CLIENTID, GITHUB_SECRET , and DATABASE_URL like so:

 ```
 GITHUB_CLIENTID=<insert client_id here>
 GITHUB_SECRET=<insert client_secret here>
 COOKIEKEY=<insert a random text>
 ```

The npm install would have added env2. We need to now create a config.env file in the root directory.



## Build the database

Note: Here are some quick instructions to remind you how to set up a database:

In terminal type psql, or pgcli if installed. Within psql/pcli enter the following commands each followed by a return. Things in square brackets are for your desired values. Note that password is a string inside ' ' (NOT double quotes ""):



```
CREATE DATABASE [db_name];
```
Go out from pgcli db:
```
'\q'
```
Then enter:
```
pgcli <database name>
CREATE USER <user name> with password <your password>
```




 Add the database URL in the following format, adding your database's details in your config.env file:


DATABASE_URL_LOCALLY = postgres://[username]:[password]@localhost:5432/[database]

Build the database with:
```
npm run build:db

```


## Deployment

Deployed Using Heroku

## Built With

* ReactJs
* NodeJs
* ExpressJs
* React-Redux
* Redux

## Contributing
The proccess goes like:
- Splitting the project to sprints
- Splitting the sprint to user stories then to issues using milestones method
- Getting every pull request reviewed by the rest of the team and overviewed by the scrum master

## Versioning

We use [SemVer](http://semver.org/) for versioning.


## Authors


* **Aisha** - *Scrum Master* - [Aisha](https://github.com/astroash)
* **Walaa Mohtaseb** - *Team Leader-Member* - [WalaaMohtaseb](https://github.com/walaamedhat)
* **Yahya Barrawi** - *Team Member* - [YahyaBarrawi](https://github.com/yahyaHB)
* **Mahmoud Hmaid** - *Team Member* - [MahmoudHmaid](https://github.com/MahmoudMH)
* **Yasmin Hillis** - *Team Member* - [YasminHillis](https://github.com/yasminhillis)
