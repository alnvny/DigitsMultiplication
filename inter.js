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




