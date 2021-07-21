-- Script that creates the database and its tables

CREATE DATABASE filmies;
USE filmies;

CREATE TABLE series(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY
    title VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    seasons NUMBER NOT NULL,
    episodes NUMBER NOT NULL,
    release VARCHAR(255) NOT NULL
);

CREATE TABLE films(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY
    title VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    minutes NUMBER NOT NULL,
    release VARCHAR(255) NOT NULL
);