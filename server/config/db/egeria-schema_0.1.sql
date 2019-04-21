--ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
DROP DATABASE IF EXISTS egeria;
CREATE DATABASE egeria;
USE egeria;

-- Table structure for table `user`
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

-- Table structure for table `trip`
CREATE TABLE trip (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    public BOOLEAN,
    name VARCHAR(255) NOT NULL,
    description TEXT NULL,
    companionship VARCHAR(20) NOT NULL, -- solo, couple, family, friends
    category VARCHAR(11) NOT NULL, -- monumental, nature, gastro, rural, urban, family, relax
    starting_point VARCHAR (50) NOT NULL,
    destination_point VARCHAR(50) NOT NULL,
    distance FLOAT (30, 10) NOT NULL, -- num de km
    photo TEXT null, -- url
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY user_fk(user_id) REFERENCES user(id)
);

-- Table structure for table `trackpoint`
CREATE TABLE trackpoint (
    id INT NOT NULL AUTO_INCREMENT,
    trip_id INT NOT NULL,
    name VARCHAR(500) NOT NULL,
    lat FLOAT (30, 10) NOT NULL,
    lon FLOAT (30, 10) NOT NULL,
    description TEXT NULL,
    photo TEXT NULL, -- url
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY trip_fk(trip_id) REFERENCES trip(id)
);



-- ---------------- USER DATA -------------------------
INSERT INTO user (email, name, password) values ('regina@r.com', 'Regina', 'b88374c2cfbc2a19f01167ab76705772');


-- ---------------- TRIP DATA -----------------------------
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'Chile', 'Trip around Chile', 'couple', 'nature', 500, 'San Pedro de Atacama', 'Santiago de Chile', 'https://suitcasemag.com/wp-content/uploads/2017/08/atacama-desert.jpg');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'Rome', 'Trip to Rome', 'couple', 'monumental', 100, 'San Giovannni in Laterano', 'Piazza Venezia', 'https://lonelyplanetimages.imgix.net/mastheads/stock-photo-roman-sunset-77415821.jpg?sharp=10&vib=20&w=1200');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'Japan', 'Planning trip to Japan', 'couple', 'urban', 320, 'loremipsum', 'loremipsum', 'https://www.asgam.com/wp-content/uploads/2018/12/japan.jpg');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'Spain', 'A roadtrip in Spain', 'family', 'gastro', 100,'loremipsum', 'loremipsum', 'https://www.telegraph.co.uk/content/dam/Travel/2017/December/zahara-GettyImages-620354288.jpg?imwidth=450');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'Andalucia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'couple', 'rural', 100, 'loremipsum', 'loremipsum', 'https://www.planetware.com/photos-large/E/spain-sierra-nevada-capileira.jpg');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'Canada', 'Planning trip to Lorem ipsum dolor sit amet, consectetur adipiscing', 'couple', 'nature', 100, 'loremipsum', 'loremipsum', 'https://i1.wp.com/viajesazulmarino.com/blog/wp-content/uploads/canada_.png?resize=913%2C607&ssl=1');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'Iceland', 'A roadtrip in Lorem ipsum dolor sit amet, consectetur', 'family', 'nature', 100, 'loremipsum', 'loremipsum', 'http://geographical.co.uk/media/k2/items/cache/0c84ab19d43307514d9470b51a44e5d3_XL.jpg');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'Granada', 'Planning trip to Lorem ipsum dolor sit amet', 'couple', 'monumental', 100, 'loremipsum', 'loremipsum', 'http://www.turgranada.es/wp-content/blogs.dir/2/files_mf/cache/th_8e735c5fb9f20d17096a998987c257d7_sierra-nevada0.jpg?x53512');
INSERT INTO trip (user_id, name, description, companionship, category, distance, destination_point, starting_point, photo) values (1, 'France', 'A roadtrip Lorem ipsum dolor sit amet, consectetur', 'family', 'gastro', 100, 'loremipsum', 'loremipsum', 'https://cdn1.guias-viajar.com/wp-content/uploads/2017/08/Castillo-Najac-FB-011.jpg');


-- ------------- TRACKPOINT DATA -----------------------------
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo) values (1, 'San Pedro de Atacama', 'Church near San Pedro', -22.909339, -68.188493, 'https://news.southamerica.travel/wp-content/uploads/2016/11/Church-Near-San-Pedro.jpg');
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo) values (1, 'Valle de la Luna', 'Sunset in Valle de la Luna', -22.922556, -68.298912, 'http://www.turistour.cl/img/fotos_atacama/valleluna-01-m.jpg');
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo) values (1, 'Geyser', 'Geyser near San Pedro de Atacama', -22.436964, -67.960372, 'http://www.sanpedrodeatacama.net/media/com_hikashop/upload/geyser01_85690000.jpg');
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo) values (2, 'Piazza del Popolo', 'One of the most beautiful squares in central Rome',  41.910511, 12.476162, 'https://www.romasegreta.it/images/piazza-del-popolo.jpg');
INSERT INTO trackpoint (trip_id, name, description, lat, lon, photo) values (5, 'Bolonia beach, Cadiz', 'A magnificent white sandy beach with ancient Roman ruins in the background.', 36.088279, -5.777149, 'https://photo980x880.mnstatic.com/b58503ccde957f2d79901ab8ede6492f/playa-de-bolonia-7543512.jpg');





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



-- Get all Trackpoints from trips that belong to an user
-- SELECT tp.*, u.name AS userName FROM trackpoint tp
-- inner join trip t on (tp.trip_id = t.id)
-- inner join user u on (u.id = t.user_id) WHERE u.id = 1;


-- Get all Trackpoints from a trip including the name of the owner of the trip
-- SELECT tp.*, u.name AS userName FROM trackpoint tp
-- inner join trip t on (tp.trip_id = t.id) AND t.id = 1
-- inner join user u on (u.id = t.user_id);