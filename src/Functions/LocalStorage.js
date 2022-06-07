import getid from './GetId'

const key = 'scooters';


export function create(object) {
    let data = localStorage.getItem(key);

    if (data === null){
        data = JSON.stringify([])
    }

    data = JSON.parse(data);
    object.id = getid(key + '_id');

    data.push(object);
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
    console.log('uzsetinta')
}