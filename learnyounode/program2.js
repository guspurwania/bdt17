var input = process.argv.slice(2);
total = 0;
for(var i in input)
{
	total += +(input[i]);
}
console.log(total)