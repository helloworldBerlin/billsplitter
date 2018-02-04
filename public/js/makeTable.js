var numRows = 0;

function addRow(){
    var wrap = document.getElementById("rows");
    var name = document.getElementById("name").value;

    wrap.innerHTML += `<div id=${numRows}>
                          ${name} <input id="in" type="number"/>
                          Anteil <input id="pro" type="number step="0.01""/>
                          <button onclick="delRow(${numRows})">-</button><br/>
                        </div>`;
    document.getElementById("name").value = "";
    numRows++;
}

function delRow(nr){
    var elem = document.getElementById(nr);
    elem.parentNode.removeChild(elem);
}

function equalAmounts(){
    var rows = document.getElementById("rows").childNodes;

    for(let i = 0; i < rows.length; i++){
        rows[i].childNodes[3].value = (100/rows.length).toFixed(2);
    }
}

function clearRows(){
    var rows = document.getElementById("rows");
    while(rows.firstChild){
        rows.removeChild(rows.firstChild);
    }
}
