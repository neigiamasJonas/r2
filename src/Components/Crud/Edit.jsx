import { useState, useEffect } from 'react';
import rand from '../../Functions/RandNumber'

function Edit({ modalData, setModalData, editData}) {

    const [condition, setCondition] = useState("new");
    const [id, setId] = useState(1);
    const [regCode, setRegCode] = useState('A' + rand(1000000, 9999999));
    const [km, setKm] = useState(0);
    const [date, setDate] = useState('null');

    const [km2, setKm2] = useState(0);


    useEffect(() => {
        if(modalData === null) {
            return;
        }

        setCondition(modalData.condition);
        setId(modalData.id);
        setRegCode(modalData.regCode);
        

        setKm(modalData.km);

        setKm2(0)
        setDate(modalData.date)


    }, [modalData]);


    const handleEdit = () => {
        const data = {id, regCode, condition, km: (+(modalData.km) + +(km2)), date}

        editData(data)
        setModalData(null);
    }

    if (modalData === null) {
        return null;
    }

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
                            {
                                condition === 'new' && <option value="new">New</option>
                            }
                            <option value="used">Used</option>
                            </select>
                        </div>
                        <div>
                            {
                            condition === 'used' && (
                                <div>
                                    <div className='form-group'>
                                        <label>Run before (km)</label>
                                        <div>{km} km</div>
                                        <label>Run today (km)</label>
                                        <input type="number" value={km2} onChange={e => setKm2(e.target.value)}></input>
                                    </div>
                            </div>
                            )
                            }
                        </div>
                        <div className='form-group'>
                            <fieldset>
                            <input type="checkbox"></input><span>Busy</span>
                            <input type="checkbox"></input><span>Free</span>
                            </fieldset>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' onClick={() => setModalData(null)}>Close</button>
                            <button type='button' onClick={handleEdit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Edit;