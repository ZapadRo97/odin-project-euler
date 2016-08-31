var a=1;
var b=1;
var c=1;
var sum=0;
var n = prompt("enter number");
while(c<n){
	c=a+b;
	a=b;
	b=c;
	if(a%2===0){
		sum+= a;
	}
}
console.log(sum);