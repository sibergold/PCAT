const express = require('express');
const fileUpload=require('express-fileupload');
const methodOverride=require('method-override');
const ejs=require('ejs');
const photoController= require('./controllers/photoControllers.js')
const pageController = require('./controllers/pageController')
const { default: mongoose } = require('mongoose');

const app = express();

// CONNECT DB
mongoose.connect('mongodb://localhost/pcat-db',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  
})

//TEMPLATE ENGINE
app.set("view engine","ejs");

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method',{
  methods:['POST','GET']
}));

//ROUTES
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);
app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

