-- To initialize the mysql database creating the main table patient_user_entity

DROP TABLE IF EXISTS patient_user_entity;

CREATE TABLE patient_user_entity (
  guid varchar(255) NOT NULL,
  name varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  cellphone varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  refreshToken varchar(100) NOT NULL,
  active varchar(255) NOT NULL,
  PRIMARY KEY (guid)
);

select '******** TABLE PATIENT USER CREATED ********' AS '******** COMPLETED ********';
