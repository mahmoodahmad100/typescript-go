function loop(num)
{
	for(var i = 0; i < num; i++){
		console.log(i);
	}

	console.log('the last value is: ' + i);
}

loop(6);


// rewrite loop function (arrow function)

let altLoop = (num) => {
	for(var i = 0; i < num; i++){
		console.log(i);
	}

	console.log('the last value is: ' + i);	
}

altLoop(6);

// arrow function

let hi = () => console.log('hi');
hi();
/*******************************************/

enum Colors {yellow = 'y', blue = 5456};

let font = Colors.yellow;

console.log(font);

/*******************************************/

let msg;
function print(string){
	console.log(string);
}

msg = 'welcome';

print((<string> msg));
print((msg as string));

/*******************************************/
interface User{
	name:string,
	phone:number,
	update: () => void
}

let login = (user:User) =>{
	// the logic is here
}

// rewrite the User interface by using class
class User{
	name:string;
	phone:number;

	updateInfo(){
		console.log('name: ' + this.name + ' phone: ' + this.phone );
	}
}

let user = new User();
user.name = "mahmood";
user.phone = 54664;
user.updateInfo();
/*******************************************/