const pathFunctions = require('./pathFunctions');

console.log ('app: Live server');

pathFunctions.getConstants();

pathFunctions.getBaseName(__filename);
pathFunctions.getBaseName('/home/user/index.js');

pathFunctions.getDirName(__filename);
pathFunctions.getDirName('/home/user/index.js');


pathFunctions.getExtName(__filename); //.js
pathFunctions.getExtName("home/user/Readme.md");
pathFunctions.getExtName("home/user/Readme.png");
pathFunctions.getExtName("home/user/style.css");



