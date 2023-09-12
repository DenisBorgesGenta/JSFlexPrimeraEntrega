
function SimuladorHojaDePersonaje()

{
const InicioHoja = confirm('¿Te gustaría iniciar con la creación de tu hoja de personaje?')
if(InicioHoja == false)
{alert("¡Aquí te esperamos cuando estés listo!")};


let IngresarNombre
if(InicioHoja == true)
{IngresarNombre = prompt('Ingresa el nombre de tu personaje.')}

let IngresarEdad
if(IngresarNombre != null)
{IngresarEdad = prompt('Ingresa su edad.');
while((isNaN(IngresarEdad)))
{IngresarEdad = prompt('La edad debe ser de caracter numérico. Vuelve a ingresarla.')}}


let SeleccionRacial
if(IngresarEdad != null)
{while(SeleccionRacial != 'humano' &&SeleccionRacial !='elfo' &&SeleccionRacial !='enano' &&SeleccionRacial !='mestizo' &&SeleccionRacial !='drow' )
{SeleccionRacial = prompt('Ingresa una raza de la siguiente lista: Humano \nElfo \nEnano \nMestizo \nDrow').toLowerCase();}}


const IngresarInventario = ['• Armadura de cuero', '• Daga', '• Ración de alimentos', '• Monedero con 20 monedas de plata'];
if(SeleccionRacial != null)
{IngresarInventario.push('• ' + prompt('Éste es tu inventario inicial: \n • Armadura de cuero \n • Daga \n • Ración de alimentos \n • Monedero con 20 monedas de plata\n\n Tienes permitido agregar un ítem propio adicional con el cual comenzaras tu aventura.'));}


const HojaFinal = ['Nombre: '+IngresarNombre,'Edad: '+IngresarEdad,'Raza: '+SeleccionRacial,'Posesiones iniciales: \n'+IngresarInventario.join('\n')]

if(IngresarNombre != null && IngresarEdad != null && SeleccionRacial != null && IngresarInventario != null)
{alert('¡Ésta es tu hoja de personaje!\n\n'+HojaFinal.join('\n'))}
}


SimuladorHojaDePersonaje();

function ComentariosAdicionales(){
let ConfirmarFeedback = confirm('Gracias por visitarnos. ¿Te gustaría aportar feedback para que podamos seguir mejorando nuestra herramienta?');
{if(ConfirmarFeedback == true)
{for (let i=0; i<3; i++)
{let IngresarComentarios = prompt('Déjanos hasta tres comentarios. Ingresa "ESC" para cancelar.' ).toUpperCase();
if(IngresarComentarios == 'ESC'){break;}
console.log(IngresarComentarios)}}}}

ComentariosAdicionales();