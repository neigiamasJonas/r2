import { sort } from "../../Functions/LocalStorage";

function ScootersSort({ scootersSort, setScootersSort }) {

    return(
        <>
        <div className="sort-body">
            <label>Sorted by: </label>
            <div>
                <select value={scootersSort} onChange={e => {
                    setScootersSort(e.target.value);
                    sort(e.target.value);
                    }}>
                    <option value="1">ID</option>
                    <option value="2">Total ride km</option>
                    <option value="3">Last time used</option>
                </select>
            </div>


        </div>
        </>
    )
}

export default ScootersSort;