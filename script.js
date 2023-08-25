
class producto{
    constructor(id, tipo, nombre, precio, cantidad, img ){
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.img = img;
        
    }
}

/* ---------------------------       Objetos       -------------------------- */

// Cafeteria
const azucar = new producto(1, "cafeteria", "azucar", 300, 1, "https://nicju.com.ar/wp-content/uploads/images/AZU019.jpg");
const te = new producto(2, "cafeteria", "te", 266, 1, "https://www.conradomarket.com.ar/images/000000000000963762489ALMACEN-Te-LA-VIRGINIA-x-50Saq1.jpg");
const cafe = new producto(3, "cafeteria", "cafe", 253, 1, "https://www.lavirginia.com.ar/wp-content/uploads/2021/11/clasico-molido-torrado-1000.jpg");
const yerbaMate = new producto(4, "cafeteria", "yerba mate", 600, 1, "https://lespanola.com/cdn/shop/products/b17a046bab97695dabcc9b7f9075bdd3.jpg?v=1681589925&width=480");
const leche = new producto(5, "cafeteria", "leche", 358, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSPzKTUkLVALA2nRmwQGSze7hxVb2coFkDw&usqp=CAU");
const edulcorante = new producto(6, "cafeteria", "edulcorante", 320, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStFuuCAVPiV-lFB0a485kne2HtVN5lt_8cAA&usqp=CAU");

//Golosinas
const chocolate = new producto(7, "golosinas", "chocolate", 500, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qBEL_2lcFJz0_Q6OpHMnez_aom7hh1icqA&usqp=CAU");
const alfajor = new producto(8, "golosinas", "alfajor", 250, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1loc526hF2nmDOFqbwCJLOm6hIXEHBygaQ&usqp=CAU");
const chicle = new producto(9, "golosinas", "chicle", 120, 1, "https://arcorencasa.com/wp-content/uploads/2023/06/20230615-6901.jpg");
const caramelo = new producto(10, "golosinas", "caramelo", 20, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8fiRmtIFVMaG_MRHumf1LsDqPSaQ73zVlQ&usqp=CAU");

//Higiene | Baño
const papelHigenico = new producto(11, "higiene", "papel higienico", 543, 1, "https://geant.vteximg.com.br/arquivos/ids/275613-700-700/687889-1.jpg?v=637598755210570000");
const jabon = new producto(12, "higiene", "jabon", 200, 1, "https://www.protex-soap.com/content/dam/cp-sites/personal-care/protex-relaunch/latam/products/jabon-en-barra-protex-vitamina-e.jpg");
const shampoo = new producto(13, "higiene", "shampoo", 470, 1, "https://farmacityar.vteximg.com.br/arquivos/ids/241821-1000-1000/220335_shampoo-pantene-miracle-fuerza-y-reconstruccion-x-400-ml___imagen-1.jpg?v=638188273621570000");
const acondicionador = new producto(14, "higiene", "acondicionador", 450, 1, "https://farmacityar.vteximg.com.br/arquivos/ids/237621-1000-1000/147256_acondicionador-oleo-extraordinario-nutricion-universal-x-400-ml__imagen-1.jpg?v=638120673182700000");
const perfume = new producto(15, "higiene", "perfume", 800, 1, "https://http2.mlstatic.com/D_NQ_NP_899519-MLA45731604734_042021-O.webp");


//Herramientas de Cocina
const papelDeCocina = new producto(16, "instrumentos de cocina", "papel de cocina", 630, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjxmYtyI1TKAEwIHK4Qj9MdQsmgCGJpJ-Cg&usqp=CAU");
const repasador = new producto(17, "instrumentos de cocina", "repasador", 700, 1, "https://ardiaprod.vtexassets.com/arquivos/ids/185911/Repasador-Toalla-Suave-1-Un-_1.jpg?v=637427575337500000");
const esponjaDeConina = new producto(18, "instrumentos de cocina", "esponja", 200, 1, "https://ofishop.com/1003-large_default/esponja-de-fibra-para-cocina-.jpg");

//Fieambreria
const queso = new producto(19, "fieambreria", "queso", 400, 1, "https://sakoteacasa.com.ar/wp-content/uploads/2021/09/Captura-2.jpg");
const jamon = new producto(20, "fieambreria", "jamon", 550, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KcXzgOUfOe7K9DxLks5riWWu1h8S3RK5OGekMhl8BW6xkcNJahlJwLmYJpXxkybghyM&usqp=CAU");
const mortadela = new producto(21, "fieambreria", "mortadela", 610, 1, "https://carrefourar.vtexassets.com/arquivos/ids/308172/7790079000904_E02.jpg?v=638143147334470000");

//Panaderia
const pan = new producto(22, "panaderia", "pan", 600, 1, "https://www.portafolio.co/files/article_multimedia/uploads/2016/02/18/56c6395e51aa8.jpeg");
const galletitas = new producto(23, "panaderia", "galletitas", 430, 1, "https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/t/e/terrabusi.png");
const medialunas = new producto(24, "panaderia", "medialunas", 900, 1, "https://www.nunziopanificadora.com/wp-content/uploads/2020/05/medialuna-dulce.jpg");

//Frutas y Verduras 
const papa = new producto(25, "frutas y verduras", "papa", 300, 1, "https://clinicacisem.com/wp-content/uploads/2019/04/patatas.jpg");
const tomate = new producto(26, "frutas y verduras", "tomate", 590, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vUXNYZRi30jyka7E85F0oQth-yHC6ANJ6z0yrh7d3Kqx4C2hMswCEU-ZYHF5VEmo1a0&usqp=CAU");
const lechuga = new producto(27, "frutas y verduras", "lechuga", 230, 1, "https://biotrendies.com/wp-content/uploads/2015/07/lechuga.jpg");
const zanaoria = new producto(28, "frutas y verduras", "zanahoria", 600, 1, "https://5aldia.cl/wp-content/uploads/2018/03/zanahoria.jpg");
const arroz = new producto(29, "frutas y verduras", "arroz", 355, 1, "https://superlago.com.ar/wp-content/uploads/2020/10/Gallo-500gr-1.png");
const manzana = new producto(30, "frutas y verduras", "manzana", 485, 1, "https://biotrendies.com/wp-content/uploads/2015/06/manzana.jpg");

//ComidaGeneral
const aceite = new producto(31, "comida", "aceite", 630, 1,"https://jumboargentina.vtexassets.com/arquivos/ids/591712/Aceite-Girasol-Pureza-0-9l-1-850473.jpg?v=637290848777400000");
const mayonesa = new producto(32, "comida", "mayonesa", 280, 1, "https://assets.unileversolutions.com/v1/42830388.png");
const fideos = new producto(33, "comida", "fideos", 364, 1, "https://marolio.com.ar/sites/default/files/styles/blog_image/public/fideos-2.jpg?itok=vb4alT6i");
const miel = new producto(34, "comida", "miel", 451, 1, "https://biotrendies.com/wp-content/uploads/2015/07/Miel.jpg");

//Carnes
const carne = new producto(35, "carnes", "carne", 1400, 1, "https://magazine.medlineplus.gov/images/uploads/main_images/red-meat-v2.jpg");
const pollo = new producto(36, "carnes", "pollo", 1100, 1, "https://www.carnave.com.ar/wp-content/uploads/2020/05/Pollo-entero.jpg");
const pescado = new producto(37, "carnes", "pescado", 1600, 1, "https://img.freepik.com/foto-gratis/pescado-fresco-blanco_144627-24519.jpg?w=2000");
const lataAtun = new producto(38, "carnes", "lata de atun", 587, 1, "https://http2.mlstatic.com/D_NQ_NP_979914-MLA69842868592_062023-O.webp");
const lataAnchoas = new producto(39, "carnes", "lata de anchoas", 563, 1, "https://statics.dinoonline.com.ar/imagenes/large_460x460/2420067_l.jpg");


//-------------Array contenedor de productos--------------//
const productosTienda =[carne, pollo, pescado, lataAnchoas, lataAtun, aceite, mayonesa, fideos, miel, papa, tomate, lechuga, zanaoria, arroz, manzana, pan, galletitas, medialunas, queso, mortadela, jamon, papelDeCocina, repasador, esponjaDeConina, cafe, te, azucar, edulcorante, leche, yerbaMate, papelHigenico, jabon, shampoo, acondicionador,perfume, chocolate, chicle, alfajor, caramelo];

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



