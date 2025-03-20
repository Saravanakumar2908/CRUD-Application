import { useState } from 'react'
import Table from './table.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Popup from './popup'

function App() {
  const [status,setstatus]=useState(false)
  const[temp,setTemp]=useState({
    Name:null,
    location:null,
    Phonenumber:null,
    qualification:null,
    Email:null
  });
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    if(rowData){
      setTemp(rowData)
    }else{
      setTemp({
        Name:null,
        location:null,
        Phonenumber:null,
        qualification:null,
        Email:null
      })
    };
    
    setShow(true);}

  return (
    <Container fluid className='p-4'>
      <Popup ref={status} setref={setstatus} cardShow={show} cardClose={handleClose} field={temp} setfield={setTemp}/>
      <Table cardClick={handleShow} update={status} setupdate={setstatus} />
    </Container>
  )
}
export default App
