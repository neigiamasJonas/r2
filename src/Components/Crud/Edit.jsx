import { useState, useEffect } from 'react';

function Edit({ modalData, setModalData, editData}) {

    const [condition, setCondition] = useState("new");
    const [id, setId] = useState(1);
    const [regCode, setRegCode] = useState('A' + rand(1000000, 9999999));
    const [km, setKm] = useState('');
    const [date, setDate] = useState('null');



    return(
        <>
        <div className="modal">
            <div className="modal-box">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Faults edit</h5>
                        <button type="button" className="close-button" onClick={() => setModalData(null)}>
                            <span>&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="modal-id">
                            <label>ID</label>
                            <div>{id}</div>
                            <small>Id</small>
                        </div>
                        <div className="modal-reg">
                            <label>Registration Code</label>
                            <div>{regCode}</div>
                            <small>Registration Code</small>
                        </div>
                        <div className='form-group'>
                            <label>New or Used</label>
                            <select value={condition} onChange={e => setCondition(e.target.value)}>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                            </select>
                        </div>
                        <div>
                            {
                            condition === 'used' && (
                                <div>
                                    <div className='form-group'>
                                        <div>
                                            {
                                                date !== null && (
                                                    <div>
                                                        <label>Last time used</label>
                                                        <input type="date">Kada paskutini karta naudotas neredaguotina</input>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <label>Change last time used</label>
                                        <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Run before (km)</label>
                                        <input type="number">Kiek vaziaves pries tai neredaguotina{km}</input>
                                        <label>Run today (km)</label>
                                        <input type="number" value={km} onChange={e => setKm(e.target.value)}></input>
                                    </div>
                            </div>
                            )
                            }
                        </div>
                        <div className='form-group'>
                            <button type='checkbox'>Free</button>
                            <button type='checkbox'>Busy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Edit;