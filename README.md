# Json Style

A Json Response module for ExpressJS. Used by [Red Carpet Solutions](https://github.com/redcarpetsolutions) To standardize Json Responses from the server

## Installation
```bash
npm i -S rcs-jsonstyle
```

## How to Use

This Module only works with ExpressJS.
Once you have your ExpressJS Application,
It's actually fairly simple:

```javascript
const express = require('express');
var app = express();
// Standard express App Declaration


const rcsres = require('rcs-jsonstyle');
// Require the module



//Write your standart ExpressJS Middleware
app.get('/someroutes',(req,res)=>{
    var data = ImportFromDatabase() // Dummy Function
    if(data){
        rcsres.json(res, data); // Pass in the response and the data
        // And You're Done
    } else {
        rcsres.error(res, "SOME ERROR MESSAGE"); // Send an Error response
        // Error response have status code 500 and a diffrent format
    }
});

```

> you can check the modules/res.module.js file to see all the responses available (We covered the most frequent ones)


## Red Carpet Solutions

We're a Company What do we do!

This project is backed By [redcarpetsolutions](https://github.com/redcarpetsolutions)

## About the Author
I'm Khaled Romdhane but mostly known as heiyuki.
My handle is : [@heiyukidev](https://github.com/heiyukidev).

I Work at this amazing Company [@redcarpetsolutions](https://github.com/redcarpetsolutions) don't hesitate to go check us out.
