var point = new Object();
var user = 6;

function dataProcessor(data) {
    console.log(data);
    user = parseInt(data.substring(0,1));
    console.log(user);
    point = data.substring(2);
    console.log(point);
}

// default position 600, 350
function getPoint(){
    return point;
}

function getUser(){
    return user;
}

module.exports.dataProcessor = dataProcessor;
module.exports.getPoint = getPoint;
module.exports.getUser = getUser;