import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import "./App.css"

function DarkExample(bcd) {
  const [tableData, setTabledata] = useState(null);
  useEffect(function () {
    fetch(`https://67d7ed039d5e3a10152c99fe.mockapi.io/User/Detailsofuser`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(tasks => {
      setTabledata(tasks);
    }).catch(error => {
      // handle error
    })
  }, [bcd.update])
  console.log(tableData);
  const Deleteuser = (id) => {

    fetch(`https://67d7ed039d5e3a10152c99fe.mockapi.io/User/Detailsofuser/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      alert("Deleted");
      bcd.setupdate = (!bcd.update)
    }).catch(error => {
      // handle error
    })
  }
  
  return (
    <>
      
        <button className='add' onClick={()=>bcd.cardClick()}>ADD DATA</button>
      

      <Table striped bordered hover variant="dark">
        <thead>
          <tr className='fs-5'>
            <th className='p-3'>S.No</th>
            <th className='p-3'>Name</th>
            <th className='p-3'>Email</th>
            <th className='p-3'>Location</th>
            <th className='p-3'>Phone No</th>
            <th className='p-3'>Qualification</th>
            <th className='p-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData && tableData.map((inpval, outval) => {
            return (
              <>
                <tr className='text-center'>
                  <td className='p-3'>{outval + 1}</td>
                  <td className='p-3'>{inpval.Name}</td>
                  <td className='p-3'>{inpval.Email}</td>
                  <td className='p-3'>{inpval.location}</td>
                  <td className='p-3'>{inpval.Phonenumber}</td>
                  <td className='p-3'>{inpval.qualification}</td>
                  <td className='p-3'>
                    <Button onClick={() => bcd.cardClick(inpval)} variant="success me-3" >Edit</Button>
                    <Button variant="danger" onClick={() => Deleteuser(inpval.id)}>Delete</Button>
                  </td>
                </tr>
              </>
            )
          })}
          {/* */}
        </tbody>
      </Table>
    </>
  );
}

export default DarkExample;