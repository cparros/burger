DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT,
  burger_name VARCHAR(155),
  devoured BOOLEAN,
  PRIMARY KEY (id)
);