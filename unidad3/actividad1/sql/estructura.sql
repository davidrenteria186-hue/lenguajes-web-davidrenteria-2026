CREATE DATABASE gestion_veterinaria;

USE gestion_veterinaria;

CREATE TABLE duenos (
    id_dueno INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20) NOT NULL
);

CREATE TABLE mascotas (
    id_mascota INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE,
    id_dueno INT NOT NULL,
    FOREIGN KEY (id_dueno)
    REFERENCES duenos(id_dueno)
);

CREATE TABLE veterinarios (
    id_veterinario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100) NOT NULL,
    licencia VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE citas (
    id_cita INT AUTO_INCREMENT PRIMARY KEY,
    fecha_hora DATETIME NOT NULL,
    costo DECIMAL(10,2) NOT NULL,
    diagnostico TEXT,
    id_mascota INT NOT NULL,
    id_veterinario INT NOT NULL,
    FOREIGN KEY (id_mascota)
    REFERENCES mascotas(id_mascota),
    FOREIGN KEY (id_veterinario)
    REFERENCES veterinarios(id_veterinario)
);