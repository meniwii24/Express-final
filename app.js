const express = require('express')
const app = express()
const port = 3000

// setting the route and corresponding response
app.get('/', (req, res) => {
    res.send(`
    <nav>
    <div>
        <a href="http://localhost:3000/">回到首頁</a>
    </div>
    <div>
    <a href="http://localhost:3000/about">About</a>
    <a href="http://localhost:3000/portfolio">Portfolio</a>
    <a href="http://localhost:3000/contact">Contact</a>
    <div>
    </nav>
    <h2> 首頁 </h2>
    <style>
    nav {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    a {
        text-decoration: none;
        background-color: #DCDCDC;
        color: black;
        border-radius: 5px;
        padding: 5px 10px;
    }
    </style>
    `)
  })

app.get('/about', (req, res) => {
    res.send(`
    <nav>
    <div>
        <a href="http://localhost:3000/">回到首頁</a>
    </div>
    <div>
    <a href="http://localhost:3000/about" style="background-color:#696969; color:white;">About</a>
    <a href="http://localhost:3000/portfolio">Portfolio</a>
    <a href="http://localhost:3000/contact">Contact</a>
    <div>
    </nav>
    <h2> About </h2>
    <style>
    nav {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    a {
        text-decoration: none;
        background-color: #DCDCDC;
        color: black;
        border-radius: 5px;
        padding: 5px 10px;
    }
    </style>
    `)
  })
  
app.get('/portfolio', (req, res) => {
    res.send(`
    <nav>
    <div>
        <a href="http://localhost:3000/">回到首頁</a>
    </div>
    <div>
    <a href="http://localhost:3000/about">About</a>
    <a href="http://localhost:3000/portfolio" style="background-color:#696969; color:white;">Portfolio</a>
    <a href="http://localhost:3000/contact">Contact</a>
    <div>
    </nav>
    <h2> Portfolio </h2>
    <style>
    nav {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    a {
        text-decoration: none;
        background-color: #DCDCDC;
        color: black;
        border-radius: 5px;
        padding: 5px 10px;
    }
    </style>
    `)
  })

app.get('/contact', (req, res) => {
    res.send(`
    <nav>
    <div>
        <a href="http://localhost:3000/">回到首頁</a>
    </div>
    <div>
    <a href="http://localhost:3000/about">About</a>
    <a href="http://localhost:3000/portfolio">Portfolio</a>
    <a href="http://localhost:3000/contact" style="background-color:#696969; color:white;">Contact</a>
    <div>
    </nav>
    <h2> Contact </h2>

    <style>
    nav {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    a {
        text-decoration: none;
        background-color: #DCDCDC;
        color: black;
        border-radius: 5px;
        padding: 5px 10px;
    }
    </style>
    `)
  })

  // Listen the server when it started
  app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
  })