
BEGIN;

DROP TABLE IF EXISTS users_table, users_info CASCADE;

CREATE TABLE "users_table" (
	"id" SERIAL NOT NULL,
	"username" TEXT NOT NULL,
	"role" TEXT NOT NULL,
	"reg_date" DATE NOT NULL,
	CONSTRAINT users_table_pk PRIMARY KEY ("id")
);


CREATE TABLE "users_info" (
	"id" SERIAL NOT NULL,
	"user_id" INTEGER REFERENCES users_table(id),
	"campus" TEXT NOT NULL,
	"cohort" TEXT NOT NULL,
	"interests" varchar NOT NULL,
	"skills" TEXT NOT NULL,
	"cv" TEXT NOT NULL,
	"login_date" TEXT NOT NULL,
	"status" TEXT NOT NULL,
	"social_links" TEXT NOT NULL,
	"portfolio" TEXT NOT NULL,
	"projects" TEXT NOT NULL,
	CONSTRAINT users_info_pk PRIMARY KEY ("id")
);


COMMIT;
