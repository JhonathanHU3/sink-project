CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    username VARCHAR(30) UNIQUE NOT NULL CHECK (username !~ ' '),
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    profileimagedir VARCHAR(150) NOT NULL,
    signed BOOLEAN DEFAULT TRUE,
    moduleshistory TEXT,
    created_at TIMESTAMP DEFAULT Now()
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    name VARCHAR(120) UNIQUE NOT NULL,
    description VARCHAR(500) NOT NULL,
    imgdir VARCHAR(120) NOT NULL
);

INSERT INTO courses 
(name, description, imgdir) VALUES
('League of Legends', 'League of Legends é um renomado jogo online de batalha estratégica em equipe, no qual jogadores assumem o papel de campeões com habilidades únicas. Ambientado em um mundo fantástico, o objetivo é destruir o Nexus inimigo, enfrentando desafios táticos, trabalho em equipe e estratégias avançadas. Com uma comunidade global apaixonada e uma cena competitiva vibrante, LoL é um dos títulos mais populares no cenário de esports.', './img/coursesimg/lol.png'),
('Valorant', 'Desenvolvido pela Riot Games, Valorant é um jogo tático de tiro em primeira pessoa que combina elementos de estratégia e habilidades especiais. Os jogadores assumem o papel de Agentes, cada um com habilidades únicas, enquanto competem em partidas intensas. A jogabilidade estratégica e a precisão são fundamentais, tornando Valorant um favorito entre os entusiastas de esports que apreciam desafios táticos e mecânicas de tiro precisas.', './img/coursesimg/valorant.png'),
('Fortnite', 'Fortnite é um jogo inovador de battle royale que se destaca por seu estilo artístico único, construção de estruturas e eventos épicos. Com 100 jogadores lutando pela sobrevivência em uma ilha em constante mudança, o jogo combina habilidade de tiro, estratégia de construção e um toque de humor. A comunidade global e os eventos regulares tornam Fortnite uma escolha emocionante para aqueles que buscam uma experiência dinâmica e competitiva.', './img/coursesimg/fortnite.png'),
('DOTA 2', 'DOTA 2 é um jogo de estratégia em equipe que desafia os jogadores a controlar heróis poderosos em batalhas épicas. Com um mapa complexo, ampla variedade de heróis e um sistema de progressão estratégica, DOTA 2 é conhecido por sua profundidade estratégica. A cena competitiva é rica em torneios globais, oferecendo oportunidades para jogadores aprimorarem suas habilidades e competirem em níveis mais altos.', './img/coursesimg/dota.png'),
('CS 2', 'CS 2 é um clássico jogo de tiro em primeira pessoa que se destaca pela jogabilidade tática, trabalho em equipe e habilidades de tiro precisas. Divididos em equipes de terroristas e contra-terroristas, os jogadores competem em partidas estratégicas para atingir objetivos específicos. Com uma cena competitiva robusta e uma base de jogadores dedicada, CS 2 é um título atemporal no cenário de esports.', './img/coursesimg/cs.png');

CREATE TABLE classes (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    title VARCHAR(120) NOT NULL,
    description VARCHAR(500) NOT NULL, 
    imgdir VARCHAR(120) NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses (id) 
);

