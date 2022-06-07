import Fault from "./Fault";

function FaultList({ faults }) {


    return (
    <>
        <div>
            <div>
              <h3>List of Scooters</h3>
            </div>
            
            <div>
                <ul>
                    {
                    faults ? faults.map(fault => <Fault key={fault.id} fault={fault}></Fault>) : null
                    }
                </ul>
            </div>
        </div>

    </>
    )
}

export default FaultList;