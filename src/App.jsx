import { useState, useEffect } from 'react';
import './App.scss';
import Create from './Components/Crud/Create';
import FaultList from './Components/Crud/List';
import { create, read } from './Functions/LocalStorage';



function App() {

  const [createData, setCreateData] = useState(null); 

  // last update component (paskutinio localStorage update laikas), kad atsinaujintu ne po refresh
  const [lastUpdate, setLastUpdate] = useState(Date.now());



  // CREATE data(necreatinu, tiksliau pasiimu is local storage)

  useEffect(() => {
    if (createData === null){
      return;
    }

    // const data = localStorage.getItem('scooters');
    
    create(createData)
    
    setLastUpdate(Date.now()); 
    
    
  }, [createData]);



  const [scooterList, setScooterList] = useState(null);
  // READ

  useEffect(() => {
    
    setScooterList(read());

    
  }, [lastUpdate]);

  
  

  return (
    <>
    <div>
      <div className='header'><b>"Fault" paspirtuku nuoma</b></div>
      <div className='container'>
        <div className='row'>
          <div className='row-col1'>
            <Create setCreateData={setCreateData}></Create>
          </div>
          <div className='row-col2'>
            <div className='col2 column'>
              <FaultList faults={scooterList}></FaultList>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
