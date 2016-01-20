/**
 * Created by Dishan Croning on 3/9/2015.
 */

document.getElementById("name").addEventListener("keyup", register);
document.getElementById("lname").addEventListener("keyup", register);
document.getElementById("email").addEventListener("keyup", register);
document.getElementById("password").addEventListener("keyup", register);
document.getElementById("cpassword").addEventListener("keyup", pass);

//(error status display) checks if u typed something or not in the input and display the error status
function register(){
    //storing what u typed in an Array for later use
    var x = new Array();
    x[0] = document.getElementById('name').value;
    x[1] = document.getElementById('lname').value;
    x[2] = document.getElementById('email').value;
    x[3] = document.getElementById('password').value;
    x[4] = document.getElementById('cpassword').value;

    //storing the following error messages in an Array for later use
    var h = new Array();
    h[0] = "<span style='color:red'>Please type your name!</span>";
    h[1] = "<span style='color:red'>Please type your last name!</span>";
    h[2] = "<span style='color:red'>Please type your email!</span>";
    h[3] = "<span style='color:red'>Please type your password!</span>";
    h[4] = "<span style='color:red'>Please confirm your password!</span>";

    //storing id names of the divs(in an Array) of td in the table we created
    var divs = new Array("mname", "mlname", "memail","mpassword","mcpassword");

    //for loop counter that will count untill the x Array's last index
    for(i in x){
        var error = h[i];//used for error messages
        var div= divs[i];//div is the element we use to display error messages using javascript in our page

        //this if statements checks whether if what u typed in the input boxes is something or nothing
        if(x[i] == ""){//nothing
            document.getElementById(div).innerHTML = error;
        }else{//something
            document.getElementById(div).innerHTML = "OK!";
        }
    }
}

//this function compares the password and confirm password to see if they match or not
function pass(){
    var first = document.getElementById('password').value;
    var second = document.getElementById('cpassword').value;

    if(second==first){
        document.getElementById('mcpassword').innerHTML = "OK";
    }else{
        document.getElementById('mcpassword').innerHTML = "<span style='color:red'>your passwords don't match</span>";
    }
}