CREATE TABLE projects (id integer NOT NULL PRIMARY KEY AUTOINCREMENT,name text,description text,"key_jira" text);
CREATE TABLE users (id integer NOT NULL PRIMARY KEY AUTOINCREMENT,fullname text,email text,password text,"registration_date" date);
CREATE TABLE "user-projects" (id integer NOT NULL PRIMARY KEY AUTOINCREMENT,"user_id" integer NOT NULL REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,"project_id" integer NOT NULL REFERENCES projects (id) ON DELETE CASCADE ON UPDATE CASCADE,"registration_date" date);
