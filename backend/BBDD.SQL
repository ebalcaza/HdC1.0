create database HdCDataBase;

Create table Usuarios(
id int identity(1,1) primary key not null,
email Varchar(150) not null,

Nombre Varchar(50) not null,
contrasena Varchar(10),
rol int
);