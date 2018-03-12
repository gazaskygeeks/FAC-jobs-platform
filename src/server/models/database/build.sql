
BEGIN;

DROP TABLE IF EXISTS users_table, users_info CASCADE;

CREATE TABLE "users_table" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT NOT NULL,
	"role" TEXT NOT NULL,
	"reg_date" DATE timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC')
);


CREATE TABLE "users_info" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER REFERENCES users_table(id),
	"campus" TEXT NOT NULL,
	"cohort" TEXT NOT NULL,
	"interests" VARCHAR NOT NULL,
	"skills" TEXT[] NOT NULL,
	"cv" TEXT NOT NULL,
	"login_date" DATE timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
	"status" TEXT NOT NULL,
	"social_links" TEXT[] NOT NULL,
	"portfolio" TEXT NOT NULL,
	"projects" TEXT[] NOT NULL
);


COMMIT;
