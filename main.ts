function loop(num)
{
	for(let i = 0; i < num; i++){
		console.log(i);
	}

	console.log('the last value is: ' + i);
}

loop(6);


enum Colors {yellow = 'y', blue = 5456};

let font = Colors.yellow;

console.log(font);


let msg;
function print(string){
	console.log(string);
}

msg = 'welcome';

print((<string> msg));
print((msg as string));