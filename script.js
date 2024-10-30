const calculateButton1 = document.getElementById('calculate1');
const resultInput1 = document.getElementById('result1');

calculateButton1.addEventListener('click', cosine);

function cosine() {

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const angleC = parseFloat(document.getElementById('angleC').value);
    const sidec = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angleC));
    resultInput1.value = sidec
}

const calculateButton2 = document.getElementById('calculate2');
const resultInput2 = document.getElementById('result2');

calculateButton2.addEventListener('click', Asymptote);

function Asymptote() {
    
    const m = parseFloat(document.getElementById('m').value);
    const n1 = parseFloat(document.getElementById('n1').value);
    let result = "";
    
    if (m === n1) {

        result = "The asymptote is horizontal";
    }

    else if (n1>m) {

        result = "The asymptote is the x-axis";
    }

    else if (m>n1) {

        if ((m-n1) === 1){
            result =" Linear"
        }

        else if ((m-n1) === 2){ 
            result ="Quadratic"
        }

        else if ((m-n1) === 3){ 
            result ="Cubic"
        }

        else if ((m-n1) === 4){ 
            result ="Quartic"
        }

        else if ((m-n1) === 5){ 
            result ="Quintic"
        }

        else if ((m-n1) === 6){ 
            result ="Sextic"
        }

        else if ((m-n1) === 7){ 
            result ="Septic"
        }

        else if ((m-n1) === 8){ 
            result ="Octic"
        }

        else if ((m-n1) === 9){ 
            result ="Nonic"
        }

        else if ((m-n1) === 10){ 
            result ="Decic"
        }
    }
    resultInput2.value = result;
    
}

const calculateButton3 = document.getElementById('calculate3');
const resultInput3 = document.getElementById('result3');

calculateButton3.addEventListener('click', Approximation);

function Approximation() {
    const n2 = parseFloat(document.getElementById('n2').value);
    let piapprox = 0;

    for (let i = 0; i <= n2; i++) {
        piapprox += 4 * (Math.pow(-1, i)) / ((2 * i) + 1);
    }

    resultInput3.value = piapprox;
}