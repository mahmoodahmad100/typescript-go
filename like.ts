
export class Like
{
	private selected:boolean = false; 

	constructor(private num:number){
	}

	like(){
		this.selected = !this.selected;
		this.num += (this.selected) ? +1 : -1;
		console.log(`selected: ${this.selected}, number: ${this.num}`);
	}
}