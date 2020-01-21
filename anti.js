
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function ANTI() {

firebase.auth().onAuthStateChanged(function(user) {

  if(user==null){
  window.location.href="login.html";
  return;
  }
  var Mail= user.email;
  document.getElementById("mail").innerHTML = Mail;
  var userMail= user.email.split('@')[0];
  document.getElementById("name").innerHTML = userMail;
  var dName = getCookie("device");
  console.log("device from cookie",dName);

  if (dName=="") {
    console.log("no device");
    return;
  }
  var y=0;
  var database = firebase.database();
 var ref = database.ref('device/'+dName+'/working');
 var y=1;
  var x = document.getElementById("mySelect").value;
  if(x=="OFF")
  	{
  	y=1;
  	document.getElementById("demo").innerHTML = y;
  }
  else
  {
  	y=0;
  	document.getElementById("demo").innerHTML = y;
  }
 ref.set(
 {
 	"set": y
 });


});
}


  

