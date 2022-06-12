
function Fault({ fault, dataDeletion, dataEdit }) {

    const handleDelete = () => {
        dataDeletion(fault);
    }

    const handleEdit = () => {
        dataEdit(fault)
    }


    return (
        <>
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <div className="id-reg">
                        <div>ID: <b>{fault.id}</b></div>
                        <div>Registration Code: <b>{fault.regCode}</b></div>
                        <div>Condition: <b>{fault.condition}</b></div>
                    </div>
                    <div className="content-info">
                        <div className="info">
                            <div className="info-item">Kilometers Total: <b>{fault.km} km</b></div>
                            <div className="info-item">Last time used: <b>{fault.newDate}</b></div>
                            <div className="info-item">Scooter status: <b>{fault.busy ? 'Busy': 'Free'}</b></div>
                        </div>
                        <div className="content-btn">
                            <button type="button" className="btn btn1" onClick={handleEdit}>Edit</button>
                            <button type="button" className="btn btn2" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        </>
    )
}

export default Fault;