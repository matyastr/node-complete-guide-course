const express = require('express');

const app = express();

// app.use((req,res,next)=>{
//     console.log('MW 1');
//     next();
// })


// app.use((req,res,next)=>{
//     console.log('MW 2');
//     res.send('<h1>My App</h1>')
//     res.end();
// })

app.use('/users', (req, res)=>{
    console.log('Pg 1');
    res.send('<h1>Users Page</h1>')
})


app.use('/', (req, res)=>{
    console.log('Pg 2');
    res.send('<h1>Home page</h1>')
    res.end();
})

app.listen(3000);