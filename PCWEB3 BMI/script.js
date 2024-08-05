const name=prompt("Hello what is your name?");
alert(`Hello ${name}! Welcome`);


function calcBMI() {
    let weight=document.getElementById("w").value;
    weight=parseFloat(weight);
    let height=document.getElementById("h").value;
    height=parseFloat(height);
    let bmi=weight/(height**2);
    alert(`Your BMI is ${bmi}`);
    if (bmi<18.5) {
        alert('Your BMI is considered low.')
    }else if (bmi<25) {
        alert('Your BMI is considered to be OK.')
    } else {
        alert('Your BMI is considered high.')
    }
}

function clearValues() {
    document.getElementById("w").value="";
    document.getElementById("h").value=""
}