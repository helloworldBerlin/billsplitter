function rechne(){
    function Person(name, spend, perc){
        this.name = name;
        this.spend = parseInt(spend);
        this.perc = parseInt(perc);
        this.soll = 0;
        this.amount = 0;
    }

    function calcSollAm(pers, sum){
        for(let p of pers){
            p.soll = sum * p.perc/100;
            p.amount = p.spend - p.soll;
        }
    }

    function calcDebts(differentials) {
        var res = document.getElementById("answer");
        res.innerHTML = "";

        const underspenders = differentials.filter(d => d.amount < 0);
        const overspenders = differentials.filter(d => d.amount > 0);
        const rightonspenders = differentials.filter(d => d.amount === 0);

        for (let ros of rightonspenders) {
            console.log(1);
            res.innerHTML += `<div>${ros.name} bekommt nichts.</div> <br/>`;
        }

        for (let us of underspenders) {
            for (let os of overspenders) {
                res.innerHTML += `<div>${us.name} schuldet ${os.name} ${Number(Math.min(-us.amount, os.amount)).toFixed(2)} €</div> <br/>`;
            }
        }
    }

    var sum = 0;
    var persons = [];

    var persInput = document.getElementById("rows").childNodes;

    for(let i = 0; i < persInput.length; i++){
        sum += parseInt(persInput[i].childNodes[1].value);
        persons.push(new Person(persInput[i].childNodes[0].data, persInput[i].childNodes[1].value, persInput[i].childNodes[3].value, sum));
    }

    calcSollAm(persons, sum);

    calcDebts(persons);
}
