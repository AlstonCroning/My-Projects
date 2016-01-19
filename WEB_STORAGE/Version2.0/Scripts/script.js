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
var input1, input2;

//Declare Events
SaveButton.addEventListener("click",Store_Data,false);
ClearButton.addEventListener("click",ClearData,false);

function Store_Data() {
    SS.setItem("a", Access_Data1.value);
    SS.setItem("b", Access_Data2.value);
    Read_AND_DisplayData();
}

function ClearData(){
    SS.clear();
    LS.clear();
    Access_Data1.value = "";
    Access_Data2.value = "";
}

function Read_AND_DisplayData(){

    //variables
    var k, count = 0;
    input1 = Access_Data1.value;
    input2 = Access_Data2.value;

    //Read Data
    for( k in SS ){
        var Temp_SS = SS.getItem(k);

        if (Temp_SS != null) {
            count++;
            if (count == 1) {
                str1 = SS.getItem(k) + "<br/><br/>";
            }
            if (count == 2) {
                str2 = SS.getItem(k) + "<br/>";
                count = 0;
            }
        }
    }

    //Display Data
    if( (input1 != "") && (input2 != "") ){
        msg.innerHTML += "Input1: " + str2.concat("Input2: " + str1);
    }
    else if(input1 != ""){
        msg.innerHTML += "Input1: " + str2.concat(str1);
    }
    else if((input2 != "")){
        msg.innerHTML += str2.concat("Input2: " + str1);
    }
}
