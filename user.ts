class User{
	constructor(private _name?: string, private _phone?:number){

	}

	get name()
	{
		return this._name;
	}

	set name(val){
		if(val == 'hi')
			throw new Error('hi should\'nt be a name');
		this._name = val;	
	}

	updateInfo(){
		console.log('name: ' + this._name + ' phone: ' + this._phone );
	}
}