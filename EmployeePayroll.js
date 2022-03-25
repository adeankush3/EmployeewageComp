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
    set name(name){this._name = name;}

    toString(){
        const Option = {year: 'numeric', month: 'numeric', day:'numeric'};
        const empDate = this.startDate === undefined ? "undefined":
                         this.startDate.toLocaleDateString("en-US",Option);

        return "id="+ this.id + ", name="+this.name+", salary="+this.salary+", Gender="+this.gender+", StartDate="+empDate;
    }
}

let employeePayroll = new EmployeePayroll(1,"Ankush",55000,"M",new Date());
console.log(employeePayroll.toString());