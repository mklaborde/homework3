const ourpassword = "secret";
let guess="mikeisgreat";
let number=1;
while (number <4 && ourpassword != guess)
{
    guess = prompt("Please enter your password:");
    number++;
}

if (number=4 && guess != "secret")
{
    number--;
    console.log(`You failed to enter your password after ${number} attempts`);
}
if (guess == "secret")
{
    number--;
    console.log(`You entered the correct password after ${number} attempts`);
}

