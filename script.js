
fetch('data.json')
    .then((res) =>
        res
            .json() 
            .then((data) => {
                function filtroObjetos(objeto, categoria ){
                    let variable1 = objeto.filter((fun1) => fun1.tipo.includes(categoria));
                    return variable1;
                }
                
                const mapeoComida = filtroObjetos(data, "comida");
                const mapeoFrutaVerdura = filtroObjetos(data, "frutas y verduras");
                const mapeoPanaderia = filtroObjetos(data, "panaderia");
                const mapeoFiambreria = filtroObjetos(data, "fieambreria");
                const mapeoInstruCocina = filtroObjetos(data, "instrumentos de cocina");
                const mapeoGolosinas = filtroObjetos(data, "golosinas");
                const mapeoCafeteria = filtroObjetos(data, "cafeteria");
                const mapeoHigiene = filtroObjetos(data, "higiene");
                
                /*-----------------         Funciones creadoras de DOM           -----------------*/
                function contenedorDiv(id){
                    let variable1 = document.getElementById(id);
                    return variable1;
                }
                
                function crearH2(id, hoja){
                    let arbol = document.getElementById(id)
                    let arbol2 = document.createElement("h2");
                    arbol2.className = "pajaro";
                    arbol2.innerText = hoja;
                    
                    arbol.append(arbol2);
                }
                
                
                let div1 = contenedorDiv("shopContent1");
                let div2 = contenedorDiv("shopContent2");
                let div3 = contenedorDiv("shopContent3");
                let div4 = contenedorDiv("shopContent4");
                let div5 = contenedorDiv("shopContent5");
                let div6 = contenedorDiv("shopContent6");
                let div7 = contenedorDiv("shopContent7");
                let div8 = contenedorDiv("shopContent8");
                
                
                
                function filtroAllObjects(array, div){
                    for(const product of array){
                        let contenido = document.createElement("div");
                        contenido.className = "card";
                        contenido.innerHTML = `
                        <img src="${product.img}">
                        <h3>${product.nombre}</h3>
                        <p>${product.precio} $</p>`
                        ;
                
                
                        div.append(contenido);
                
                        let comprar = document.createElement("button");
                        comprar.innerText = "Comprar";
                        comprar.className = "comprar"
                
                        contenido.append(comprar);
                
                
                        comprar.addEventListener("click", () =>{
                        
                            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)
                        console.log(repeat);
                            if(repeat){
                                carrito.map((prod) =>{
                                    if(prod.id === product.id){
                                        prod.cantidad++;
                                    }
                                });
                            }else{
                                carrito.push({
                                    nombre: product.nombre,
                                    precio: product.precio,
                                    id: product.id,
                                    cantidad: product.cantidad,
                                });
                                saveLocal();
                            }
                
                            comprar.classList.add('agregado')
                            comprar.innerText = "Agregado";
                
                            setTimeout(() => {
                                comprar.innerText = "Comprar";
                                comprar.classList.remove('agregado')
                            }, 1500)
                        
                            
                        })
                    };
                }
                
                //---------------------CARRITO---------------------//
                
                let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                const verCarrito = document.getElementById("verCarrito");
                const modalContainer = document.getElementById("modalContainer");
                
                
                //---------------------MOSTRAR CARRITO DE COMPRAS---------------------//
                const pintarCarrito = () =>{ 
                    modalContainer.innerHTML = "";
                    modalContainer.style.display = "flex";
                
                        const modalHeader = document.createElement("div");
                        modalHeader.className = "modalHeader"
                        modalHeader.innerHTML = `
                            <h2 class="modalHeaderTitle">Carrito.</h2>
                            `
                    ;
                    modalContainer.append(modalHeader);
                
                    const modalButton = document.createElement("h2");
                    modalButton.innerText = "X";
                    modalButton.className = "modalHeaderButton";
                
                    modalButton.addEventListener("click", () => {
                        modalContainer.style.display = "none";
                    })
                
                    modalHeader.append(modalButton);
                
                    carrito.forEach((product) =>{
                        let carritoContent = document.createElement("div");
                        carritoContent.className = "modalContent";
                        carritoContent.innerHTML = `
                        <h3>${product.nombre}</h3>
                        <p>Cantidad: ${product.cantidad}</p>
                        <p>${product.precio} $</p>
                
                        `;
                        modalContainer.append(carritoContent);
                        
                        let eliminar = document.createElement("span");
                
                        eliminar.innerText = "✖";
                        eliminar.className = "deleteProduct";
                        carritoContent.append(eliminar);
                        eliminar.addEventListener("click", eliminarProducto);
                    })
                    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
                
                    const totalBuying = document.createElement("div");
                    totalBuying.className = "totalContent";
                    totalBuying.innerHTML = `Total a pagar: ${total} $`;
                    modalContainer.append(totalBuying);
                
                    const buttonCompra = document.createElement("button");
                    buttonCompra.className = "botonCompra";
                    buttonCompra.innerText = "Pagar";
                    modalContainer.append(buttonCompra);
                
                    buttonCompra.addEventListener('click', () =>{
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Compra realizada\n Disfrute sus productos😉',
                            showConfirmButton: false,
                            timer: 2500
                          })
                          
                    });
                }
                
                verCarrito.addEventListener("click", pintarCarrito);
                
                const eliminarProducto = () => {
                    const foundId= carrito.find((element) => element.id);
                    console.log(foundId);
                    carrito = carrito.filter((carritoId) =>{
                        return carritoId !== foundId;
                    }); 
                    saveLocal();
                    pintarCarrito();
                
                }
                
                //---------------------lOCAL STORAGE---------------------//
                const saveLocal = () =>{
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                };
                
                
                /*   Creador de Gondolas por categoria   */ 
                
                filtroAllObjects(mapeoComida,div1, "Comida")
                filtroAllObjects(mapeoFrutaVerdura, div2,"Frutas y Verduras")
                filtroAllObjects(mapeoPanaderia, div3,"Panaderia")
                filtroAllObjects(mapeoFiambreria, div4,"Fiambreria")
                filtroAllObjects(mapeoInstruCocina, div5,"Instrumentos de Cocina")
                filtroAllObjects(mapeoGolosinas, div6,"Golosinas")
                filtroAllObjects(mapeoCafeteria, div7,"Cafeteria")
                filtroAllObjects(mapeoHigiene, div8,"Higiene")
                
                crearH2("titulo1","Comida")
                crearH2("titulo2","Frutas y Verduras")
                crearH2("titulo3","Panaderia")
                crearH2("titulo4","Fiambreria")
                crearH2("titulo5","Instrumentos de Cocina")
                crearH2("titulo6","Golosinas")
                crearH2("titulo7","Cafeteria")
                crearH2("titulo8","Higiene")
                

            })
            .catch((err) => console.log(err))   
    )
    .catch((err) => console.log(err));



//-------------Array contenedor de productos--------------//

//---------------------Funciones de filtrado---------------------//
function filtroObjetos(objeto, categoria ){
    let variable1 = objeto.filter((fun1) => fun1.tipo.includes(categoria));
    return variable1;
}

const mapeoComida = filtroObjetos(productosTienda, "comida");
const mapeoFrutaVerdura = filtroObjetos(productosTienda, "frutas y verduras");
const mapeoPanaderia = filtroObjetos(productosTienda, "panaderia");
const mapeoFiambreria = filtroObjetos(productosTienda, "fieambreria");
const mapeoInstruCocina = filtroObjetos(productosTienda, "instrumentos de cocina");
const mapeoGolosinas = filtroObjetos(productosTienda, "golosinas");
const mapeoCafeteria = filtroObjetos(productosTienda, "cafeteria");
const mapeoHigiene = filtroObjetos(productosTienda, "higiene");

/*-----------------         Funciones creadoras de DOM           -----------------*/
function contenedorDiv(id){
    let variable1 = document.getElementById(id);
    return variable1;
}

function crearH2(id, hoja){
    let arbol = document.getElementById(id)
    let arbol2 = document.createElement("h2");
    arbol2.className = "pajaro";
    arbol2.innerText = hoja;
    
    arbol.append(arbol2);
}


let div1 = contenedorDiv("shopContent1");
let div2 = contenedorDiv("shopContent2");
let div3 = contenedorDiv("shopContent3");
let div4 = contenedorDiv("shopContent4");
let div5 = contenedorDiv("shopContent5");
let div6 = contenedorDiv("shopContent6");
let div7 = contenedorDiv("shopContent7");
let div8 = contenedorDiv("shopContent8");



function filtroAllObjects(array, div){
    for(const product of array){
        let contenido = document.createElement("div");
        contenido.className = "card";
        contenido.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>`
        ;


        div.append(contenido);

        let comprar = document.createElement("button");
        comprar.innerText = "Comprar";
        comprar.className = "comprar"

        contenido.append(comprar);


        comprar.addEventListener("click", () =>{
        
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)
        console.log(repeat);
            if(repeat){
                carrito.map((prod) =>{
                    if(prod.id === product.id){
                        prod.cantidad++;
                    }
                });
            }else{
                carrito.push({
                    nombre: product.nombre,
                    precio: product.precio,
                    id: product.id,
                    cantidad: product.cantidad,
                });
                saveLocal();
            }

            comprar.classList.add('agregado')
            comprar.innerText = "Agregado";

            setTimeout(() => {
                comprar.innerText = "Comprar";
                comprar.classList.remove('agregado')
            }, 1500)
        
            
        })
    };
}

//---------------------CARRITO---------------------//

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");


//---------------------MOSTRAR CARRITO DE COMPRAS---------------------//
const pintarCarrito = () =>{ 
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";

        const modalHeader = document.createElement("div");
        modalHeader.className = "modalHeader"
        modalHeader.innerHTML = `
            <h2 class="modalHeaderTitle">Carrito.</h2>
            `
    ;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h2");
    modalButton.innerText = "X";
    modalButton.className = "modalHeaderButton";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalButton);

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modalContent";
        carritoContent.innerHTML = `
        <h3>${product.nombre}</h3>
        <p>Cantidad: ${product.cantidad}</p>
        <p>${product.precio} $</p>

        `;
        modalContainer.append(carritoContent);
        
        let eliminar = document.createElement("span");

        eliminar.innerText = "✖";
        eliminar.className = "deleteProduct";
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", eliminarProducto);
    })
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "totalContent";
    totalBuying.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalBuying);

    const buttonCompra = document.createElement("button");
    buttonCompra.className = "botonCompra";
    buttonCompra.innerText = "Pagar";
    modalContainer.append(buttonCompra);

    buttonCompra.addEventListener('click', () =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Compra realizada\n Disfrute sus productos😉',
            showConfirmButton: false,
            timer: 2500
          })
          
    });
}

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId= carrito.find((element) => element.id);
    console.log(foundId);
    carrito = carrito.filter((carritoId) =>{
        return carritoId !== foundId;
    }); 
    saveLocal();
    pintarCarrito();

}

//---------------------lOCAL STORAGE---------------------//
const saveLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


/*   Creador de Gondolas por categoria   */ 

filtroAllObjects(mapeoComida,div1, "Comida")
filtroAllObjects(mapeoFrutaVerdura, div2,"Frutas y Verduras")
filtroAllObjects(mapeoPanaderia, div3,"Panaderia")
filtroAllObjects(mapeoFiambreria, div4,"Fiambreria")
filtroAllObjects(mapeoInstruCocina, div5,"Instrumentos de Cocina")
filtroAllObjects(mapeoGolosinas, div6,"Golosinas")
filtroAllObjects(mapeoCafeteria, div7,"Cafeteria")
filtroAllObjects(mapeoHigiene, div8,"Higiene")

crearH2("titulo1","Comida")
crearH2("titulo2","Frutas y Verduras")
crearH2("titulo3","Panaderia")
crearH2("titulo4","Fiambreria")
crearH2("titulo5","Instrumentos de Cocina")
crearH2("titulo6","Golosinas")
crearH2("titulo7","Cafeteria")
crearH2("titulo8","Higiene")



