
  var database = firebase.database();
  var ref = database.ref('GAS/Sensor1');

  ref.on("value", gotData1, errData);



   


  function gotData1(data) {
  var fruits = data.val();


  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);

  var j=keys.length;
  var k=j-1;

  
  
    var key = keys[k];
    // td get value
    var s1 = fruits[key];
          console.log(s1);
    document.getElementById("sen1").innerHTML=s1;
  

  }

  function errData(data) {
  
  console.log(err);
  console.log('err');

  
  
}