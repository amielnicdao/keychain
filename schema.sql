DROP DATABASE IF EXISTS keychain;
CREATE DATABASE keychain;

USE keychain;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE passwords
(
	id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
	user_name varchar(255) NOT NULL,
	type varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    user_id int NOT NULL REFERENCES users(id)
);