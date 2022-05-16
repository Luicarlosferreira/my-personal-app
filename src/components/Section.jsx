
import Fade from 'react-reveal/Fade'; 

const Section = () =>{
    return (
        <Fade bottom>
        <div className="techsContent">



            <div className="logoInformation">Habilidades </div>

            
            <div className="badgesContent">
                <div className='contentbadgeOne'>
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5 Badge"/>
                

                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Css3 Badge"/>
                

                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
                

                <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Java Script Badge" />
                
               
                <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node Js Badge"/>
                </div>







                <div className='contentbadgeTwo'>
                <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Node Express Badge" />
                

                <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
                " alt="BootStrap Badge" />

                <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDb Badge" />
                </div>

            </div>
        </div>
        </Fade>
    )
}


export default Section ; 