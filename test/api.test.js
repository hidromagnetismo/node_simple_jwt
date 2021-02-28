
// import test from 'jest';
// import puppeteer from 'puppeteer';
const { GET, POST } = require('./src/restClientPuppeteer');
let __URL__, headers, body, response;













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




test('Endpoint POST /signup, registro de usuario', async () => {
    
    headers = {
        'Content-Type': 'application/json'
    }
    
    body = {
        "email": "hidromagnetismo@gmail.com",
        "password": "123456",
        "nombre": "Natanael",
        "apellidos": "Liscano",
        "fechaNacimiento": "1989-03-23T05:00:00Z"
    }
    
    response = await POST(`${__URL__}/signup`, headers, body);

    expect(response).toBe('"signup"');
    
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



test('Endpoint POST /signin, login', async () => {
    
    headers = {
        'Content-Type': 'application/json'
    }
    
    body = {
        "email": "hidromagnetismo@gmail.com",
        "password": "123456"
    }
    
    response = await POST(`${__URL__}/signin`, headers, body);

    expect(response).toBe('"signin"');
    
});









                                                     
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


test('Endpoint GET /me, perfil del usuario', async () => {
    
    headers = {
        'Content-Type': 'application/json'
    }
    
    response = await GET(`${__URL__}/me`, headers);

    expect(response).toBe('"me"');
    
});







