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
                    scootersSort === '1' ? faults === null ? null : [...faults].map(fault => <Fault key={fault.id} fault={fault} dataDeletion={dataDeletionList} dataEdit={dataModalList}></Fault>) : null
                    }
                    {
                    scootersSort === '2' ? faults === null ? null : [...faults].sort((a, b) => (b.km - a.km)).map(fault => <Fault key={fault.id} fault={fault} dataDeletion={dataDeletionList} dataEdit={dataModalList}></Fault>) : null
                    }
                    {
                    scootersSort === '3' ? faults === null ? null : [...faults].sort((a, b) => a.newDate.localeCompare(b.newDate)).map(fault => <Fault key={fault.id} fault={fault} dataDeletion={dataDeletionList} dataEdit={dataModalList}></Fault>) : null
                    }
                </ul>
            </div>
        </div>

    </>
    )
}

export default FaultList;