import conn from "../config/conn.js";

const tabelaUsuario = /*sql*/`
create table if not exist usuarios(
    usuario_id varchar(60) primary key,
    nome varchar(255) not null,
    email varchar(255) not null,
    telefone varchar(255) not null,
    senha varchar(255) not null,
    imagem varchar(255) not null,
    created_at timestamp default value current_timestamp,
    updated_at timestamp default value current_timestamp on update current_timestamp
)`
//1210lf_01 