const express = require('express'); 
const mongoose = require("mongoose");
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');


const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');
const nav = require('./src/data/nav');

const app = new express; 
const PORT = process.env.PORT || 5000

app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 


mongoose.connect('mongodb+srv://saranya:saranya@cluster0.j1jik.mongodb.net/Libraryapp?retryWrites=true&w=majority')


app.get('/',function(req,res){

    res.render('index',{});
    
});



app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
})


app.listen(PORT,()=>{
    console.log(`Server Ready on ${PORT}`);
});