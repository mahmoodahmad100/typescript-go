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
	username:string,
	password:number,
	update: () => void
}

let login = (user:User) =>{
	// the logic is here
}

// rewrite the User interface by using class
class User{
	constructor(private name?: string, private phone?:number){

	}

	getName()
	{
		return this.name;
	}

	setName(val){
		if(val == 'hi')
			throw new Error('hi should\'nt be a name');
		this.name = val;	
	}

	updateInfo(){
		console.log('name: ' + this.name + ' phone: ' + this.phone );
	}
}

let user = new User();
user.getName();
user.setName('ddd');
user.updateInfo();
/*******************************************/