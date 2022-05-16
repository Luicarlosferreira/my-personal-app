
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade'; 
import Section from '../components/Section'




  const Main = ()=> {

    return(   
        
        
        <div className='MainInformation'>
        <div className='TextsContent'>
        <Fade left>
        <h1>Olá.</h1>
        <h3>Me chamo Luis Carlos Ferreira.</h3>
        <p>Sou Desenvolvedor Web, em busca todos os dias de ser um ser humano melhor, tanto no mundo, como na profissão que amo. Programar vai além de barreiras, além do que imaginamos, é mais do que apenas resolver problemas. Tenho conhecimento com as techs Html-Css-JavaScript + ReactJs + BootStrap + NodeJs-MongoDB. Possuo projetos dinâmicos/estáticos em portifólio Github.
        </p>
        <br></br>
        <p>
         Aprender nunca foi tão incrível. Buscamos sempre saber mais. Quando estamos diante de desafios, nosso cérebro anseia por conhecimento e desejo de quebrar barreiras dos problemas em que a programação e a vida trazem para todos.
        </p>
        </Fade>
        </div>
          
        
        
        <Section></Section>
        

        



      </div>


        

    )
            
          
    }



export default Main;