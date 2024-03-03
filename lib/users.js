const seed = require('./seeding')
const _func = require('./functions')


const user = {}

user.getFirstName = (obj) => {
    const firstName = seed.firstName()
    if(obj === false){
        return firstName
    }
    return {firstName}
}

user.getLastName = (obj) => {
    const lastName = seed.lastName()
    if(obj === false){
        return lastName
    }
    return {lastName}
}

user.createFullName = (obj) => {
    const first = seed.firstName()
    const last = seed.lastName()
    if(obj === false){
        return first + ' ' + last
    }
    return {first,last}
}

user.createFullUser = (oldest,youngest) => {
    const firstName = seed.firstName()
    const lastName = seed.lastName()
    const birthday = seed.randomDateByAge(oldest,youngest)
    const streetNumber = seed.random(9999)
    const street = seed.street()
    const address1 = streetNumber + ' ' + street
    const address2 = seed.address2()
    const cityInfo = seed.cityStateZip()
    const city = cityInfo.city
    const state = cityInfo.state
    const zipcode = cityInfo.zip
    return {firstName,lastName,birthday,address1,address2,city,state,zipcode}
}

user.createADate = (oldeest,youngest,obj) => {
    const theDate = seed.randomDateByAge(oldeest,youngest)
    if(obj === false){
        return theDate
    }
    return {theDate}
}

user.createAddress1 = (obj) => {
    const streetNumber = seed.random(9999)
    const street = seed.street()
    const addrress1 = streetNumber + ' ' + street
    if(obj === false){
        return addrress1
    }
    return {addrress1}
}

user.createAddress2 = (obj) => {
    const address2 = seed.address2()
    if(obj === false){
        return address2
    }
    return {address2}
}

user.createCityStateZip = (obj) => {
    const cityInfo = seed.cityStateZip()
    if(obj === false){
        return cityInfo.city + ', ' + cityInfo.state + '. ' + cityInfo.zip
    }
    return cityInfo
}

user.createFullAddress = (obj) => {
    const streetNumber = seed.random(9999)
    const street = seed.street()
    const address2 = seed.address2()
    const cityInfo = seed.cityStateZip()
    if(obj === false){
        const stringAddress = address2 !== '' 
                            ? `${streetNumber} ${street}, ${address2} \n${cityInfo.city}, ${cityInfo.state}. ${cityInfo.zip}`
                            : `${streetNumber} ${street} \n${cityInfo.city}, ${cityInfo.state}. ${cityInfo.zip}`
        return stringAddress
    }
    const addressInfo = {
        address1: streetNumber + ' ' + street,
        address2: address2,
        city: cityInfo.city,
        state: cityInfo.state,
        zipcode: cityInfo.zip
    }
    return addressInfo
}

user.createEmail = (obj) => {
    const email = seed.easyEmail()
    if(obj === false){
        return email
    }
    return {email}
}

user.createSimplePassword = (obj) => {
    const password =  seed.easyPassword()
    if(obj === false){
        return password
    }
    return {password}
}

user.createEmailAndPassword = () => {
    const email = seed.easyEmail()
    const password = seed.easyPassword()
    return {email,password}
}


module.exports = user

for(const i in user){
    if(i === 'createFullUser'){
        console.log(i+': ',user[i](69,18));
    }
    else if(i === 'createADate'){
        console.log(i+': ',user[i](5,2));    
    }
    else if(i === 'createChargeInfo'){
        console.log(i+': ',user[i]('12-15-2023',10,50));    
    }
    else {
        console.log(i+': ',user[i]());
    }
}