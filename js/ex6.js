let seconds = Number(prompt("Please enter seconds:"));
let minutes = Number(prompt("Please enter minutes:"));
let hours = Number(prompt("Please enter hours:"));

console.log (`Time Input was ${hours}h${minutes}m${seconds}s`);
seconds++;
if (seconds==60)
{
    minutes++;
    seconds=0;
}
if (minutes==60)
{
    hours++;
    minutes=0;
}
if (hours==24)
{
    hours=0;
    minutes=0;
    seconds=0;
}

console.log(`One seconds later is ${hours}h${minutes}m${seconds}s`)
