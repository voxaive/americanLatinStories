var circulos = document.getElementsByClassName('circ');
var fondos = document.getElementsByClassName('imgsFond');
var fondos2 = document.getElementsByClassName('imgsFond2');
var circulos2 = document.getElementsByClassName('circ2');

var lis = document.querySelectorAll('li')
for(let i = 0; i < lis.length; i++){
    lis[i].addEventListener('mouseover', () => lineaMenu(lis[i]));
    lis[i].addEventListener('mouseout', () => lineaMenuSacar(lis[i]));
}

var indices = {
    uno: 0,
    dos: 1,
    tres: 2,
    cuatro: 3,
    cinco: 4,
};
var indicesH = {
    huno: 0,
    hdos: 1,
    htres: 2,
    hcuatro: 3,
    hcinco: 4
}
var capitulos = [
    `
    <h2>CAPITULO I:</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl ut vestibulum finibus, elit ligula efficitur elit, ac facilisis odio elit vel felis. Maecenas cursus, arcu a suscipit semper, felis justo tincidunt neque, vel volutpat sapien arcu et odio. Quisque id magna ac massa bibendum interdum sit amet vitae sapien. Aenean sit amet urna id dolor aliquet consequat in ac turpis. Nullam vestibulum auctor turpis vel pellentesque. Phasellus at bibendum ligula. Nullam efficitur</p>
    `
    ,
    `
    <h2>CAPITULO II:</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl ut vestibulum finibus, elit ligula efficitur elit, ac facilisis odio elit vel felis. Maecenas cursus, arcu a suscipit semper, felis justo tincidunt neque, vel volutpat sapien arcu et odio. Quisque id magna ac massa bibendum interdum sit amet vitae sapien. Aenean sit amet urna id dolor aliquet consequat in ac turpis. Nullam vestibulum auctor turpis vel pellentesque. Phasellus at bibendum ligula. Nullam efficitur</p>
    `,
    `
    <h2>CAPITULO III:</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl ut vestibulum finibus, elit ligula efficitur elit, ac facilisis odio elit vel felis. Maecenas cursus, arcu a suscipit semper, felis justo tincidunt neque, vel volutpat sapien arcu et odio. Quisque id magna ac massa bibendum interdum sit amet vitae sapien. Aenean sit amet urna id dolor aliquet consequat in ac turpis. Nullam vestibulum auctor turpis vel pellentesque. Phasellus at bibendum ligula. Nullam efficitur</p>
    `,
    `
    <h2>CAPITULO IV:</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl ut vestibulum finibus, elit ligula efficitur elit, ac facilisis odio elit vel felis. Maecenas cursus, arcu a suscipit semper, felis justo tincidunt neque, vel volutpat sapien arcu et odio. Quisque id magna ac massa bibendum interdum sit amet vitae sapien. Aenean sit amet urna id dolor aliquet consequat in ac turpis. Nullam vestibulum auctor turpis vel pellentesque. Phasellus at bibendum ligula. Nullam efficitur</p>
    `,
    `
    <h2>CAPITULO V:</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl ut vestibulum finibus, elit ligula efficitur elit, ac facilisis odio elit vel felis. Maecenas cursus, arcu a suscipit semper, felis justo tincidunt neque, vel volutpat sapien arcu et odio. Quisque id magna ac massa bibendum interdum sit amet vitae sapien. Aenean sit amet urna id dolor aliquet consequat in ac turpis. Nullam vestibulum auctor turpis vel pellentesque. Phasellus at bibendum ligula. Nullam efficitur</p>
    `
];
for (let i = 0; i < circulos.length; i++) {
    circulos[i].addEventListener('mouseover', () => animacionCaps(circulos[i].classList[1]));
    circulos[i].addEventListener('mouseout', () => retirarAnimsCaps(circulos[i].classList[1]));

    circulos2[i].addEventListener('mouseover', () => animacionCaps(circulos2[i].classList[1]));
    circulos2[i].addEventListener('mouseout', () => retirarAnimsCaps(circulos2[i].classList[1]));

    fondos[i].addEventListener('mouseover', () => animacionCaps(fondos[i].classList[1]));
    fondos[i].addEventListener('mouseout', () => retirarAnimsCaps(fondos[i].classList[1]));

    fondos2[i].addEventListener('mouseover', () => animacionCaps(fondos2[i].classList[1]));
    fondos2[i].addEventListener('mouseout', () => retirarAnimsCaps(fondos2[i].classList[1]));
}
function lineaMenu(lis){
    console.log(lis)
    lis.querySelector('hr').style.visibility = 'visible';
    lis.querySelector('hr').style.width = '100%';
}
function lineaMenuSacar(lis){
    lis.querySelector('hr').style.visibility = 'hidden';
    lis.querySelector('hr').style.width = '0%';
}

function animacionCaps(numero) {
    let imgsFondos = document.getElementsByClassName('imgsFond');
    let imgsFondos2 = document.getElementsByClassName('imgsFond2');
    let fondoSec = document.getElementById('capitulos')
    if (numero in indices) {
        const index = indices[numero];
        imgsFondos[index].style = "width: 300px; height: 25%";
        circulos[index].style.background = "red";
    }
    if (numero in indicesH) {
        const index = indicesH[numero];
        let stringFondo = 'cap' + (index+1) + '.png';
        console.log(stringFondo)
        imgsFondos2[index].style = "width: 400px; height: 85%";
        circulos2[index].style.background = "red";
        fondoSec.style.setProperty('background-image', `url('imagenes/${stringFondo}')`, 'important');
        document.getElementById('textoCaps').innerHTML = capitulos[index]
    }
}

function retirarAnimsCaps(numero) {
    let imgsFondos = document.getElementsByClassName('imgsFond');
    let imgsFondos2 = document.getElementsByClassName('imgsFond2');

    if (numero in indices) {
        const index = indices[numero];
        imgsFondos[index].style = "width: 250px;";
        circulos[index].style.background = "white";
    }

    if (numero in indicesH) {
        const index = indicesH[numero];
        imgsFondos2[index].style = "width: 300px; height: 200px";
        circulos2[index].style.background = "white";
    }

}

window.addEventListener('scroll', () => {
    const header = document.getElementById('barraNav')
    if (window.scrollY > 50) {
        header.style.background = "black";
        header.style.borderBottom = '2px solid white';

    } else {
        header.style.background = "none";
        header.style.border = "none";
    }
});



