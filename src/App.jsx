import { useState, useEffect } from 'react';
import './App.scss';
import Create from './Components/Crud/Create';
import { create } from './Functions/LocalStorage';



function App() {

  const [createData, setCreateData] = useState(null); 

  // CREATE data

  useEffect(() => {
    if (createData === null){
      return;
    }

    create(createData);


    
  }, [createData]);


  return (
    <>
    <body>
      <div className='header'><b>"Fault" paspirtuku nuoma</b></div>
      <div className='container'>
        <div className='row'>
            <Create setCreateData={setCreateData}></Create>
          <div className='col2 column'>Kolona2</div>
        </div>
      </div>
    </body>
    </>
  );
}

export default App;
