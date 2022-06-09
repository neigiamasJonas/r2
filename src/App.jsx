import { useState, useEffect } from 'react';
import './App.scss';
import Create from './Components/Crud/Create';
import Edit from './Components/Crud/Edit';
import FaultList from './Components/Crud/List';
import { create, edit, read, remove } from './Functions/LocalStorage';



function App() {

  const [createData, setCreateData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [modalData, setModalData] = useState(null);

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
              <FaultList faults={scooterList} dataDeletionList={setDeleteData} dataModalList={setModalData}></FaultList>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <Edit editData={setEditData} modalData={modalData} setModalData={setModalData}></Edit>
    </>
  );
}

export default App;
