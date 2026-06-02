USE gestion_veterinaria;

INSERT INTO duenos(nombre,correo,telefono)
VALUES
('Juan Perez','juan@gmail.com','3001111111'),
('Maria Gomez','maria@gmail.com','3002222222'),
('Carlos Ruiz','carlos@gmail.com','3003333333');

INSERT INTO mascotas(nombre,especie,fecha_nacimiento,id_dueno)
VALUES
('Firulais','Perro','2020-01-15',1),
('Misu','Gato','2021-03-10',2),
('Piolin','Ave','2022-07-01',3);

INSERT INTO veterinarios(nombre,especialidad,licencia)
VALUES
('Ana Torres','Cirugia','LIC001'),
('Pedro Diaz','Dermatologia','LIC002');

INSERT INTO citas(fecha_hora,costo,diagnostico,id_mascota,id_veterinario)
VALUES
('2026-05-01 10:00:00',50000,'Control general',1,1),
('2026-05-02 11:00:00',45000,'Vacunacion',2,2),
('2026-05-03 09:30:00',60000,'Revision medica',3,1);