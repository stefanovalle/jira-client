CREATE TABLE filters (id integer NOT NULL PRIMARY KEY AUTOINCREMENT,name text,"id_filter_on_jira" text);
CREATE TABLE users (id integer NOT NULL PRIMARY KEY AUTOINCREMENT,fullname text,email text,password text,"registration_date" date);
CREATE TABLE "user-filters" (id integer NOT NULL PRIMARY KEY AUTOINCREMENT,"user_id" integer NOT NULL REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,"filter_id" integer NOT NULL REFERENCES filters (id) ON DELETE CASCADE ON UPDATE CASCADE,"registration_date" date);
