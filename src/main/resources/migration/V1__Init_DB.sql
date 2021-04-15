CREATE TABLE clients(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL
);

CREATE TABLE courseclients(
    client_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    course_id BIGINT NOT NULL,
    teachername VARCHAR(255) NOT NULL
);

CREATE TABLE courses(
    coursesname VARCHAR(255) PRIMARY KEY,
    payment DOUBLE PRECISION NOT NULL,
    month INT NOT NULL,
    teachername VARCHAR(255) NOT NULL
);

CREATE TABLE teachers(
    name VARCHAR(255) NOT NULL
);
