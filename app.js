const express = require('express');
const bodyParser = require('body-parser');

//connection db
require("./utils/database")
//end connect db

const {setStatics} = require('./utils/statics');
const adminRouter = require('./routes/adminRoute');
const indexRouter = require('./routes/indexRoute');


const app = express();

//body praser
app.use(bodyParser.urlencoded({extended: false}));

//template engine : ejs && view dir : views
app.set('view engine', 'ejs');
app.set("views", "views");

//statics files
setStatics(app);

app.use("/admin", adminRouter)

app.use(indexRouter);



app.listen(3000)