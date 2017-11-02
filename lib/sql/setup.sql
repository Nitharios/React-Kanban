\c nniosco;

DROP DATABASE IF EXISTS react_kanban;
DROP USER IF EXISTS kanban_manager;

CREATE USER kanban_manager PASSWORD 'password';
CREATE DATABASE react_kanban OWNER kanban_manager;

\c react_kanban;