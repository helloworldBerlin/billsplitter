var fs = require("fs");

module.exports.saveData = (data, id) => {
    function makeID(data){

    }

    if(id == ""){
        id = makeID(data);
    }

    return id;
}

module.exports.sendData = (id) => {
    return "TEST";
}
