const nameInput = document.getElementById("name");
const dobInput = document.getElementById("dob");    
const submitButton = document.getElementById("submit");
const stopButton = document.getElementById("stop")
const resultDiv = document.getElementById("result");

let countdownInterval;




submitButton.addEventListener("click",startCountdown);
stopButton.addEventListener("click", stopCountdown);

function startCountdown(){
    clearInterval(countdownInterval);
    countdownInterval = setInterval(calculateTimeLeft, 1000)
}

function stopCountdown(){
  clearInterval(countdownInterval);
  resultDiv.innerHTML += "<p> countdown stopped </p>";
}

function calculateTimeLeft(){
    const name = nameInput.value;
    const dob = new Date(dobInput.value);
    

     if (isNaN(dob.getTime())){
        alert("Invalid date of birth");
        return;
    }

       const currentDate = new Date();

       let  nextBirthday = new Date(currentDate.getFullYear(), dob.getMonth(), dob.getDate());


       if (nextBirthday < currentDate){
        nextBirthday= new  Date(currentDate.getFullYear() + 1, dob.getMonth(), dob.getDate());
        }

        const timeLeft = nextBirthday.getTime() - currentDate.getTime();

        if(timeLeft <= 0){
            resultDiv.innerHTML = `<p> Hi ${name}, its your birthday today! </h3> `;
        stopCountdown();
        return
        }



        const daysLeft = Math.floor(timeLeft/(1000*60*60*24));
        const weeksLeft = Math.floor(daysLeft/7);
        const hoursLeft = Math.floor((timeLeft % (1000*60*60*24)) / (1000*60*60));
        const minutesLeft = Math.floor((timeLeft % (1000*60*60)) / (1000*60))
        const secondsLeft = Math.floor((timeLeft % (1000*60)) / 1000);




        resultDiv.innerHTML = `
        <p><b> Hi ${name}, Your Next Birthday is on ${nextBirthday.getDate()} and it's in : 
        ${weeksLeft} weeks  ${daysLeft} days  ${hoursLeft} hours ${minutesLeft}minutes
       ${secondsLeft} seconds</b> </p>
        `;     
       }