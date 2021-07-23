-- Script that creates the database and its tables

CREATE DATABASE filmies;
USE filmies;

CREATE TABLE series(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description VARCHAR(255),
    image VARCHAR(255),
    seasons INT(11),
    episodes INT(11),
    date VARCHAR(100)
);

CREATE TABLE films(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description VARCHAR(255),
    image VARCHAR(255),
    minutes INT(11),
    date VARCHAR(100)
);

DESCRIBE series;
DESCRIBE films;