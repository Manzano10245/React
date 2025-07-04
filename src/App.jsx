
import './App.css'
import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Footer } from './components/Footer/Footer';
import { Section } from './components/Section/Section';
import { Section2 } from './components/Section2/Section2';



function App() {
  return (
    
    <>
    <Header title="Creando y usando props" show={false}>

    <h2>Aqui estoy subtitulando el header mediante el prop</h2>

    </Header>

    <SideBar/>

<h1>Sedes y Gerentes</h1>
    <Section/>
    
    <h1>Productos</h1>
    <Section2/>

    <Footer/>

    </>
  )
}

export default App;