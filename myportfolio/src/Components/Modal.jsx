import './Modal.css'
export default function Modal(props){
 return(
  <>
    <div className='modal' >
        <h1>Contatos</h1>
        <p>Email: <strong>fnatanieljunior@gmail.com</strong></p>
        <p>Telefone: <strong>(82) 99634-7121</strong></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/nataniel-junior-20365a264/" target='_blank'><strong>/NatanielJunior</strong></a></p>
        <p>Github: <a href="https://github.com/Nattanjunior" target='_blank'><strong>/NatanielJunior</strong></a></p>
        <button type='button'>Close</button>
    </div>
  </>
 )
}