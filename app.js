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
app.get('/customActivity.js', (req, res) => {
    res.redirect('js/customActivity.js');
});

// Return JSON
app.get('/config.json', (req, res) => {
    res.status(200).json(configJSON(req));
});

// Save
app.post('/save', (req, res) => {
    console.log(res.status(200).json());
});

// Publish
app.post('/publish', (req, res) => {
    console.log(res.status(200).json());
});

// Validate
app.post('/validate', (req, res) => {
    console.log(res.status(200).json());
});

// Stop
app.post('/stop', (req, res) => {
    console.log(res.status(200).json());
});

// Execute
app.post('/execute', (req, res) => {
    const request = req.body;
    var url = 'https://en1mbrh7056kqcg.m.pipedream.net';

    function getInArgument(x) {
        if (request && request.inArguments) {
            for (let i = 0; i < request.inArguments.length; i++) {
                let e = request.inArguments[i];
    
                if (x in e) {
                    return e[x];
                }
            }
        }
    }

    const payloadAxios = request;

    payloadAxios    
        .put(url, payloadAxios)
        .then(resp => {
            return res.status(200).json(resp.data);
        })
        .catch(error => {
            console.error(error);
            return res.status(500).json(error);
        })
});




const port = process.env.PORT || 3333;

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening at port ${port}`);
})