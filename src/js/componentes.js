
import '../css/componentes.css'

export const saludar = (nombre) => {

    console.log('creando etiquetas h1' );
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre} cómo andas tú, querido??`;
    document.body.append( h1 );
}