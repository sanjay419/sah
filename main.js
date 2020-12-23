var firebaseConfig = {
    apiKey: "AIzaSyAoHzNQj8XslvzEBgqMdOw2KLhWok-Ifro",
    authDomain: "smokemonitoring.firebaseapp.com",
    databaseURL: "https://smokemonitoring.firebaseio.com",
    projectId: "smokemonitoring",
};
let s1,s2;
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var ref = database.ref('GAS/Sensor1');
ref.on("value", gotData1, errData);

var ref1 = database.ref('GAS/Sensor2');
ref1.on("value", gotData, errData);

// Gas Sensor 1
function gotData(data) {
    var temp = data.val();
    var keys = Object.keys(temp);
    s2 = parseInt(temp[keys[keys.length-1]]);
    console.log(s2);
    document.getElementById("sen2").innerHTML = s2;
    setsate();
}

//Gas sensor 2
function gotData1(data) {
    var temp = data.val();
    var keys = Object.keys(temp);
    s1 = parseInt(temp[keys[keys.length-1]]);
    console.log(s1);
    document.getElementById("sen1").innerHTML = s1;
    setsate();
}
function setsate(){
        if(s1>300||s2>200){
        document.getElementById("sen3").innerHTML = "Danger";
        return;
    }
    document.getElementById("sen3").innerHTML = "Good";
    
}

function errData(data) {
    console.error(data);
}

