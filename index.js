const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5050

app.use(cors());
app.use(express.json());

app.use('/api/', (_, res) =>{
    res.json({
        data: "API is connected"
    })
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})

// console.log('hi');
// console.log(__dirname); //folder name
// console.log(__filename); //file name
// console.log(process.env.USER); //windows USERNAME //user
// console.log(process.env.PORT); //port in use
// console.log(process.env.GREET);
