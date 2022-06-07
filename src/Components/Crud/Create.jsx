import { useState, useEffect } from 'react';
// import { create } from '../../Functions/LocalStorage';



///////////////////////////////////////////////////////////
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;   
}
////////////////////////////////////////////////////////////



function Create( {setCreateData} ) {


    const [condition, setCondition] = useState("new");

    // data values states
    const [id, setId] = useState(1);
    const [regCode, setRegCode] = useState('A' + rand(1000000, 9999999));
    const [km, setKm] = useState('');
  
   
    
    // handleCreat po mygtuko paspaudimo istume data i paruoshta masyva


    const handleCreate = () => {
      const data = {id, regCode, condition, km};
      
      setCreateData(data);                          // uzsetinu data objekta cia, priestai tai buvo daroma App ir naudojamas propsas setCreateData
      // create(data);
      
  
      setRegCode('A' + rand(1000000, 9999999));
      setCondition('new');
      setKm(null);
      setId(k => k + k.length)

      const scooterId = localStorage.getItem('scooters_id');

      if (id === 1){
        setId(Number(2))
      }
      if (scooterId){
      setId(Number(scooterId) + 2)
      }

    }

    // Pasiimu objekto data is localStorage

    useEffect(() => {
      console.log('antras')
      const scooterId = JSON.parse(localStorage.getItem('scooters_id'));

      if (scooterId){
        setId(Number(scooterId) + 1)
      }
    }, []);





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