const express = require('express');
const app = express();
const configJSON = require('./public/config/config-json.js')
require('dotenv/config')

// Set engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

// Body parser
app.use(express.urlencoded({ extended: true }));


// Routes
app.get('/', (req, res) => {
    res.redirect('/index.html')
})

app.get('/index.html', (req, res) => {
    res.render('./index.ejs')
})

// customActivity
app.post('/customActivity.js', (req, res) => {
    res.redirect('js/customActivity.js')
});

// Return JSON
app.post('/config.json', (req, res) => {
    res.status(200).json(configJSON(req));
});

// Publish
app.post('/publish', (req, res) => {
    console.log(res.status(200).json());
});

// Execute
app.post('/execute', (req, res) => {
    const logger = arguments.log; // objeto logger passado como argumento
  
    // Verifica se a rota 'execute' está presente
    if (!arguments.execute) {
        logger.error('A rota "execute" não foi encontrada na requisição');
    }
    
    // Verifica se a rota 'stop' está presente
    if (!arguments.stop) {
        logger.error('A rota "stop" não foi encontrada na requisição');
    }
    
    // Verifica se a rota 'test' está presente
    if (!arguments.test) {
        logger.error('A rota "test" não foi encontrada na requisição');
    }
});




const port = process.env.PORT || 3333;

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening at port ${port}`);
})