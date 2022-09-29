let contenedor = document.getElementById("contenedor");




let seccion = prompt("Lista de Crypto(x) - Cambio a dolar($) - Registro(r) - Carrito(c)").toLowerCase();

if (seccion === "x") {
   contenedor.innerHTML = "<h2>Lista Crypto</h2>";

   let productos = ["BTC", "ETH", "SOL", "BNB"]; 

    for(const producto of productos) {
     let li = document.createElement("li");
     li.innerHTML = producto;
     contenedor.append(li);
}

} else if (seccion === "$") {
  contenedor.innerHTML = "<h2>Cambio a Dolar</h2>";
let productos = [
  { id: 1, nombre: "BTC", precio: 19839 },
  { id: 2, nombre: "ETH", precio: 1556 },
  { id: 3, nombre: "BNB", precio: 295 },
  { id: 4, nombre: "SOL", precio: 35.81 },
];


for(const producto of productos){
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Producto: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;

  contenedor.append(div);
}

} else if ( seccion === "r") {

  const form = document.querySelector("#formulario");
    
     const enviarFormulario = (event) => {
     event.preventDefault();
  
     const {name, email, password} = event.target;

     console.log(name.value, email.value, password.value);

  if (name.value.length === 0){
    alert("El nombre no es valido");
  }else{
    alert("Registrado correctamente");
  }


}

form.addEventListener("submit", enviarFormulario);
 
}else if ( seccion === "c") {

  let productos = [
    { id: 1, nombre: "BTC", precio: 19839 },
    { id: 2, nombre: "ETH", precio: 1556 },
    { id: 3, nombre: "BNB", precio: 295 },
    { id: 4, nombre: "SOL", precio: 35.81 },
  ];
  
localStorage.setItem("carrito", JSON.stringify(productos));


let contenedor = document.getElementById("contenedor");

let carrito = [];
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
  carrito = carritoStorage;
}

carrito.forEach(producto => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;

  contenedor.append(div);
 });

let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  alert("carrito eliminado");
  contenedor.innerHTML = "";
  localStorage.clear();
});



} else{
  contenedor.innerHTML = "<h1>Bienvenido a swap</h1>";
}