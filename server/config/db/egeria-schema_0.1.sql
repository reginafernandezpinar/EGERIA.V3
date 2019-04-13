--ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
DROP DATABASE IF EXISTS egeria;
CREATE DATABASE egeria;
USE egeria;

-- Table structure for table `user`
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

-- Table structure for table `trip`
CREATE TABLE trip (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    public BOOLEAN,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(400) NULL,
    companionship VARCHAR(20) NOT NULL, -- solo, couple, family
    category VARCHAR(11) NOT NULL, -- monumental, nature, gastro, rural, urban, family, relax
    starting_point VARCHAR (50) NOT NULL,
    destination_point VARCHAR(50) NOT NULL,
    distance FLOAT (10, 2) NOT NULL, -- num de km
    photo VARCHAR(200) null, -- url
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY user_fk(user_id) REFERENCES user(id)
);

-- Table structure for table `trackpoint`
CREATE TABLE trackpoint (
    id INT NOT NULL AUTO_INCREMENT,
    trip_id INT NOT NULL,
    name VARCHAR(500) NOT NULL,
    lat INT NOT NULL,
    lon INT NOT NULL,
    description VARCHAR(500) NULL,
    type VARCHAR(20) NOT NULL, -- panoramic, monument, animal observationn
    photo VARCHAR(200) NULL, -- url
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY trip_fk(trip_id) REFERENCES trip(id)
);



-- ---------------- USER DATA -------------------------
INSERT INTO user (email, name, password) values ('test@test.com', 'test', 'test');
INSERT INTO user (email, name, password) values ('aaa@aaa.com', 'aaa', 'aaa');
INSERT INTO user (email, name, password) values ('bbb@bbb.com', 'bbb', 'bbb');
INSERT INTO user (email, name, password) values ('regina@regina.com', 'regina', 'regina');


-- ---------------- TRIP DATA -----------------------------
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'Rome', 'Trip to Rome', 'couple', 'monumental', 100, 'San Giovannni in Laterano', 'Piazza Venezia', 'https://lonelyplanetimages.imgix.net/mastheads/stock-photo-roman-sunset-77415821.jpg?sharp=10&vib=20&w=1200');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'Japan', 'Planning trip to Japan', 'couple', 'urban', 100, 'loremipsum', 'loremipsum', 'https://www.asgam.com/wp-content/uploads/2018/12/japan.jpg');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'Spain', 'A roadtrip in Spain', 'family', 'gastro', 100,'loremipsum', 'loremipsum', 'https://www.telegraph.co.uk/content/dam/Travel/2017/December/zahara-GettyImages-620354288.jpg?imwidth=450');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (2, 'Andalucia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'couple', 'rural', 100, 'loremipsum', 'loremipsum', 'https://www.planetware.com/photos-large/E/spain-sierra-nevada-capileira.jpg');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (2, 'Canada', 'Planning trip to Lorem ipsum dolor sit amet, consectetur adipiscing', 'couple', 'nature', 100, 'loremipsum', 'loremipsum', 'https://i1.wp.com/viajesazulmarino.com/blog/wp-content/uploads/canada_.png?resize=913%2C607&ssl=1');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (3, 'Iceland', 'A roadtrip in Lorem ipsum dolor sit amet, consectetur', 'family', 'nature', 100, 'loremipsum', 'loremipsum', 'http://geographical.co.uk/media/k2/items/cache/0c84ab19d43307514d9470b51a44e5d3_XL.jpg');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (3, 'Granada', 'Planning trip to Lorem ipsum dolor sit amet', 'couple', 'monumental', 100, 'loremipsum', 'loremipsum', 'http://www.turgranada.es/wp-content/blogs.dir/2/files_mf/cache/th_8e735c5fb9f20d17096a998987c257d7_sierra-nevada0.jpg?x53512');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (3, 'France', 'A roadtrip Lorem ipsum dolor sit amet, consectetur', 'family', 'gastro', 100, 'loremipsum', 'loremipsum', 'https://cdn1.guias-viajar.com/wp-content/uploads/2017/08/Castillo-Najac-FB-011.jpg');


-- ------------- TRACKPOINT DATA -----------------------------
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo, type) values (1, 'granada', 'visit to Alhambra', 7383785, 658273, 'no photo', 'panoramic');
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo, type) values (1, 'malaga', 'visit to malaga', 7383785, 658273, 'no photo', 'panoramic');
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo, type) values (2, 'fiumicino', 'piazza popolo',  7383785, 658273, 'no photo', 'panoramic');
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo, type) values (2, 'Piazza di Spagna', 'historic Rome', 7383785, 658273, 'no photo', 'panoramic');
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo, type) values (3, 'Lanjaron', 'visit to Alpujarra', 7383785, 658273, 'no photo', 'panoramic');
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo, type) values (3, 'Ronda', 'visit to Ronda', 7383785, 658273, 'no photo', 'panoramic');
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo, type) values (2, 'Coloseum', 'a walk in the ancient Rome', 7383785, 658273, 'no photo', 'panoramic');
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo, type) values (1, 'Vittorio Emanuele', 'historic Rome', 7383785, 658273, 'no photo', 'panoramic');


-- to complete..
INSERT INTO trackpoint (trip_id, name, lat, lon, description, type, photo) values (1, 'Puerta de Alcala', 7383785, 658273, 'Monument in the city center', 'monument', 'no photo');



-- Table structure for table `track` (Optional)
-- CREATE TABLE track (
--     id INT NOT NULL AUTO_INCREMENT,
--     trip_id INT NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     description VARCHAR(500) NULL,
--     starting_point VARCHAR (50) NOT NULL,
--     destination_point VARCHAR(50) NOT NULL,
--     photo VARCHAR(200) null, -- url
--     distance FLOAT (10, 2) NOT NULL, -- num de km
--     creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY(id),
--     FOREIGN KEY trip_fk(trip_id) REFERENCES trip(id)
-- );