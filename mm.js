
 firebase.auth().onAuthStateChanged(function(user) {

if(user==null){
  console.log('no use..');
  return;
}

 console.log(user.email);
 var userMail= user.email.replace(".","");
  

 const dbRefobject = firebase.database().ref("GAS/Sensor1");
//synic
 dbRefobject.once('value').then(function(snapshot){
 
  var ss=snapshot.val();
  console.log(ss);
  // var usertype=ss.type;
  // var device=ss.device;

  //   console.log(device);

  //   for(var key in device){
  //     i=i+1;
  //   var tes ="Device"+i;
  //   console.log(tes);
  //   var d = device[key];

  //   d = d.replace('"','');
  //   d = d.replace('"','');

  //     console.log("device",d,device[key]);

  //   document.getElementById("pageSubmenu3").innerHTML += "<li><a onclick='go(\""+d+"\");'>"+tes+"</a></li>";
      // console.log("device",i,device[key]);
    }
   


  });
});

