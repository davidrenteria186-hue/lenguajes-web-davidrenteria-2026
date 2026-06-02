# Actividad 1 - Unidad 3

## Descripción del proyecto

Se desarrolló una base de datos para la gestión de una clínica veterinaria. El sistema permite almacenar información de los dueños de mascotas, las mascotas registradas, los veterinarios disponibles y las citas médicas realizadas. El objetivo es mantener la información organizada y garantizar la integridad de los datos mediante el uso de claves primarias y claves foráneas.

## Justificación de los tipos de datos

### INT AUTO_INCREMENT

Se utilizó para los identificadores principales de cada tabla debido a que permite generar valores únicos automáticamente, evitando duplicidades y facilitando las relaciones entre tablas.

### VARCHAR

Se seleccionó para almacenar nombres, correos electrónicos, teléfonos, especialidades y licencias porque estos datos contienen caracteres alfanuméricos y su longitud puede variar entre registros.

### DATE

Se empleó para registrar la fecha de nacimiento de las mascotas, ya que permite almacenar únicamente la fecha sin incluir horas o minutos innecesarios.

### DATETIME

Se utilizó en las citas para registrar tanto la fecha como la hora exacta de atención, permitiendo un mejor control de la agenda veterinaria.

### DECIMAL(10,2)

Se eligió para almacenar los costos de las consultas debido a que proporciona precisión en valores monetarios y evita errores de redondeo que pueden ocurrir con otros tipos numéricos.

### TEXT

Se implementó para el campo diagnóstico porque la cantidad de información puede variar considerablemente y requiere almacenar descripciones extensas cuando sea necesario.

## Integridad referencial

La integridad referencial garantiza que las relaciones entre las tablas permanezcan consistentes y que no existan registros huérfanos dentro de la base de datos.

### Claves primarias (PRIMARY KEY)

Cada tabla cuenta con una clave primaria que identifica de manera única cada registro. Esto facilita la búsqueda, actualización y eliminación de información.

### Claves foráneas (FOREIGN KEY)

Las claves foráneas permiten relacionar las entidades del sistema:

- Un dueño puede tener varias mascotas.
- Una mascota puede tener varias citas.
- Un veterinario puede atender múltiples citas.

Estas relaciones aseguran la coherencia de los datos almacenados.

## Reglas de actualización y eliminación

### ON UPDATE CASCADE

Esta regla permite que, si una clave primaria cambia, las claves relacionadas se actualicen automáticamente en las demás tablas. De esta manera se evita la pérdida de integridad entre los registros relacionados.

### ON DELETE RESTRICT

Se recomienda esta regla para impedir la eliminación de registros que poseen dependencias activas. Por ejemplo, no sería conveniente eliminar un dueño si existen mascotas asociadas o eliminar una mascota que tenga citas registradas.

## Beneficios del diseño

- Evita la duplicación de información.
- Facilita el mantenimiento de los datos.
- Mejora la organización de la información veterinaria.
- Garantiza la consistencia de las relaciones entre tablas.
- Permite futuras ampliaciones del sistema.
- Optimiza las consultas y la administración de registros.

## Conclusión

La estructura diseñada cumple con los principios básicos de normalización y modelado relacional. El uso adecuado de claves primarias, claves foráneas y tipos de datos específicos permite construir una base de datos sólida, organizada y preparada para gestionar eficientemente la información de una clínica veterinaria.