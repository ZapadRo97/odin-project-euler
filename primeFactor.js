var n = prompt("enter number");
var d=2;
var lastN=0;
while(n>1){
	if(n%d===0){
		lastN=d;
		n=n/d;
	}
	else
	d++;
}
console.log(lastN);