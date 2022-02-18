const buttons_contanier = document.querySelector(".buttons-container");
const girdi =document.querySelector(".girdi");
const cıktı =document.querySelector(".cıktı");


buttons_contanier.addEventListener("click",(e)=>{

    if (e.target.classList.contains('number') && cıktı.innerText.length < 8) {
        if ((cıktı.innerText == '' && e.target.classList.contains('number-0')) || cıktı.innerText.split('')[0] == 0) {
          cıktı.innerText = e.target.innerText;
        } else {
          cıktı.innerText += e.target.innerText;
        }
      }
    //   console.log(cıktı);
    
    if (e.target.classList.contains('decimal') && !cıktı.innerText.includes('.')) {
        cıktı.innerText += e.target.innerText;
      }

      if (e.target.classList.contains('operator')) {
        const operator = e.target.innerText;
        switch (operator) {
          case '+':
            if (cıktı.innerText !== '') {
              girdi.innerText = `${cıktı.innerText} ${operator}`;
              cıktı.innerText = '';
            }
            break;
          case '−':
            if (cıktı.innerText !== '') {
              girdi.innerText = `${cıktı.innerText} ${operator}`;
              cıktı.innerText = '';
            }
            break;
          case '×':
            if (cıktı.innerText !== '') {
              girdi.innerText = `${cıktı.innerText} ${operator}`;
              cıktı.innerText = '';
            }
            break;
          case '÷':
            if (cıktı.innerText !== '') {
              girdi.innerText = `${cıktı.innerText} ${operator}`;
              cıktı.innerText = '';
            }
            break;
          case '=':
            if (cıktı.innerText !== '') {
              if (girdi.innerText.includes('+')) {
                const currentNumber = Number(cıktı.innerText);
                const previousNumber = Number(girdi.innerText.split(' ')[0]);
                cıktı.innerText = currentNumber + previousNumber;
                girdi.innerText = '';
              }
              if (girdi.innerText.includes('−')) {
                const currentNumber = Number(cıktı.innerText);
                const previousNumber = Number(girdi.innerText.split(' ')[0]);
                cıktı.innerText = previousNumber - currentNumber;
                girdi.innerText = '';
              }
              if (girdi.innerText.includes('÷')) {
                const currentNumber = Number(currentDisplayField.innerText);
                const previousNumber = Number(girdi.innerText.split(' ')[0]);
                if (currentNumber === 0) {
                  cıktı.innerText = 'Error';
                } else {
                  cıktı.innerText = previousNumber / currentNumber;
                }
                girdi.innerText = '';
              }
              if (girdi.innerText.includes('×')) {
                const currentNumber = Number(cıktı.innerText);
                const previousNumber = Number(girdi.innerText.split(' ')[0]);
                cıktı.innerText = previousNumber * currentNumber;
                girdi.innerText = '';
              }
            }
            break;
    
          default:
            break;
        }
      }

});

