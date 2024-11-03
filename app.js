const express = require('express');
const app = express();
const {NotFoundErr, ErrHandler} = require('./utils/errHandling');
const { Allroutes } = require('./router/index.routes');
const { default: mongoose } = require('mongoose');
const PORT= 3000;
mongoose.connect('mongodb://localhost:27017/authorization', {}).then(() => {
    console.log(`Connected to MongoDb .. `);
}).catch((err) => {
    console.log(err.message);
})
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(Allroutes);
app.use(NotFoundErr);
app.use(ErrHandler);

app.listen(PORT, () => {
    console.log(`server is running on PORT : ${PORT} : http://localhost:${PORT}`);
})