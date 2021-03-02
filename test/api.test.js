
// import test from 'jest';
// import puppeteer from 'puppeteer';
const { GET, POST } = require('./src/restClientPuppeteer');
let __URL__, headers, body, responseText, responseJSON;

async function db () {
    const url = 'mongodb://root:123456@localhost:27017';
    try {
        const MongoClient = require('mongodb').MongoClient;
        const client = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        // console.log('Testing MongoClient is conected');
        return client.db('simpleJWT');
    } catch (e) {
        console.log(e);
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

sleep(500);

const DecodeJWT = token => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
};

const jwt_decode = require('jwt-decode');




const jwt = require('jsonwebtoken');
const config = require('../src/config');





//             88        88  88888888ba   88                       
//             88        88  88      "8b  88                       
//             88        88  88      ,8P  88                       
//             88        88  88aaaaaa8P'  88                       
//             88        88  88""""88'    88                       
//             88        88  88    `8b    88                       
//             Y8a.    .a8P  88     `8b   88                       
//              `"Y8888Y"'   88      `8b  88888888888              
                                                                
// 888888888888                                      888888888888  

__URL__ = 'https://domain.tld';
__URL__ = 'http://127.0.0.1:3000';













// 88888888ba                           88                                               
// 88      "8b                          ""               ,d                              
// 88      ,8P                                           88                              
// 88aaaaaa8P'  ,adPPYba,   ,adPPYb,d8  88  ,adPPYba,  MM88MMM  8b,dPPYba,   ,adPPYba,   
// 88""""88'   a8P_____88  a8"    `Y88  88  I8[    ""    88     88P'   "Y8  a8"     "8a  
// 88    `8b   8PP"""""""  8b       88  88   `"Y8ba,     88     88          8b       d8  
// 88     `8b  "8b,   ,aa  "8a,   ,d88  88  aa    ]8I    88,    88          "8a,   ,a8"  
// 88      `8b  `"Ybbd8"'   `"YbbdP"Y8  88  `"YbbdP"'    "Y888  88           `"YbbdP"'   
//                          aa,    ,88                                                   
//                           "Y8bbdP"                                                    
                                                                                      
// 88        88                                                  88                      
// 88        88                                                  ""                      
// 88        88                                                                          
// 88        88  ,adPPYba,  88       88  ,adPPYYba,  8b,dPPYba,  88   ,adPPYba,          
// 88        88  I8[    ""  88       88  ""     `Y8  88P'   "Y8  88  a8"     "8a         
// 88        88   `"Y8ba,   88       88  ,adPPPPP88  88          88  8b       d8         
// Y8a.    .a8P  aa    ]8I  "8a,   ,a88  88,    ,88  88          88  "8a,   ,a8"         
//  `"Y8888Y"'   `"YbbdP"'   `"YbbdP'Y8  `"8bbdP"Y8  88          88   `"YbbdP"'          



//  .only
//  .skip
test('Endpoint POST /signup, registro de usuario', async () => {
    
    // Enviando peticion 
    headers = {
        'Content-Type': 'application/json'
    }
    const date = parseInt(Date.now()/1000);
    const username = `natanael ${date}`;
    body = {
        "username": username,
        "email": `hidromagnetismo${date}@gmail.com`,
        "password": "123456",
    }
    responseText = await POST(`${__URL__}/signup`, headers, body);
    responseJSON = JSON.parse(responseText);
    
    // Chequeando respuesta
    expect(responseText).toContain('auth');
    expect(responseJSON.auth).toBeTruthy();
    expect(responseJSON.token).toBeDefined();

    // Chequeando que el token esté siendo enviando en la respuesta
    // console.log(responseJSON.token);
    // console.log(DecodeJWT(responseJSON.token));
    // console.log(jwt_decode(responseJSON.token));
    // console.log(jwt_decode(responseJSON.token).id);
    expect(jwt_decode(responseJSON.token).id).toBeDefined();

    // Verificando que el registro se haya realizado en la base de datos
    const db_result = await (await db()).collection('users').findOne({username: username});
    expect(db_result.username).toBe(username);
    
    // Chequeando que el ID en la base de datos sea el mismo que el guardado el en Token
    expect(db_result._id.toString()).toBe(jwt_decode(responseJSON.token).id);
    
});














                                                                                                    
// 88888888ba                           88                                                  "8a        
// 88      "8b                          ""               ,d                                   "8a      
// 88      ,8P                                           88                                     "8a    
// 88aaaaaa8P'  ,adPPYba,   ,adPPYb,d8  88  ,adPPYba,  MM88MMM  8b,dPPYba,   ,adPPYba,            "8a  
// 88""""88'   a8P_____88  a8"    `Y88  88  I8[    ""    88     88P'   "Y8  a8"     "8a           a8"  
// 88    `8b   8PP"""""""  8b       88  88   `"Y8ba,     88     88          8b       d8         a8"    
// 88     `8b  "8b,   ,aa  "8a,   ,d88  88  aa    ]8I    88,    88          "8a,   ,a8"       a8"      
// 88      `8b  `"Ybbd8"'   `"YbbdP"Y8  88  `"YbbdP"'    "Y888  88           `"YbbdP"'      a8"        
//                          aa,    ,88                                                                 
//                           "Y8bbdP"                                                                  
                                                                                                    
// 8b           d8                                                                                     
// `8b         d8'                                                                                     
//  `8b       d8'                                                                                      
//   `8b     d8'  ,adPPYba,  8b,dPPYba,                                                                
//    `8b   d8'  a8P_____88  88P'   "Y8                                                                
//     `8b d8'   8PP"""""""  88                                                                        
//      `888'    "8b,   ,aa  88                                                                        
//       `8'      `"Ybbd8"'  88                                                                        
                                                                                                    
                                                                                                    
                                                                                                    
// 88888888ba                             ad88  88  88                                                 
// 88      "8b                           d8"    ""  88                                                 
// 88      ,8P                           88         88                                                 
// 88aaaaaa8P'  ,adPPYba,  8b,dPPYba,  MM88MMM  88  88                                                 
// 88""""""'   a8P_____88  88P'   "Y8    88     88  88                                                 
// 88          8PP"""""""  88            88     88  88                                                 
// 88          "8b,   ,aa  88            88     88  88                                                 
// 88           `"Ybbd8"'  88            88     88  88                                                 

//  .only
//  .skip
describe('Endpoint GET /me, perfil del usuario luego de haberse registrado', () => {

    
    //.only
    //.skip
    it('Si no se envia el token', async () => {
        headers = {
            'Content-Type': 'application/json'
        }
        responseText = await GET(`${__URL__}/me`, headers);
        responseJSON = JSON.parse(responseText);
        
        // Confirmando respuesta
        expect(responseJSON.auth).toBeFalsy();
        expect(responseJSON.message).toBe('No token provided');
    });


    //.only
    //.skip
    it('Suponiendo que alquien hackeó y conoce el secret del token pero no el ID del usuario', async () => {
        // Creando el token con el secret
        const token = jwt.sign({id: '603b4b440edc3e49b200d349'}, config.secret, {
            expiresIn: 60 * 60 * 24
        });
        headers = {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
        responseText = await GET(`${__URL__}/me`, headers);
        expect(responseText).toContain('No user found');
    });


    //.only
    //.skip
    it('Suponiendo que alquien hackeó y conoce el secret del token y el ID del usuario', async () => {
        
        // Hackeando el ID 
        headers = {
            'Content-Type': 'application/json'
        }
        const date = parseInt(Date.now()/1000);
        body = {
            "username": `Diosymar ${date}`,
            "email": `hidromagnetismo${date}@gmail.com`,
            "password": "123456",
        }
        responseText = await POST(`${__URL__}/signup`, headers, body);
        responseJSON = JSON.parse(responseText);

        const ID_Hackeado = jwt_decode(responseJSON.token).id

        // Creando el token con el secret y el ID hackeado
        const token = jwt.sign({id: ID_Hackeado}, config.secret, {
            expiresIn: 60 * 60 * 24
        });

        // Realizando petición con el token construido por el hacker
        headers = {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
        responseText = await GET(`${__URL__}/me`, headers);
        responseJSON = JSON.parse(responseText);

        // Confirmando respuesta
        expect(responseJSON._id).toBeDefined();
        expect(responseJSON.username).toBeDefined();
        expect(responseJSON.email).toBeDefined();
    
    });

    
    //.only
    //.skip
    it('Si se envia un token correcto', async () => {
        
        // Obteniendo el Token 
        headers = {
            'Content-Type': 'application/json'
        }
        const date = parseInt(Date.now()/1000);
        const username = `Diosymar ${date}`;
        body = {
            "username": username,
            "email": `diosy${date}@gmail.com`,
            "password": "123456",
        }
        responseText = await POST(`${__URL__}/signup`, headers, body);
        responseJSON = JSON.parse(responseText);

        // Realizando petición con el token obtenido
        headers = {
            'Content-Type': 'application/json',
            'x-access-token': responseJSON.token
        }
        responseText = await GET(`${__URL__}/me`, headers);
        responseJSON = JSON.parse(responseText);

        // Confirmando respuesta
        expect(responseJSON._id).toBeDefined();
        expect(responseJSON.username).toBeDefined();
        expect(responseJSON.username).toBe(username);
        expect(responseJSON.email).toBeDefined();
    
    });


});













                                                       
// 88                                    88               
// 88                                    ""               
// 88                                                     
// 88           ,adPPYba,    ,adPPYb,d8  88  8b,dPPYba,   
// 88          a8"     "8a  a8"    `Y88  88  88P'   `"8a  
// 88          8b       d8  8b       88  88  88       88  
// 88          "8a,   ,a8"  "8a,   ,d88  88  88       88  
// 88888888888  `"YbbdP"'    `"YbbdP"Y8  88  88       88  
//                           aa,    ,88                   
//                            "Y8bbdP"                    


//  .only
//  .skip
test.skip('Endpoint POST /signin, login', async () => {
    
    const date = parseInt(Date.now()/1000);
    
    const email = `creacioneskeila${date}@gmail.com`;
    const password = 'ArturoMiGranAmor';
    
    // Guardando el usuario en MongoDB
    headers = {
        'Content-Type': 'application/json'
    }
    body = {
        "username": `Keila ${date}`,
        email,
        password,
    }
    responseText = await POST(`${__URL__}/signup`, headers, body);
    responseJSON = JSON.parse(responseText);

    const ID_Hackeado = jwt_decode(responseJSON.token).id

    headers = {
        'Content-Type': 'application/json'
    }
    
    body = {
        email,
        password
    } 
    
    responseText = await POST(`${__URL__}/signin`, headers, body);

    expect(responseText).toBe('"signin"');
    
});







                                                                     
// 88                                    88                  "8a        
// 88                                    ""                    "8a      
// 88                                                            "8a    
// 88           ,adPPYba,    ,adPPYb,d8  88  8b,dPPYba,            "8a  
// 88          a8"     "8a  a8"    `Y88  88  88P'   `"8a           a8"  
// 88          8b       d8  8b       88  88  88       88         a8"    
// 88          "8a,   ,a8"  "8a,   ,d88  88  88       88       a8"      
// 88888888888  `"YbbdP"'    `"YbbdP"Y8  88  88       88     a8"        
//                           aa,    ,88                                 
//                            "Y8bbdP"                                  
                                                                     
// 8b           d8                                                      
// `8b         d8'                                                      
//  `8b       d8'                                                       
//   `8b     d8'  ,adPPYba,  8b,dPPYba,                                 
//    `8b   d8'  a8P_____88  88P'   "Y8                                 
//     `8b d8'   8PP"""""""  88                                         
//      `888'    "8b,   ,aa  88                                         
//       `8'      `"Ybbd8"'  88                                         
                                                                     
                                                                     
                                                                     
// 88888888ba                             ad88  88  88                  
// 88      "8b                           d8"    ""  88                  
// 88      ,8P                           88         88                  
// 88aaaaaa8P'  ,adPPYba,  8b,dPPYba,  MM88MMM  88  88                  
// 88""""""'   a8P_____88  88P'   "Y8    88     88  88                  
// 88          8PP"""""""  88            88     88  88                  
// 88          "8b,   ,aa  88            88     88  88                  
// 88           `"Ybbd8"'  88            88     88  88                  
                                                                     
                                                                     

//  .only
//  .skip
test.skip('Endpoint GET /me, perfil del usuario luego de haberse logueado', async () => {
    
    headers = {
        'Content-Type': 'application/json'
    }
    
    responseText = await GET(`${__URL__}/me`, headers);
    responseJSON = JSON.parse(responseText);

    // Confirmando respuesta
    expect(responseJSON._id).toBeDefined();
    expect(responseJSON.username).toBeDefined();
    expect(responseJSON.email).toBeDefined();

});








