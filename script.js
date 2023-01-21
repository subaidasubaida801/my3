function buttonclick(val){

    document.getElementById("screen").value+=val
    
    }
    
    function clearDisplay(){
    document.getElementById("screen").value=""
    }
    
    function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
    }
    
function backbutton(){
    
document.getElementById("screen")
var remove = number.value
remove = remove.slice(0,-1)
number.value = remove
}




