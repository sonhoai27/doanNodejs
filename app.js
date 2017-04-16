let express = require('express')
let app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

app.listen(process.env.PORT || 3000, ()=>console.log('Server Started'))

app.get('/', (req, res) => {
	res.render('home')
})
app.use('/album', require('./controllers/rt_album.js'))