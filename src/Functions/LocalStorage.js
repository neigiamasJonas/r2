import getId from './GetId'

const key = 'scooters';


export function create(object) {
    let data = localStorage.getItem(key);

    if (data === null){
        data = JSON.stringify([])
    }

    data = JSON.parse(data);
    object.id = getId(key + '_id');

    data.push(object);
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
    console.log('uzsetinta')
}


export function read() {

    let data = localStorage.getItem(key);

    if (data === null){
        data = JSON.stringify([]);
    }

    data = JSON.parse(data);
    return data;
}



export function remove({id}) {

    let data = localStorage.getItem(key)

    if (data === null) {
        data = JSON.stringify([])
    }

    data = JSON.parse(data);
    data = data.filter(obj => obj.id !== id);
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
}


export function edit(obj) {

    let data = localStorage.getItem(key)

    if (data === null) {
        data = JSON.stringify([])
    }

    data = JSON.parse(data);
    data = data.map(oldObj => oldObj.id !== obj.id ? oldObj : obj)
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
}


export function sort(obj) {

    let data = localStorage.getItem('ScootersSort')

    if (data === null) {
        data = JSON.stringify('1')
    }

    data = JSON.parse(data);
    data = JSON.stringify(data);

    localStorage.setItem('ScootersSort', obj)

}