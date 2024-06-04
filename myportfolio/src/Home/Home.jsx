import React, { useState ,useRef} from 'react'
import './Home.css'
import logo from '../assets/Logo.svg' 
import Imagefundo from '../assets/Background-Pattern.svg'
import imageMe from '../assets/Image-me.svg'
import Modal from '../Components/Modal'


export default function Home(){
 const myelementRef = useRef()
 const [handleModal, setHandleModal] = useState(true)

 const MostrarModal = ()=>{
   myelementRef.current.style.position = 'absolute';
   myelementRef.current.style.display = 'block';
   document.body.style.filter = 'blur(15px)';
}


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

            <div className ='handlemodal' ref={myelementRef}>
                <Modal/>
            </div>
            
            <section className='apresentacao'>
                <div><img src={imageMe} alt="Minha Imagem" /></div>
                <h1>Nataniel Junior!</h1>
                <h2>Software Engineer</h2>
                <p>Desenvolvedor Full-Stack apaixonado com foco no desenvolvimento Mobile, dedicado à criação de aplicativos móveis elegantes e fáceis de usar. Com experiência em desenvolvimento Web.</p>
                <button onClick={MostrarModal}>Contato</button>
            </section>


            <section className='sobre-mim'>
             <h1>SOBRE MIM</h1>
             <h2>E X P L O R E  N O W</h2>
             <p>Como um engenheiro de software apaixonado, sou criativo e comunicativo. Atualmente imerso no mundo dinâmico do Desenvolvimento Mobile, minha experiência gira em torno do React Native, onde combino perfeitamente tecnologia com inovação.</p>
             <p>Com entusiasmo por criar soluções elegantes, navego no cenário em constante evolução do desenvolvimento de software. Minha jornada envolve traduzir conceitos em código, criar experiências de usuário perfeitas e ultrapassar constantemente os limites do que é possível</p>

            </section>


            <section className='experiencia'>
                <h1>EXPERIÊNCIA</h1>
                <h2>E X P L O R E  N O W</h2>
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
                <h2>E X P L O R E  N O W</h2>

            </section>
        </main>



        <footer>
            
        </footer>
        </>
    )
}