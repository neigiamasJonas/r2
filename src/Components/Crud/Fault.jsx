
function Fault({ fault }) {

    return (
        <>
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>{fault.id}</b>
                    <span>{fault.regCode}</span>
                    <div>{fault.condition}</div>
                    <div>{fault.km}</div>
                </div>
                <div className="buttons">
                    <button type="button" className="btn1">Edit</button>
                    <button type="button" className="btn2">Delete</button>
                </div>
            </div>

        </li>
        </>
    )
}

export default Fault;