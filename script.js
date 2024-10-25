const calculateButton = document.getElementById('calculate1');
const resultInput = document.getElementById('result1');

calculateButton.addEventListener('click', cosine);

function cosine() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const angleC = parseFloat(document.getElementById('angleC').value);
    const sidec = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angleC));
    resultInput.value = sidec
}