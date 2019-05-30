const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3999;

app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });
app.use(bodyParser.json());
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   console.log('Request to /calendar Endpoint!');
//   res.end();
// });


app.listen(port, () => console.log(`Calendar Component listening on port ${port}!`));