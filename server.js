const app = require('./app');
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")
// Handling uncought Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Server has been crashed due to uncought Exception`);
    process.exit(1);
})
//config
dotenv.config({
    path:"backend/.env"
})
// connecting with database
connectDatabase()
// create server
const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`)
})
// Unhandled Promise Rejection
process.on("UnhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Server has been crashed due to unhandled Promise rejection`);
    server.close(()=>{
        process.exit(1);
    });

})
// yarn add bcryptjs jsonwebtoken validator nodemailer cookie-parser body-parser