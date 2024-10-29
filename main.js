const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results'); 

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid input";
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid input";
    }
    else{
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters ** 2);
        let message=`your BMI is ${bmi.toFixed(2)}`;
        if (bmi<18.6) {
            message+= " and you are under weight";
        }
        else if (bmi>24.9) {
            message+= " and you are over weight";
        }
        else{
            message+= ` and you are normal weight`;
        }
        results.innerHTML=message
    }
    
});
