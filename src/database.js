
const mongoose = require('mongoose');

// Acceso:

// mongo:  {mongo --username root --password "123456"}
// mongo:  {mongo "mongodb://root:123456@localhost:27017"}

// Crear Base de datos y usuario:

// {use simpleJWT}
// {

// db.createUser(
//    {
//       user: "root",
//       pwd: "123456",
//       roles: [ { role: "readWrite", db: "simpleJWT" } ]
//    }
// )

// }

const uri = 'mongodb://root:123456@localhost:27017/simpleJWT';
const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})  
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));
