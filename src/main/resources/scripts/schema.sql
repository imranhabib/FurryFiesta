DROP TABLE Pets IF EXISTS; 

CREATE TABLE Pets (
	id INTEGER GENERATED BY DEFAULT AS IDENTITY (START WITH 1, INCREMENT BY 1) NOT NULL,
	bank VARCHAR(255), 
   	category VARCHAR(255),
   	color VARCHAR(255), 
   	name VARCHAR(255), 
   	photourl VARCHAR(255), 
   	status VARCHAR(255)
); 