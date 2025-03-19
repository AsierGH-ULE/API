# API de Sensores y Lecturas

Este proyecto es una API REST desarrollada con Node.js, Express y MongoDB para gestionar sensores y sus lecturas. Permite realizar operaciones CRUD sobre sensores y lecturas, así como consultar lecturas en un rango de fechas.

## Características

- **Gestión de Sensores**: Crear, leer, actualizar y eliminar sensores.
- **Gestión de Lecturas**: Crear, leer y eliminar lecturas asociadas a sensores.
- **Consultas por Rango de Fechas**: Obtener lecturas de un sensor en un rango de fechas específico.
- **Scripts de Importación/Exportación**: Scripts para importar y exportar datos de ejemplo en MongoDB.
- **Colección de Postman**: Incluye una colección de Postman para probar los endpoints.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura la conexión a MongoDB en el archivo `config/db.js`.

4. (Opcional) Importa los datos de ejemplo:
   ```bash
   bash resources/import_data.sh
   ```

## Uso

1. Inicia el servidor:
   ```bash
   node server.js
   ```
2. Accede a la API en [http://localhost:9000](http://localhost:9000).

## Endpoints

### Sensores
- `GET /sensors`: Obtiene todos los sensores.
- `POST /sensors`: Crea un nuevo sensor.
- `GET /sensors/:id`: Obtiene un sensor por su ID.
- `PUT /sensors/:id`: Actualiza un sensor por su ID.
- `DELETE /sensors/:id`: Elimina un sensor por su ID.

### Lecturas
- `GET /readings/:sensorId`: Obtiene todas las lecturas de un sensor.
- `POST /readings`: Crea una nueva lectura.
- `DELETE /readings/:sensorId`: Elimina todas las lecturas de un sensor.
- `GET /readings/time/:sensorId?start=DD-MM-YYYY&end=DD-MM-YYYY`: Obtiene lecturas de un sensor en un rango de fechas.

### Ruta de Prueba
- `GET /test`: Verifica que el servidor está funcionando.

## Scripts Útiles

- **Importar datos**: `resources/import_data.sh`
- **Exportar datos**: `resources/export_data.sh`

## Dependencias

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Moment.js](https://momentjs.com/)
- [Mongo-Sanitize](https://github.com/vkarpov15/mongo-sanitize)
- [CORS](https://github.com/expressjs/cors)

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.