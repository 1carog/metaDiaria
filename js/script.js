  function calcular() {
    let X = parseFloat(document.getElementById("meta").value) || 0;
    let Y = parseFloat(document.getElementById("vendido").value) || 0;
    let Z = parseFloat(document.getElementById("dias").value) || 0;

    // Salva no localStorage
    localStorage.setItem("meta", X);
    localStorage.setItem("vendido", Y);
    localStorage.setItem("dias", Z);

    let R = Math.max(X - Y, 0);
    let Di = (Z > 0) ? (R / Z) : 0;

    document.getElementById("restante").textContent = R.toLocaleString("pt-BR", {minimumFractionDigits: 2});
    document.getElementById("diario").textContent = Di.toLocaleString("pt-BR", {minimumFractionDigits: 2});
  }

  // Carregar ao abrir a página
  window.onload = () => {
    if(localStorage.getItem("meta")) document.getElementById("meta").value = localStorage.getItem("meta");
    if(localStorage.getItem("vendido")) document.getElementById("vendido").value = localStorage.getItem("vendido");
    if(localStorage.getItem("dias")) document.getElementById("dias").value = localStorage.getItem("dias");
  }