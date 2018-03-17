BEGIN;

DROP TABLE IF EXISTS users_table CASCADE;

CREATE TABLE users_table (
    id SERIAL PRIMARY KEY,
    github_id BIGINT UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(300) ,
    avatar VARCHAR(8000) NOT NULL,
    newUser BOOLEAN DEFAULT 'false' NOT NULL,
    profile_url VARCHAR(8000) NOT NULL
);


INSERT INTO users_table (github_id,name,email,avatar,newUser,profile_url) VALUES
  (12,'sis','sis@fac.com','pig.png', 'true','github.com/sis') ,
  (13,'bro','bro@fac.com','cow.png', 'true', 'github.com/bro');

COMMIT;
