var fs = require("fs");

module.exports.saveData = (data, id) => {
    function prettyDate(x){
        x = x.toString();
        if(x.length == 1){
            x = "0" + x;
        }
        return x;
    }

    function makeDate(){
        var today = new Date();
        var s = prettyDate(today.getSeconds());
        var min = prettyDate(today.getMinutes());
        var h = prettyDate(today.getHours());
        var d = prettyDate(today.getDate());
        var m = prettyDate(today.getMonth() + 1);
        var y = today.getFullYear();
        today = h + ":" + min + ":" + s + "_" + d + "/" + m + "/" + y;

        return today;
    }

    function makeID(data){
        var id = "";

        for(var i = 0; i < data.length; i++){
            id += (data[i].name.substring(0, 1) + i);
        }
        return id;
    }

    function saveFile(id, data){
        try {
            oldData = JSON.parse(fs.readFileSync("./db/" + id + ".json", "utf-8"));
        } catch(e){
            return " ID doesn't exist. " + e;
        }

        oldData[makeDate()] = data;

        try {
            fs.writeFileSync("./db/" + id + ".json", JSON.stringify(oldData, null, 4));
            return " Data saved successfully.";
        } catch(e){
            return "Failed to write to file. " + e;
        }
    }

    var resString = "";

    if(id == ""){
        id = makeID(data);

        try {
            fs.writeFileSync("./db/" + id + ".json", JSON.stringify({id: id}));
            resString += "File created with ID: " + id + ".";
        } catch(e){
            return "Failed to create new file. " + e;
        }

        resString += saveFile(id, data);
    } else {
        resString += saveFile(id, data);
    }

    return resString;
}

module.exports.sendData = (id) => {
    return "TEST";
}
