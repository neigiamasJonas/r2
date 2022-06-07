import { useState, useEffect } from 'react';
import './App.scss';
import Create from './Components/Crud/Create';
import FaultList from './Components/Crud/List';
import { read } from './Functions/LocalStorage';



function App() {

  const [createData, setCreateData] = useState([]); 

  // last update component (paskutinio localStorage update laikas), kad atsinaujintu ne po refresh
  const [lastUpdate, setLastUpdate] = useState(Date.now());



  // CREATE data(necreatinu, tiksliau pasiimu is local storage)

  useEffect(() => {
    if (createData === null){
      return;
    }

    const data = localStorage.getItem('scooters');
    setCreateData(data)

    setLastUpdate(Date.now()); 
    
  }, [createData]);



  const [scooterList, setScooterList] = useState(null);
  // READ

  useEffect(() => {
    setScooterList(read());

  }, [lastUpdate]);


  return (
    <>
    <body>
      <div className='header'><b>"Fault" paspirtuku nuoma</b></div>
      <div className='container'>
        <div className='row'>
            <Create></Create>
            <div className='col2 column'>
              <FaultList fautls={scooterList}></FaultList>
              
            </div>
        </div>
      </div>
    </body>
    </>
  );
}

export default App;
