//Variable Declarations
var msg = document.getElementById("message");
var SaveButton = document.getElementById("id_save_button");
var ClearButton = document.getElementById("id_btn_data_clr");
var Access_Data1 = document.getElementById("id_input1");
var Access_Data2 = document.getElementById("id_input2");
var SS = window.sessionStorage;
var LS = window.localStorage;
var str1 = "";
var str2 = "";

//Create Click Event
SaveButton.addEventListener("click",AccessData,true);
ClearButton.addEventListener("click",ClearData,false);


function AccessData() {
    SS.setItem("a",Access_Data1.value);
    SS.setItem("b",Access_Data2.value);
    Store_Data();
}

function ClearData(){
    SS.clear();
    LS.clear();
    Access_Data1.value = "";
    Access_Data2.value = "";
}

function Store_Data(){
    var k, count = 0;
    for( k in SS ){
        var Temp_SS = SS.getItem(k)

        if(Temp_SS != null) {
            count++;
            if(count == 1) {
                str1 = SS.getItem(k) + "/";
            }
            if(count == 2){
                str2 = SS.getItem(k);
                count = 0;
            }
        }
    }
    display();
}

function display(){
    if(str1.concat(str2) != "/" ) {
        msg.innerHTML += str1.concat(str2)+ "<br/>";
    }
}
