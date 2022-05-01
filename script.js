function formulatePayment(choice, amount){
    const initialPayment = (10/100*amount).toFixed(2);
    let remainingAmount = amount-initialPayment;
    let weeklyAmount;
    if(choice === "weekly"){
weeklyAmount = remainingAmount/(3*12*4);
if(weeklyAmount%50!=0){
    weeklyAmount = Math.floor(weeklyAmount/50);
    weeklyAmount = (weeklyAmount+1)*50;
}
let i = 0;
while(remainingAmount-weeklyAmount>=weeklyAmount){
    remainingAmount-=weeklyAmount;
    i++;
}
remainingAmount-=weeklyAmount;
console.log(`${weeklyAmount} is given for${i+1} weeks and ${remainingAmount.toFixed(2)} remains to give`);
  
    return{
        time: choice,
        amount: weeklyAmount,
    }
  }
  else if(choice === "monthly"){
      let monthlyAmount;
    monthlyAmount = remainingAmount/(3*12);
    if(monthlyAmount%100!=0){
        monthlyAmount = Math.floor(monthlyAmount/100);
        monthlyAmount = (monthlyAmount+1)*100;
    }
    let i = 0;
    while(remainingAmount-monthlyAmount>=monthlyAmount){
        remainingAmount-=monthlyAmount;
        i++;
    }
    remainingAmount-=monthlyAmount;
    console.log(`${monthlyAmount} is given for${i+1} months and ${remainingAmount.toFixed(2)} remains to give`);
      
        return{
            time: choice,
            amount: monthlyAmount,
        }
  }
}
const choice = "monthly";
const amount =20200;
console.log(formulatePayment(choice, amount));