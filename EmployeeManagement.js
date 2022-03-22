console.log("Welcome To Employee Wage Computation Using JS ");


const IS_ABSENT =0;
let checkStatus  = Math.floor(Math.random() * 10) % 2;
if(checkStatus == IS_ABSENT)
{
    console.log("Employee is Absent");
}
else
{
    console.log("Employee is Present");
}



const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HRS =4;
const FULL_TIME_HRS =8;
const WAGE_PER_HRS =20;
let emphr = 0;


function GetWorkingHour(checkStatus)
{
    switch(checkStatus)
    {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        break;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        default:
            return 0;
    }
}

checkStatus = Math.floor(Math.random() * 10) % 3;
emphr = GetWorkingHour(checkStatus)
let empWage = emphr * WAGE_PER_HRS;
console.log("Employee wage is : "+empWage);


const WORKING_DAYS_IN_MONTH = 20;

for(let i = 0; i < WORKING_DAYS_IN_MONTH ; i++)
{
    emphr += GetWorkingHour(checkStatus) ;
}

empWage = emphr * WAGE_PER_HRS;
console.log("Total Work Hours :"+emphr+" Total Employee wage for a Month : "+empWage);


const MAX_WORKING_HRS_IN_MONTH = 160;
let total_empHRs = 0;
let total_workingDays = 0;

while(total_empHRs <= MAX_WORKING_HRS_IN_MONTH && total_workingDays < WORKING_DAYS_IN_MONTH)
{
    total_workingDays++;
    total_empHRs += GetWorkingHour(checkStatus);
}
empWage = total_empHRs * WAGE_PER_HRS;
console.log("Total Working Days: "+total_workingDays+"  Total working Hours :"+total_empHRs+"  Total Employee wage : "+empWage);