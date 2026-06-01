# Actividad 1 - Unidad 3

## Tipos de datos utilizados

- INT AUTO_INCREMENT para los identificadores de las tablas.
- VARCHAR para nombres, correos electrónicos, teléfonos, especialidades y licencias.
- DATE para la fecha de nacimiento de las mascotas.
- DATETIME para registrar la fecha y hora de las citas médicas.
- DECIMAL(10,2) para almacenar el costo de las consultas con precisión.

## Integridad referencial

Se utilizaron claves primarias (PRIMARY KEY) para identificar de forma única cada registro.

Se utilizaron claves foráneas (FOREIGN KEY) para relacionar las tablas de dueños, mascotas, veterinarios y citas.

Se seleccionó ON DELETE RESTRICT para evitar la eliminación accidental de registros relacionados.

Se seleccionó ON UPDATE CASCADE para que los cambios en las claves principales se actualicen automáticamente en las tablas relacionadas, manteniendo la consistencia de los datos.