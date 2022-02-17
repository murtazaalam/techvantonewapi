const dotEnv = require('dotenv');
dotEnv.config();
const express = require('express');
const connect = require('./config/db.config');
const authRoutes = require('./routes/auth.routes');
const mainRoutes = require('./routes/main.routes');

const cors = require('cors');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());  
 

// app.all('/*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });
//pp.options('*', cors());
// const corsOptions ={
//     origin:'http://localhost:4000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

app.get('/', (req,res)=>{
    return res.send('Server Started');
})

app.use("/auth", authRoutes);
app.use("/", mainRoutes);
app.listen(port,()=>{
    console.log("Listening ",port);
    connect((res) => {
        if(res) return console.log(res)
        console.log("connected");
    })
});
