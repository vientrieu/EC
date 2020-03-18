const express = require('express');
const app = express();
const expresshbs = require('express-handlebars');

const hbs = expresshbs.create(
    {
        extname: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: __dirname + '/views/layouts/',
        partialsDir: __dirname + '/views/partials/',
    }
);
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.get('/sync',(req,res)=>{
    let models = require('./models');
    models.sequelize.sync()
    .then(()=>{
        res.send('completed!');
    });
}); 
app.use('/',require('./routers/index.R'));
app.use('/category',require('./routers/category.R'));
app.use('/product',require('./routers/product.R'));
// app.get('/:page',(req, res)=>{
//     let page=req.params.page;
//     res.render(page);
// });
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),()=> {
    console.log(`Server is running at port ${app.get('port')}`);
});
