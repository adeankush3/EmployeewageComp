class EmployeePayroll
{
    //Property
    id;
    salary;
    gender;
    startDate;
    //Constructor
    constructor(...params)
    {
        this.id  = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
        this._name=name;
        else  throw 'Name Is Incorrect';        
    }

    toString(){
        const Option = {year: 'numeric', month: 'numeric', day:'numeric'};
        const empDate = this.startDate === undefined ? "undefined":
                         this.startDate.toLocaleDateString("en-US",Option);

        return "id="+ this.id + ", name="+this.name+", salary="+this.salary+", Gender="+this.gender+", StartDate="+empDate;
    }
}

let employeePayroll = new EmployeePayroll(1,"Ankush",55000,"M",new Date());
console.log(employeePayroll.toString());


try{
    let employeePayroll = new EmployeePayroll(2,"balu",35000,"M",new Date());
    console.log(employeePayroll.toString()); 
}
catch(e){
    console.error(e);
}