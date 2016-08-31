var number = prompt("enter a number");
var sum=0;
while(number>1){
	if((number-1)%3===0)
	 {sum+= number-1;
	 	number--;
	 }
 	else if((number-1)%5===0)
	 {sum+= number-1;
	number--;}
	else
		number--;
}
console.log(sum);