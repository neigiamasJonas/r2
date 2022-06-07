import { useState, useEffect } from 'react';
import { create } from '../../Functions/LocalStorage';



///////////////////////////////////////////////////////////
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;   
}
////////////////////////////////////////////////////////////



function Create({ setCreateData }) {

    const [condition, setCondition] = useState("new");
    

    ///////////////////////////////////////////
    //const [aidy, setAidy] = useState([]);
    ///////////////////////////////////////////
    



    // data values states
    const [id, setId] = useState(1);
    const [regCode, setRegCode] = useState('A' + rand(1000000, 9999999));
    const [km, setKm] = useState(null);
  
   
    
    // handleCreat po mygtuko paspaudimo istume data i paruoshta masyva


    const handleCreate = () => {
      const data = {id, regCode, condition, km};
      

      //setCreateData(data);
      create(data);
      
      // setId(k => k + 1);
  
      setRegCode('A' + rand(1000000, 9999999));
      setCondition('new');
      setKm(null);

       const aidy = localStorage.getItem('scooters_id');
console.log('gaunu')

      if (aidy){
      setId(Number(aidy)+1)
  }

      // setAidy(k => 1 + Number(k));
    }


///////////////////////////////////////////
useEffect(() => {
  console.log('antras')
  const aidy = JSON.parse(localStorage.getItem('scooters_id'));

  if (aidy){
    setId(aidy +1)
  }
}, []);
    // useEffect(() => {
    //   console.log('pirmass')
    //   localStorage.setItem('aidy', JSON.stringify(aidy))

    
    // }, [aidy]);

    // console.log(aidy.length);

  

    // console.log(aidy);
    ///////////////////////////////////////////







    


    return (
        <div className='col1 column'>
            <div className='h3'>
              <h3>Create New Item</h3>
            </div>
            <div className='card-body'>
              <div className='form-group'>
                <label>ID</label>
                <input type="text" readOnly="readonly" value={id} />
                <small>Auto generated</small>
              </div>
              <div className='form-group'>
                <label>Registration Code</label>
                <input type="text" readOnly="readonly" value={regCode} onChange={e => setRegCode(e.target.value)}/>
                <small>Auto generated</small>
              </div>
              <div className='form-group'>
                <label>New or Used</label>
                <select value={condition} onChange={e => setCondition(e.target.value)}>
                  <option value="new">New</option>
                  <option value="used">Used</option>
                </select>
              </div>
                {
                  condition === 'used' && (
                    <div className='form-group'>
                    <label>Run before (km)</label>
                    <input type="number" value={km} onChange={e => setKm(e.target.value)}></input>
                  </div>
                  )
                }
              <button className='button' onClick={handleCreate}>Create</button>

            </div>
          </div>
    )
}

export default Create;