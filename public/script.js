document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.textContent = 'Please enter positive numbers for weight and height.';
        resultDiv.className = 'result error';
        resultDiv.classList.remove('hidden');
        return;
    }

    const bmi = weight / (height * height);
    let category = '';
    let className = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        className = 'underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        className = 'normal';
    } else if (bmi < 29.9) {
        category = 'Overweight';
        className = 'overweight';
    } else {
        category = 'Obese';
        className = 'obese';
    }

    resultDiv.innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>${category}`;
    resultDiv.className = `result ${className}`;
    resultDiv.classList.remove('hidden');
});
