CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    profileimagedir VARCHAR(150) NOT NULL,
    signed BOOLEAN DEFAULT TRUE,
    moduleshistory TEXT,
    created_at TIMESTAMP DEFAULT Now()
);

CREATE TABLE course (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name VARCHAR(120) UNIQUE NOT NULL,
    description VARCHAR(500) NOT NULL,
    imgdir VARCHAR(120) NOT NULL
);

CREATE TABLE classes (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    title VARCHAR(120) NOT NULL,
    description VARCHAR(500) NOT NULL, 
    imgdir VARCHAR(120) NOT NULL
    
)