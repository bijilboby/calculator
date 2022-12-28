function call(val){
    var a=val;
    document.getElementById("screen").value+=a;
}
function clr(){
    document.getElementById("screen").value='';
}
function equal(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}