
let outputShow = document.getElementById("outputShow");

function display(num){
    outputShow.value += num;
}

function Calculate(){
    try{
        outputShow.value = eval(outputShow.value);
    }
    catch(err) {
        alert("Invalid")
    }
}



function ClearIt() {
    outputShow.value = "";
}

function del() {
    outputShow.value = outputShow.value.slice(0,-1);
}