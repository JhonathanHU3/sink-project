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