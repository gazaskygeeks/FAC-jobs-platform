BEGIN;

DROP TABLE IF EXISTS users_table CASCADE;

CREATE TABLE IF NOT EXISTS users_table (
    id SERIAL PRIMARY KEY,
    github_id BIGINT UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(300) ,
    avatar VARCHAR(8000) NOT NULL,
    newUser BOOLEAN DEFAULT false NOT NULL,
    profile_url VARCHAR(8000) NOT NULL,
	"role"  BOOLEAN DEFAULT false NOT NULL,
	  reg_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (current_timestamp)
);



CREATE TABLE IF NOT EXISTS "users_info" (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users_table(id),
	campus TEXT NOT NULL,
	cohort TEXT NOT NULL,
	interests VARCHAR(250) NOT NULL,
	skills TEXT[] NOT NULL,
	cv TEXT NOT NULL,
	login_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (current_timestamp),
	status TEXT NOT NULL,
	social_links TEXT[] NOT NULL,
	portfolio TEXT NOT NULL,
	projects TEXT[] NOT NULL
);


INSERT INTO users_table (github_id,name,email,avatar,newUser,profile_url,"role") VALUES
  (12,'sis','sis@fac.com','pig.png', 'true','github.com/sis','false') ,
  (13,'bro','bro@fac.com','cow.png', 'true', 'github.com/bro','false');

COMMIT;
