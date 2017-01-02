function tjek(){
	imax=document.getElementById("max").value;
	document.getElementById("ud").innerHTML="";
	
	
	for (i=2; i<imax; i++){
		
		if (i%2==0 || i%3==0 || i%5==0 || i%7==0){
			continue;
		} 
		
		
		primtal=true;
		
		for (k=2; k<i; k++){
			if (i%k==0){
				primtal=false;
				break;
			}
		}
		
		if (primtal)
			document.getElementById("ud").innerHTML += i+" ";
	}
}






