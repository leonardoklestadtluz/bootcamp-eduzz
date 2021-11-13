-- criar tabelas
CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

-- inserção de dados nas tabelas
INSERT INTO pessoas (nome, nascimento) VALUES ('Astrogilda','1923 02 07')
INSERT INTO pessoas (nome, nascimento) VALUES ('Gesildo','1894 12 16')
INSERT INTO pessoas (nome, nascimento) VALUES ('Clarilda','1945 03 29')