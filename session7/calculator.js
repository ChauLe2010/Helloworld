let flag=0;
function showExp(value) {
    if(flag==1)
        document.getElementById("result").value="";
    document.getElementById("result").value+=value;
    flag=0;
}
function calculate() {
    document.getElementById("result").value=eval(document.getElementById("result").value);
    flag=1;
}
