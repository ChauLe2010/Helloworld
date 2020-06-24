function drawGameBoard(size){
    let string = "<table border='1' width='50%'>";
    for(let i=0;i<size;i++){
        string += "<tr>";
        for(let j=0;j<size;j++){
            string += "<td>0</td>";
        }
        string += "</tr>";

    }
    string += "</table>";
    document.write(string);
}
