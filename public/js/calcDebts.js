function rechne(){
    function Person(name, spend, perc, summe){
        this.name = name;
        this.spend = parseInt(spend);
        this.perc = parseInt(perc);
        this.soll = summe.Value * this.perc/100;
        this.amount = this.spend - this.soll;
    }

    var sum = {Value: 0};
    var persons = [];

    var persInput = document.getElementById("rows").childNodes;

    for(let i = 0; i < persInput.length; i++){
        sum.Value += parseInt(persInput[i].childNodes[1].value);
        persons.push(new Person(persInput[i].childNodes[0].data, persInput[i].childNodes[1].value, persInput[i].childNodes[3].value, sum));
    }

    function calcDebts(differentials) {
        var res = document.getElementById("answer");
        res.innerHTML = "";

        const underspenders = differentials.filter(d => d.amount < 0);
        const overspenders = differentials.filter(d => d.amount > 0);
        const rightonspenders = differentials.filter(d => d.amount === 0);

        for (let ros of rightonspenders) {
            res.innerHTML += `${ros.name} bekommt nichts. <br/>`;
        }

        for (let us of underspenders) {
            for (let os of overspenders) {
                res.innerHTML += `${us.name} schuldet ${os.name} ${Number(Math.min(-us.amount, os.amount)).toFixed(2)} € <br/>`;
            }
        }
    }

    console.log(persons);
    calcDebts(persons);
}
