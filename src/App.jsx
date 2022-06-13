import { useState, useEffect } from 'react';
import './App.scss';
import Create from './Components/Crud/Create';
import Edit from './Components/Crud/Edit';
import FaultList from './Components/Crud/List';
import ScootersInfo from './Components/Crud/ScootersInfo';
import ScootersSort from './Components/Crud/ScootersSort';
import { create, edit, read, remove } from './Functions/LocalStorage';



function App() {

  const [createData, setCreateData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [scootersSort, setScootersSort] = useState('1');

  // last update component (paskutinio localStorage update laikas), kad atsinaujintu ne po refresh
  const [lastUpdate, setLastUpdate] = useState(Date.now());


////////////////
  // CREATE //

  useEffect(() => {
    if (createData === null){
      return;
    }

    // const data = localStorage.getItem('scooters');
    
    create(createData)
    
    setLastUpdate(Date.now()); 
    
    
  }, [createData]);

////////////////
  // READ //

  const [scooterList, setScooterList] = useState(null);

  useEffect(() => {
    
    setScooterList(read());

    
  }, [lastUpdate]);

 //////////////// 
  // REMOVE //

  const [deleteData, setDeleteData] = useState(null);

  useEffect(() => {

    if (deleteData === null) {
      return;
    }

    remove(deleteData);

    setLastUpdate(Date.now()); 

  }, [deleteData])

  ////////////////
  // EDIT //

  useEffect (() => {

    if (editData === null) {
      return;
    }

    edit(editData);

    setLastUpdate(Date.now()); 

  }, [editData]);


  ////////////////
  // SORT //

  useEffect(() => {
    localStorage.getItem('ScootersSort') ? setScootersSort(localStorage.getItem('ScootersSort')) : setScootersSort('1');

    
  }, [])

  return (
    <>
    <div>
      <div className='header'><b>"Fault" paspirtuku nuoma</b></div>
      <div className='container'>
        <div className='row'>
          <div className='row-col1'>
            <Create setCreateData={setCreateData}></Create>
            <ScootersInfo scooters={scooterList}></ScootersInfo>
          </div>
          <div className='row-col2'>
            <ScootersSort scootersSort={scootersSort} setScootersSort={setScootersSort}></ScootersSort>
            <FaultList faults={scooterList} dataDeletionList={setDeleteData} dataModalList={setModalData} scootersSort={scootersSort}></FaultList>
          </div>
        </div>
      </div>
    </div>
    <Edit editData={setEditData} modalData={modalData} setModalData={setModalData}></Edit>
    </>
  );
}

export default App;
