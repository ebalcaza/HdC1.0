import './Home.css'
import element2 from '../../assets/logos/logoHojaRecorte2.webp'
import element3 from '../../assets/logos/logoEcoPulse1.webp'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return (
        <div className="a1   " id="centerHome">
         
        
     

       
         <div className='seccion2  '>


                <div className='cajasGrandes'>

                <div className='panelIzq '>
                    <h1 id="tituloPanelIzq">EcoEmisiones</h1>
                    <img id="logoPanelIzq" src={element2} alt="" />
                    <p id="pPanelIzq">
                        Hace el calculo de cuanto estas aportando a la huella de carbono en tu hogar, empresa, grupo.
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

                       <p id="ultimoP">
                    
                            <li>El equipo de desarrollo</li>
                            <li>Inicio</li>
                            <li>Compras</li>
                            <li>Otro depto</li>
                          
                        </p>
                </div>

             </div>

            <div className='contenedorBotoneHome '>
                        <label className='labelFormHome'>Bienvenido, selecciona una opción.</label>
                        <button className=' btn1'>Ingresar</button>
                        <label className='labelFormHome'>¿Aun no tienes cuenta?.</label>
                        <button className=' btn1'>Registrarse</button>
            </div>
       

      
      
        </div>

       
           
   </div>
   

    );

}