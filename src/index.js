
const app = require('./app');
require('./database');

var port = 3000;

async function init () {
    await app.listen(port);
    console.log(`Serve on port ${port}`);
}

init();
