import './Home.css'
import logo from '../assets/Logo.svg' 
import Imagefundo from '../assets/Background-Pattern.svg'
import imageMe from '../assets/Image-me.svg'
import Imageproject1 from '../assets/download-image-rocketflix.png'
import Imageproject2 from '../assets/download-image-twitter.png'


export default function Home(){
 
    return(
        <>
        <header>
            <div className='logo'>
                <img src={logo} alt=""/>
                <p> <strong>Nataniel</strong> J u n i o r </p>
            </div>
            <nav>
                <button><a href="#About-me">Sobre mim</a></button>
                <button><a href="#experience">Experiência</a></button>
                <button><a href="#projects">Projetos</a></button>
            </nav>
        </header>

        <main>
            <div className='image-fundo'>
                <img src={Imagefundo} alt="" />
            </div>

            
            
            <section className='apresentacao'>
                <div><img src={imageMe} alt="Minha Imagem" /></div>
                <h1>Nataniel Junior!</h1>
                <h2>Software Engineer</h2>
                <p>Desenvolvedor Full-Stack apaixonado com foco no desenvolvimento Mobile, dedicado à criação de aplicativos móveis elegantes e fáceis de usar. Com experiência em desenvolvimento Web.</p>
                <button> <a href="#contacts">Contato</a></button>
            </section>


            <section className='sobre-mim' aria-labelledby="Abou-me">
             <h1 id='About-me'>SOBRE MIM</h1>
             <h2>E X P L O R E  N O W</h2>
             <p>Como um engenheiro de software apaixonado, sou criativo e comunicativo. Atualmente imerso no mundo dinâmico do Desenvolvimento Mobile, minha experiência gira em torno do React Native, onde combino perfeitamente tecnologia com inovação.</p>
             <p>Com entusiasmo por criar soluções elegantes, navego no cenário em constante evolução do desenvolvimento de software. Minha jornada envolve traduzir conceitos em código, criar experiências de usuário perfeitas e ultrapassar constantemente os limites do que é possível</p>

            </section>


            <section className='experiencia'aria-labelledby="experience">
                <h1 id='experience'>EXPERIÊNCIA</h1>
                <h2>E X P L O R E  N O W</h2>
                <div className='div-one'>
                    <h1><strong>Desenvolvedor</strong> web/mobile</h1>
                    <p>JANEIRO 2024 - MOMENTO, MACEIÓ-AL</p>
                </div>
                <p>Atualmente, estou trabalhando como Freelancer, como desenvolvedor React.js Com pouco mais de 1 ano de experiência, tenho uma base sólida na criação de aplicativos móveis e web dinâmicos e responsivos.</p>
                <div className='div-two'>
                 <span>React Native</span>
                 <span>React Js</span>
                 <span>JavaScript</span>
                 <span>TypeScript</span>
                </div>
               

            </section>


            <section className='projetos' aria-labelledby="projects">
                <h1 id='projects'>PROJETOS</h1>
                <h2>E X P L O R E  N O W</h2>

                <div className='descricao-projetos'>
                    <div>
                        <a href="https://rocketflix-e5b2.vercel.app/" target='_blank'><img src={Imageproject1} alt="" /></a>
                        <div>
                         <h3>RocketFlix</h3>
                         <p>Desenvolvi esse projeto de aplicação web utilizando React JS, Node.JS e Express.JS. Um aplicação que exibe informações de filmes de forma interativa, título, descrição do filme, avaliação, popularidade e imagem.</p>
                        </div>
                        
                    </div>
                        
                    <div>
                        <a href="https://app-twitter-1kf2.vercel.app/" target='_blank'><img src={Imageproject2} alt="" /></a>
                        <div>
                         <h3>Twitter</h3>
                         <p>Uma réplica simples do Twitter feita em React. Possui um sidebar com links e funcionalidades básicas de twittar e responder a tweets de outras pessoas.</p>
                        </div>
                        
                    </div>

                    <div>
                        <a href=""><img src="" alt="" /></a>
                        <div>
                         <h3>RocketFlix</h3>
                         <p>afknvajfn</p>
                        </div>
                        
                    </div>

                    <div>
                        <a href=""><img src={Imageproject1} alt="" /></a>
                        
                        <div>
                         <h3>RocketFlix</h3>
                         <p>afknvajfn</p>
                        </div>
                        
                    </div>
                </div>

            </section>
        </main>



        <footer aria-label='contacts'>
            <div id='contacts'>
             <a href="https://github.com/Nattanjunior" target='_blank'><ion-icon name="logo-github" color='#fff'></ion-icon></a>
             <a href="https://www.linkedin.com/in/nataniel-junior-20365a264/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
             <a href="https://www.instagram.com/nattan_jr0/?next=%2F" target='-blank'><ion-icon name="logo-instagram"></ion-icon></a>
             
            </div>
            <div className='footer-contact' >
               <p>fnatanieljunior@gmail.com</p> 
               <p>(82) 99634-7121</p>
            </div>
        </footer>
        </>
    )
}