const name = prompt("Enter your name:");
let units = Number(prompt("Enter your number of units completed:"));
if (units < 0)
{
    console.log("Error:Units cannot be less than 0");
}
if (units <=30)
{
    console.log(`Hello ${name}`);
    console.log(`Your academic standing is freshman`);
}
if (units > 30 && units <=60)
{
    console.log(`Hello ${name}`);
    console.log(`Your academic standing is sophmore`);
}
if (units > 60 && units <=90)
{
    console.log(`Hello ${name}`);
    console.log(`Your academic standing is junior`);
}
if (units > 90)
{
    console.log(`Hello ${name}`);
    console.log(`Your academic standing is senior`);
}