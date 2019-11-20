const path = require ('path');

exports.getConstants = function(){
    console.log("__filename:" + __filename);
    console.log("__dirname:" + __dirname);
}

exports.getBaseName = function(){
    let BasePath = path.basename(__filename);
    console.log(BasePath);
}

exports.getDirName = function (file){
    let DirName = path.dirname(file)
    console.log("dirname: " + DirName)
}

exports.getExtName = function (file){
    let ExtName = path.extname(file)
    console.log("extname: " + ExtName);
}