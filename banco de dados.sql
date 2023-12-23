
use dbApiCarros;

create table carro (
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar (7)
);

insert into carro (modelo, placa) values ('Toyota', 'EMSA1');

select * from carro

