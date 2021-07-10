const morgan = require('morgan');
const app = require('./app/app');
const CONFIG = require('./app/config/config');
const Base = require('./app/config/Base');
const path = require('path');


Base.connect();

app.listen(CONFIG.PORT, function(error){
    if(error) return console.log(error);
    console.log(`El servidor funciona en el puerto ${CONFIG.PORT}`);
});

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);


// app.use(require('./app/rutas/RutaDulces'));

app.use(morgan('dev'));
