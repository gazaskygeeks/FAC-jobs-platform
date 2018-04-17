BEGIN;

DROP TABLE IF EXISTS users_table, users_info CASCADE;

CREATE TABLE IF NOT EXISTS users_table (
    id SERIAL PRIMARY KEY,
    github_id BIGINT UNIQUE NOT NULL,
    display_name VARCHAR(35),
    username TEXT UNIQUE NOT NULL,
    email VARCHAR(254) ,
    avatar VARCHAR(100) NOT NULL,
    new_user BOOLEAN DEFAULT True NOT NULL,
    profile_url VARCHAR(100) NOT NULL,
	  is_admin  BOOLEAN DEFAULT false NOT NULL,
    bio TEXT,
	  reg_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (current_timestamp)
);

CREATE TABLE IF NOT EXISTS users_info (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users_table(id),
  status TEXT NOT NULL,
	campus TEXT NOT NULL,
	cohort TEXT NOT NULL,
  portfolio TEXT ,
	interests TEXT[] NOT NULL,
	skills TEXT[] NOT NULL,
  projects TEXT[] NOT NULL,
  social_links TEXT[] NOT NULL,
	cv TEXT NOT NULL,
	login_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (current_timestamp),
  update_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (current_timestamp)
);

COMMIT;
