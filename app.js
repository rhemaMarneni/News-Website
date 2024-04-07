const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//templating engine
app.set('views','./src/views') 
app.set('view engine', 'ejs')

//using body-parser
app.use(bodyParser.urlencoded({extended : true}))

//routes
const newsRouter = require('./src/routes/news')
app.use("/",newsRouter)
app.use("/article",newsRouter)
app.use("/business",newsRouter)
app.use("/entertainment",newsRouter)
app.use("/health",newsRouter)
app.use("/science",newsRouter)
app.use("/sports",newsRouter)
app.use("/technology",newsRouter)

//listen on port 3000
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})