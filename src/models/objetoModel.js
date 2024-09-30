import conn from "../config/conn.js";

const tableObjeto = /*sql*/`
create table if not exists objetos(
    objeto_id varchar(60) primary key,
    nome varchar(255) not null,
    categoria varchar(255) not null,
    peso varchar(255) not null,
    cor varhcar(255) not null,
    descricao text,
    disponivel boolean,
    preco decimal(5,2) not null,
    usuario_id varchar(60),
    created_at timestamp default value current_timestamp,
    updated_at timestamp default value current_timestamp on update current_timestamp,
    foreign key (usuario_id) references usuario(usuario_id)
)
`;

conn.query(tableObjeto, (err)=> {
    if(err){
        console.error(err)
        return
    }
    console.log("tabela [objeto] criado com sucesso")
})
