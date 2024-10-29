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
    let output = "";
    
    if (m === n1) {

        output = "The asymptote is horizontal";
    }

    else if (n1>m) {

        output = "The asymptote is the x-axis";
    }

    else if (m>n1) {

        if ((m-n1) === 1){
            output =" Linear"
        }

        else if ((m-n1) === 2){ 
            output ="Quadratic"
        }

        else if ((m-n1) === 3){ 
            output ="Cubic"
        }

        else if ((m-n1) === 4){ 
            output ="Quartic"
        }

        else if ((m-n1) === 5){ 
            output ="Quintic"
        }

        else if ((m-n1) === 6){ 
            output ="Sextic"
        }

        else if ((m-n1) === 7){ 
            output ="Septic"
        }

        else if ((m-n1) === 8){ 
            output ="Octic"
        }

        else if ((m-n1) === 9){ 
            output ="Nonic"
        }

        else if ((m-n1) === 10){ 
            output ="Decic"
        }
    
        resultInput2.value = output;
    }
}