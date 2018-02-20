var fs = require("fs");

module.exports.saveData = (data, id) => {
    function makeID(data){
        var id = "";

        for(var i = 0; i < data.length; i++){
            id += (data[i].name.substring(0, 1) + i);
        }
        return id;
    }

    function saveFile(id, data){
        var today = new Date();
        var d = today.getDate();
        var m = today.getMonth() + 1;
        var y = today.getFullYear();
        today = d + "/" + m + "/" + y;

        var saveData = {
            date: today,
            data: data
        };

        try {
            fs.appendFileSync("./db/" + id + ".json", JSON.stringify(data, null, 4));
            return " Data saved successfully."
        } catch(e){
            return " Failed to append data to the file. " + e;
        }
    }

    var resString = "";

    if(id == ""){
        id = makeID(data);
        try {
            fs.writeFileSync("./db/" + id + ".json");
            resString += "File created with ID: " + id + ".";
        } catch(e){
            return "Failed to create new file. " + e;
        }

        resString += saveFile(id, data);
    } else {
        resString += saveFile(id, data);
    }
    //write data to file with timestamp

    return resString;
}

module.exports.sendData = (id) => {
    return "TEST";
}
