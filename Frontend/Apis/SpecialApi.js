const SpecialApi = [
    {
        id: 1,
        src: require('../assets/SpecialOffers/Sampoo.jpg'),
        name: 'Dove Sampoo',
        price: '500'
    },
    {
        id: 2,
        src: require('../assets/SpecialOffers/Arduino.jpg'),
        name: 'Arduino Uno',
        price: '500'
    },
    {
        id: 3,
        src: require('../assets/SpecialOffers/Boat.jpg'),
        name: 'Boat Speakers',
        price: '500'
    },
    {
        id: 4,
        src: require('../assets/SpecialOffers/Fridge.jpg'),
        name: 'Freeze',
        price: '500'
    },
    {
        id: 5,
        src: require('../assets/SpecialOffers/JBL.jpg'),
        name: 'Speakers',
        price: '500'
    },
 

]

export function getProducts(){
    return SpecialApi
}

export function getProduct(id) {
    return SpecialApi.find((data) => data.id == id)
}