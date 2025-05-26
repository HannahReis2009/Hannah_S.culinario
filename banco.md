-- Criar banco de dados receitas_hannah_reis
CREATE DATABASE IF NOT EXISTS receitas_hannah_reis CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE receitas_hannah_reis;

-- Criar tabela receitas
CREATE TABLE IF NOT EXISTS receitas (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- ID único da receita - Hannah Reis
    nome VARCHAR(255) NOT NULL,                -- Nome da receita - Hannah Reis
    ingredientes TEXT NOT NULL,                 -- Ingredientes armazenados como texto - Hannah Reis
    tempo_preparo INT NOT NULL                  -- Tempo de preparo em minutos - Hannah Reis
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
