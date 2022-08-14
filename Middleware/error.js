const ErrorHandler = require('../utils/errorHandler')
module.exports = (err,req,res,next)=>{
err.statusCode = err.statusCode || 500;
err.message = err.message ||"Internal server Error";
// wrong Mongodb is error
if(err.name==="CastError"){
    const message = `Resource not found.Invalid:${err.path}`;
    err = new ErrorHandler(message,400);
}
// Mongoose dublicate key error
if(err.code===11000){
    const message = `Dublicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message,400);
}
// Wrong jwt error
if(err.code==="jsonwebTokenError"){
    const message = `Json web token is invalid, try again`;
    err = new ErrorHandler(message,400);
}
//  jwt expire error
if(err.code==="jsonwebTokenExpire"){
    const message = `Json web token is Expired, try again`;
    err = new ErrorHandler(message,400);
}
res.status(err.statusCode).json({
    success:false,
    error:err.message,

});
};