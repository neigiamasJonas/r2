import Fault from "./Fault";

function FaultList({ faults, dataDeletionList, dataModalList }) {


    return (
    <>
        <div>
            <div>
              <h3>List of Scooters</h3>
            </div>
            
            <div>
                <ul>
                    {
                    faults ? faults.map(fault => <Fault key={fault.id} fault={fault} dataDeletion={dataDeletionList} dataEdit={dataModalList}></Fault>) : null
                    }
                </ul>
            </div>
        </div>

    </>
    )
}

export default FaultList;