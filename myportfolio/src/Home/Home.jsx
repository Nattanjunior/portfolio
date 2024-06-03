import './Home.css'
import logo from '../assets/Logo.svg' 
import Imagefundo from '../assets/Background-Pattern.svg'
import imageMe from '../assets/Image-me.svg'
export default function Home(){
    return(
        <>
        <header>
            <div className='logo'>
                <img src={logo} alt=""/>
                <p> <strong>Nataniel</strong> J u n i o r </p>
            </div>
            <nav>
                <button><a href="">Sobre mim</a></button>
                <button><a href="">Experiência</a></button>
                <button><a href="">Projetos</a></button>
            </nav>
        </header>

        <main>
            <div className='image-fundo'>
                <img src={Imagefundo} alt="" />
            </div>

            <div className='Modal'>
             

            </div>

            <section className='apresentacao'>
                <div><img src={imageMe} alt="Minha Imagem" /></div>
                <h1>Nataniel Junior!</h1>
                <h2>Software Engineer</h2>
                <p>Desenvolvedor Full-Stack apaixonado com foco no desenvolvimento Mobile, dedicado à criação de aplicativos móveis elegantes e fáceis de usar. Com experiêmcia em desenvolvimento Web.</p>
                <button>Contato</button>
            </section>


            <section className='sobre-mim'>
             <h1></h1>
             <h2></h2>
             <p></p>
             <p></p>

            </section>


            <section>
                <h1></h1>
                <h2></h2>
                <div>
                    <div>
                     <h1></h1>
                     <p></p>
                    </div>
                </div>
                <p></p>

            </section>


            <section>
                <h1></h1>
                <h2></h2>

            </section>
        </main>



        <footer>
            
        </footer>
        </>
    )
}