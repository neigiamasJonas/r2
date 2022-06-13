import { useState, useEffect } from 'react';
// import rand from '../../Functions/RandNumber'
import RandomStringID from '../../Functions/RandomStringID';




function Create( {setCreateData} ) {


    const [condition, setCondition] = useState("New");

    // data values states
    const [id, setId] = useState(1);
    const [regCode, setRegCode] = useState(RandomStringID(8));
    const [km, setKm] = useState(0);
    
  
   
    
    // handleCreat po mygtuko paspaudimo istume data i paruoshta masyva

    const handleCreate = () => {
      const data = {id, regCode, condition, km, busy: 0, newDate: 'Never used before'};
      
      setCreateData(data);                          // uzsetinu data objekta cia, priestai tai buvo daroma App ir naudojamas propsas setCreateData
      // create(data);
      
  
      setRegCode(RandomStringID(8));
      setCondition('New');
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
              <div className='form-group-row'>
                <div className='form-group'>
                  <label>ID</label>
                  <input type="text" readOnly value={id} />
                  <small>Auto generated</small>
                </div>
                <div className='form-group'>
                  <label>Registration Code</label>
                  <input type="text" readOnly value={regCode} onChange={e => setRegCode(e.target.value)}/>
                  <small>Auto generated</small>
                </div>
              </div>
              <div div className='form-group-row'>
                <div className='form-group'>
                  <div className='show-group-item'>
                    <label>New or Used</label>
                    <select value={condition} onChange={e => setCondition(e.target.value)}>
                      <option value="New">New</option>
                      <option value="Used">Used</option>
                    </select>
                  </div>
                </div>
                <div className='form-group'>
                  {
                    condition === 'Used' && (
                    <div className='show-group-item' style={{paddingBottom: '17px'}}>
                      <label>Run before (km)</label>
                      <input type="number" value={km} onChange={e => setKm(e.target.value)}></input>
                    </div>
                    )
                  }
                </div>
              </div>

              <button className='button' onClick={handleCreate}>Create</button>

            </div>
          </div>
    )
}

export default Create;