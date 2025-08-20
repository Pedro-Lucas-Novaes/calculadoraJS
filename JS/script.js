function spanDestaque(texto) {
  return `<span class="destaque">${texto}</span>`;
} 

// Saudação

  function escapeHTML(str) {
  return str.replace(/[&<>"']/g, c => 
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])
  );
}

function saudacaoPersonalizada() {
  let nome;
  while (true) {
    nome = prompt("Digite seu nome (apenas letras e espaços):");
    if (nome && /^[A-Za-zÀ-ú\s]+$/.test(nome.trim())) break;
    alert("Nome inválido! Use apenas letras e espaços.");
  }
  document.write(`<p>Olá, ${spanDestaque(escapeHTML(nome.trim()))}! Bem-vindo(a) à Calculadora Universal!</p>`);
}

saudacaoPersonalizada();
    // Fim Saudação

    // Cálculo
    function promptNumero(mensagem, tenteNovamente) {
      let msg = mensagem;
      while (true) {
        let entrada = prompt(msg);
        if (!entrada) continue;
        entrada = entrada.replace(/\s+/g, "");
        let num = parseFloat(entrada);
        if (!isNaN(num)) return num;  
        msg = tenteNovamente;
      }
    }

    function promptOperador(mensagem, tenteNovamente) {
      let msg = mensagem;
      while (true) {
        let op = prompt(msg);
        if (!op) continue;
        op = op.trim();
        if (["+", "-", "*", "/"].includes(op)) return op;
        msg = tenteNovamente;
      }
    }

    function operacaoMatematica(num1, operador, num2) {
      let resultado;

      if (operador === "/" && num2 === 0) {
        resultado = "Divisão impossível";
      } else {
        switch (operador) {
          case "+":
            resultado = num1 + num2;
            break;
          case "-":
            resultado = num1 - num2;
            break;
          case "*":
            resultado = num1 * num2;
            break;
          case "/":
            resultado = num1 / num2;
            break;
          default:
            resultado = "Operador inválido!";
            break;
        }
      }

      document.write(
        `<p>O resultado da operação é: ${num1} ${operador} ${num2} = ${spanDestaque(resultado)}</p>`
      );  
    }

    const num1 = promptNumero("Digite o primeiro número:", "Número inválido! Digite novamente:");
    const operador = promptOperador("Digite o operador (+, -, *, /):", "Operador inválido! Digite novamente:");
    const num2 = promptNumero("Digite o segundo número:", "Número inválido! Digite novamente:");

    operacaoMatematica(num1, operador, num2);
    // Fim Cálculo

    // Dobro
    const calcularDobro = function (num1) {
      return num1 * 2;
    };

    const n1 = promptNumero("Digite o número que deseja dobrar:", "Número inválido! Digite novamente:");
    document.write(`<p>O dobro de ${n1} é: ${spanDestaque(calcularDobro(n1))}</p>`);
    // Fim Dobro

    // Metade
    const calcularMetade = (num1) => num1 / 2;
    const nu1 = promptNumero("Digite o número que deseja descobrir a metade:", "Número inválido! Digite novamente:");
    document.write(`<p>A metade de ${nu1} é: ${spanDestaque(calcularMetade(nu1))}</p>`);
    // Fim Metade

    // IIFE
    (() => {
      document.write("<h1 class='texto'>Calculadora Universal pronta para uso!</h1>");
    })();
    // Fim IIFE