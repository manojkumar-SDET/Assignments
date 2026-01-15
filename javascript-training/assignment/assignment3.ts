//Checking whether a user has eligibility to get bank loan using if...else

interface customerDetails{
    customerName :string;
    creditScore :number;
    income : number;
    isEmployed: boolean;
    debtToIncomeRatio:number;
}

let customerDetails ={
customerName:"John Doe",
creditScore:72,
income:55000.0,
isEmployed:true,
debtToIncomeRatio:35.0,
}


if (customerDetails.creditScore>=750 && 
    customerDetails.income<=55000 &&
    customerDetails.isEmployed===true &&
    customerDetails.debtToIncomeRatio<=40)
{
    console.log(customerDetails.customerName +" " , "Customer is eligible for Loan");
}else{
    console.log(customerDetails.customerName + " " , "Customer is not Eligible");
}