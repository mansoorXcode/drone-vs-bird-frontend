async function predictImage() {
    const input = document.getElementById('imageInput');
    if (!input.files.length) {
        alert('Please select an image file.');
        return;
    }
    const file = input.files[0];
    const formData = new FormData();
    formData.append('file', file);

    document.getElementById('result').innerText = 'Predicting...';
    try {
        const response = await fetch('http://localhost:8000/predict', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        document.getElementById('result').innerText = `Prediction: ${data.result}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Error during prediction.';
    }
}
