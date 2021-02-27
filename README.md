
# Node simple JWT

Node simple JWT

## Initial config, connection MongoDB, nodemon, models, controllers, 3 endpoint and api.rest client vscode.

![Screenshot_2021-02-27_09-03-42](https://user-images.githubusercontent.com/6284869/109382942-4a9e6e80-78db-11eb-964a-2660592bf0ef.png)

# Proteger base de datos con autenticación

{ssh root_WebStore} ó {ssh root@134.209.66.168}
{mongo}
{use admin}
{db.createUser({ user:"root", pwd: "123456", roles:["clusterAdmin","readAnyDatabase","readWriteAnyDatabase","userAdminAnyDatabase","dbAdminAnyDatabase"] });}

Ctrl+D

{code /etc/mongod.conf}:
{sudo nano /etc/mongod.conf}:
{

security:
  authorization: enabled

setParameter:
  enableLocalhostAuthBypass: false

}

{sudo service mongod restart}
{sudo service mongod status}
{cd /tmp ; sudo rm mongodb-*.sock}




# Conectarse a mongoDB

### En local:
mongo:  {mongo --username root --password "123456"}
mongo:  {mongo "mongodb://root:123456@localhost:27017"}
robo3t: {mongodb://root:123456@localhost:27017} > From SRV 
                                                > Type: {Direct Connection} 
                                                > Name: {localhost} 
                                                > TLS {unchek Use TLS protocol} > Test > Save
golang: {mongodb://root:123456@localhost:27017}
{show databases}
{use admin}
{show collections}
{db.system.users.find().pretty()}
{use twittor
db.usuarios.find().pretty()}












### En Digital Ocean
mongo:  {mongo --host 134.209.66.168 --username root --password "123456"}
mongo:  {mongo "mongodb://root:123456@134.209.66.168:27017"}
robo3t: {mongodb://root:123456@134.209.66.168:27017}    > From SRV 
                                                        > Type: {Direct Connection} 
                                                        > Name: {Digital Ocean} 
                                                        > Address: {134.209.66.168}
                                                        > TLS {unchek Use TLS protocol} > Test > Save
golang: {mongodb://root:123456@134.209.66.168:27017}
{show databases}
{use admin}
{show collections}
{db.system.users.find().pretty()}
{use twittor
db.usuarios.find().pretty()}














### En mongodb.com
{mongo "mongodb+srv://cluster0.lji8t.mongodb.net/twittor" --username root --password "XDwJ2WgmXeLYCzUw"}
{mongo "mongodb+srv://root:XDwJ2WgmXeLYCzUw@cluster0.lji8t.mongodb.net/twittor"}
robo3t: {mongodb+srv://root:XDwJ2WgmXeLYCzUw@cluster0.lji8t.mongodb.net/twittor?retryWrites=true&w=majority}    > From SRV 
                                                                                                                > Name: {mongodb.com} > Test > Save
golang: {mongodb+srv://root:XDwJ2WgmXeLYCzUw@cluster0.lji8t.mongodb.net/twittor?retryWrites=true&w=majority}
{show databases}
{use admin}
{show collections}
{db.system.users.find().pretty()}
{use twittor
db.usuarios.find().pretty()}




# Crear una base de datos y un usuario para la misma.



Acceso:

mongo:  {mongo --username root --password "123456"}
mongo:  {mongo "mongodb://root:123456@localhost:27017"}

Crear Base de datos y usuario:

{use myWebStore}
{

db.createUser(
   {
      user: "root",
      pwd: "123456",
      roles: [ { role: "readWrite", db: "myWebStore" } ]
   }
)

}


