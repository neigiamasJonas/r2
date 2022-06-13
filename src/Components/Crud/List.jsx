import Fault from "./Fault";

function FaultList({ faults, dataDeletionList, dataModalList, scootersSort }) {


    return (
    <>
        <div className='col2 column'>
            <div className="h3">
                <h3>List of Scooters</h3>
            </div> 
            <div className='card-body'>
                <ul className="ul">
                    {
                    faults ? faults.map(fault => <Fault key={fault.id} fault={fault} dataDeletion={dataDeletionList} dataEdit={dataModalList}></Fault>) : null
                    }
                    {
                    scootersSort === '2' ? faults.sort((a, b) => (a.km - b.km)).map(fault => <Fault key={fault.id} fault={fault} dataDeletion={dataDeletionList} dataEdit={dataModalList}></Fault>) : null
                    }
                    {
                    scootersSort === '3' && faults.map(fault => <Fault key={fault.id} fault={fault} dataDeletion={dataDeletionList} dataEdit={dataModalList}></Fault>)
                    }
                </ul>
            </div>
        </div>

    </>
    )
}

export default FaultList;