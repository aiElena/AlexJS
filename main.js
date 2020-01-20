
	let str = "some test string";
  
    document.getElementById("out_num1").innerHTML = str.charAt(0) + ', ' + str.charAt(str.length - 1);
  
    document.getElementById("out_num2").innerHTML = str[0].toUpperCase() + str.slice(1, str.length - 2) + str[str.length - 1].toUpperCase();
  
 
    document.getElementById("out_num3").innerHTML = str.indexOf('string');
	
	
	let position = 0;
	document.getElementById("out_num4").innerHTML = str.indexOf(' ', str.indexOf(' ') + 1);
 
    document.getElementById("out_num5").innerHTML = str.substr(5, 4);

    document.getElementById("out_num6").innerHTML = str.slice(5, 9);
 

	document.getElementById("out_num7").innerHTML = str.slice(0,- 6);
	
	
	

	let a = "20";
	let b = "16";

	document.getElementById("out_num8").innerHTML = a.concat(b);


  
  

 



