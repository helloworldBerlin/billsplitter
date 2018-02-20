function saveData(){
    function Person(name, spend, perc){
        this.name = name.substring(2, name.length).trim();
        this.spend = parseInt(spend);
        this.perc = parseInt(perc);
    }

    var id = document.getElementById("enterID").value;
    var data = [];
    var persInput = document.getElementById("rows").childNodes;
    for(let i = 0; i < persInput.length; i++){
        data.push(new Person(persInput[i].childNodes[0].data, persInput[i].childNodes[1].value, persInput[i].childNodes[3].value));
    }

    fetch("/data/save?id=" + id, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    }).then(res => {
        return res.text();
    }).then(data => {
        console.log(data);
    });
}

function getData(){
    fetch("/data/get?id=" + id, {
        method: "GET"
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(JSON.parse(data));
    });
}
