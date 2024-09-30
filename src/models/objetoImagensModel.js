import conn from "../config/conn.js";

const tableObjetoImagens = /*sql*/`
create table if not exists objeto_imagens(
    image_id varchar(60) primary key,
    image_path varchar(255) not null,
    objeto_id varchar(60) not null,
    created_at timestamp default value current_timestamp,
    updated_at timestamp default value current_timestamp on update current_timestamp,
    foreign key(objeto_id) references objetos(objeto_id)
)
`;
conn.query(tableObjetoImagens, (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("tabela [objetoImage] criado com sucesso")
})