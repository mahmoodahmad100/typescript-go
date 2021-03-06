import { User } from './user';
import { Like } from './like';

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
interface Person{
	username:string,
	password:number,
	update: () => void
}

let login = (user:Person) =>{
	// the logic is here
}

// rewrite the User interface by using class


let user = new User();
user.name;
user.name = "fsda";
user.updateInfo();
/*******************************************/
let like = new Like(5);
like.like();
like.like();
/*******************************************/
