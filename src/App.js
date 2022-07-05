import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Home/Homepage';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Basket from './Pages/Basket/Basket';
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react';
function App() {
  const [data,setData] = useState([])
  const [text, setText] = useState('')
  console.log(data)
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:3000/db.json') 
      const data = await resp.json()
      setData(data)
    }
    fetchData()
  }, [])
  const searchDAta = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
  return (
    <BrowserRouter>
      <div className="App">
        <Header text={text} setText={setText}/>
      </div>
      <Routes>
        <Route path='/' element={<Homepage data={searchDAta} text={text} setText={setText}/>} />
        <Route path='/About' element={<About/>}/>
         <Route path='/Contacts' element={<Contacts/>}/>
        <Route path='/Basket' element={<Basket/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>


  );
}

export default App;
