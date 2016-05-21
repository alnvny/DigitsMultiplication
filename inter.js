// Javascript code to convert multiple digits into a single digit by * multiple digits

//In num set any number 



var num=59;

num=num+'';
while((num.length)!==1)
{
	num=multi();
	num=num+'';
}
console.log(num);
function multi(){

var	total=num[0];
for(var i=1;i<num.length;i++)
{
	total=total*num[i];
}
return total;
}


