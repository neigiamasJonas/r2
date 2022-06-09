
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
                    <b>{fault.id}</b>
                    <span>{fault.regCode}</span>
                    <div>{fault.condition}</div>
                    <div>{fault.km}</div>
                    <div>{fault.date}</div>
                    <div>{fault.busy ? 'Busy': 'Free'}</div>
                </div>
                <div className="buttons">
                    <button type="button" className="btn1" onClick={handleEdit}>Edit</button>
                    <button type="button" className="btn2" onClick={handleDelete}>Delete</button>
                </div>
            </div>

        </li>
        </>
    )
}

export default Fault;