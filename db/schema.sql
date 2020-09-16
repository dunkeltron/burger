DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
    burger varchar(255) NOT NULL,
    devoured boolean,
    PRIMARY KEY (id)
)

DROP DATABASE IF EXISTS photo_db;
CREATE DATABASE photo_db;
USE photo_db;
CREATE TABLE user (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NULL,
  `userName` VARCHAR(45) NULL,
  PRIMARY KEY (`userId`));
  
  SELECT * FROM Users;