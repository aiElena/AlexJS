
let str = "some test string";
  
  document.getElementById("out_num1").innerHTML = str.charAt(0) + ', ' + str.charAt(str.length - 1);
  
  document.getElementById("out_num2").innerHTML = str[0].toUpperCase() + str.slice(1, str.length - 2) + str[str.length - 1].toUpperCase();
  
 
  document.getElementById("out_num3").innerHTML = str.indexOf('string');
 
  
  


  
  

 



