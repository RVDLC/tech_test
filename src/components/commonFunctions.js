export const getData = (dataLocation, setData) => {
    fetch(dataLocation
    ,{
    headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    }
    )
    .then((response) => { return response.json(); })
    .then((myJson) => { setData(myJson) });
}

export const getRandomNumber = () => { return Math.floor(Math.random(100)*10) };
