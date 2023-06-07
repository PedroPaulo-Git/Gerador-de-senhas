document.addEventListener("DOMContentLoaded", function() {
    const b = document.querySelector(".gerador");
    const result = document.querySelector('.result');
    const gerar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const alterar = document.querySelector('.Alterar_char');
    const button_alterar_maior = document.querySelector('#gerador_maior');
    const button_alterar_menor = document.querySelector('#gerador_menor');
    const copy = document.getElementById('copyIcon');
    const copyResult = document.querySelector('.copy_result');
  
    let random;
    let alt = 8;
   
    function g(callback) {
      const allrandom = [];
      for (let i = 0; i < alt; i++) {
        random = Math.floor(Math.random() * gerar.length);
        const randomChar = gerar[random];
        allrandom.push(randomChar);
      }
      callback(allrandom);
    }
  
    b.addEventListener("click", () => {
      g((allrandom) => {
        result.innerText = allrandom.join('');
      });
    });
  
    button_alterar_maior.addEventListener("click", () => {
        if(alt < 20){
      alt += 1;
      alterar.innerText = alt;
    }
      
    });
  
    button_alterar_menor.addEventListener("click", () => {
        if (alt > 4) {
        alt -=   1;
        alterar.innerText = alt;
      }
    });


    copy.addEventListener("click", ()=>{

      const range = document.createRange();
      range.selectNode(result);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      







      copyResult.style.display = "block";

      setTimeout(()=>{

        copyResult.style.display = "none";
      },2000);
      
      
  
    })
  
    console.log(g);
    console.log(random);
    console.log(alt);

  });
  