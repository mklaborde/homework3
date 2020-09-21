let day = prompt("Please enter a day of the week");
switch (day){
    case "sun":
        console.log(`You entered ${day}`);
        console.log("The follow day is mon");
        break
    case "mon":
        console.log(`You entered ${day}`);
        console.log("The follow day is tue");
    break
    case "tue":
        console.log(`You entered ${day}`);
        console.log("The follow day is wed");
    break
    case "wed":
        console.log(`You entered ${day}`);
        console.log("The follow day is thu");
    break
    case "thu":
        console.log(`You entered ${day}`);
        console.log("The follow day is fri");
    break
    case "fri":
        console.log(`You entered ${day}`);
        console.log("The follow day is sat");
    break
    case "sat":
        console.log(`You entered ${day}`);
        console.log("The follow day is sun");
    break
    default:
        console.log("You didn't enter a day, use the first 3 letters of a day and try again");
}