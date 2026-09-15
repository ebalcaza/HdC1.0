import './Home.css'
import element2 from '../../assets/logos/logoHojaRecorte2.webp'
import element3 from '../../assets/logos/logoEcoPulse1.webp'
import { useNavigate } from 'react-router' // 1. Importar el hook de navegación

export default function Home() {
    const navigate = useNavigate() // 2. Inicializar la función navigate
    return (
        <div className="a1   " id="centerHome">
         
        
     

       
         <div className='seccion2  '>


                <div className='cajasGrandes'>

                <div className='panelIzq '>
                    <h1 id="tituloPanelIzq">EcoEmisiones</h1>
                    <img id="logoPanelIzq" src={element2} alt="" />
                    <p id="pPanelIzq">
                        Hace el calculo de cuanto estas aportando a la huella de carbono en tu hogar, empresa, grupo, o evento?... Otros textos
                          </p>
                </div>

                <div className='panelDer '>
             
                    <img id="logoPanelDer" src={element3}  alt="" />
                    <h5 id="h5PanelDerecho">En tu hogar, organización o grupo.</h5>
                
                    <h5 id="h1PanelDerecho">MIDE TUS EMISIONES DE CO2</h5>
                    <h4 id="h4PanelDerecho">Compara y saca tus conclusiones para ayudar contaminando menos</h4>
                  <br />
                  <br />
                
                    <p id="pPanelDer">
                       Crea tu cuenta, donde podras agregar tus domicilios, vehiculos o grupos de usuarios para generar reportes que te daran los resultados del total de emisiones de dioxido de carbono enviados al ambiente.
                       </p>
                </div>

             </div>
        <div className='contenedorBotoneHome '>
         <button 
              className=' btn1' 
            onClick={() => navigate('/Login')} // 3. Agregar el evento onClick
        >
          Ingresar
        </button>

            <button 
            className=' btn1'
            onClick={() => navigate('/registro')} // (Opcional) Para cuando crees la vista de registro
            >
            Registrarse
            </button>
        </div>
            
                

        </div>
   </div>
    );

}