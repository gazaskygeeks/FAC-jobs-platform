BEGIN;

DROP TABLE IF EXISTS users_table, users_info CASCADE;

CREATE TABLE IF NOT EXISTS users_table (
    id SERIAL PRIMARY KEY,
    github_id BIGINT UNIQUE NOT NULL,
    username TEXT NOT NULL,
    email VARCHAR(300) ,
    avatar VARCHAR(8000) NOT NULL,
    new_user BOOLEAN DEFAULT false NOT NULL,
    profile_url VARCHAR(8000) NOT NULL,
	  is_admin  BOOLEAN DEFAULT false NOT NULL,
    bio TEXT,
	  reg_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (current_timestamp)
);

CREATE TABLE IF NOT EXISTS users_info (
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


INSERT INTO users_table (github_id,name,email,avatar,new_user,profile_url,is_admin) VALUES
  (12,'sis','sis@fac.com','pig.png', 'true','github.com/sis','false') ,
  (13,'bro','bro@fac.com','cow.png', 'true', 'github.com/bro','false');

INSERT INTO users_info (user_id , campus,cohort ,interests,skills,cv,status ,social_links,portfolio, projects)
  VALUES (3,'Gaza','FACG3','Freelancer',['React.js','Node.js','Express.js','postgreSql'],'cv.pdf','Urgent',
    ['https://www.linkedin.com/in/yasmin-hillis-66088515a/'],
    'www.yasmin.com','https://gazaskygeeks-cinema.herokuapp.com')

COMMIT;
