const ourpassword = "secret";
let guess="mikeisgreat";
let number=1;
while (number <4 && ourpassword != guess)
{
    guess = prompt("Please enter your password:");
    number++;
}

if (guess != "secret")
{
    console.log(`You failed to enter your password after 3 attempts`);
}
if (guess == "secret")
{
    number=number-1;
    console.log(`You entered the correct password after ${number} attempts`);
}

