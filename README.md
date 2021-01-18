# Sequelize
**Setup Basico Sequelize con Relaciones**

### Instrucciones
*Empezamos con los comandos para Inicializar el Proyecto NodeJS:*
    
    npm init -y
    npm i sequelize --save
    npm i mysql2  --save
    npm install sequelize-cli -g
## Crear Base de Datos
*Reemplazar Configuraciones en:*
        
        config/config.json
        src/database/connection.js
### Inicializar Sequelize
    sequelize init
### Crear Futuras Migraciones
    sequelize migration:generate --name create_tweets_table
### Correr las Migraciones
    sequelize db:migrate
### Correr NodeJS
    node app.js
    npm run XXX



