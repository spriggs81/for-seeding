const seed = require('./seeding')

const company = {}

company.createBusinessName = (obj) => {
    const businessName = seed.randomCompanyName()
    if(obj === false){
        return businessName
    }
    return {businessName}
}

company.createFullBusinessInfo = () => {
    const businessName = seed.randomCompanyName()
    const streetNumber = seed.random(9999)
    const street = seed.businessStreet()
    const address1 = streetNumber + ' ' + street
    const rawAddress2 = seed.address2()
    const address2 = rawAddress2.includes('apt') ? rawAddress2.replace('apt','suite') : rawAddress2
    const cityInfo = seed.cityStateZip()
    const city = cityInfo.city
    const state = cityInfo.state
    const zipcode = cityInfo.zip
    return {businessName,address1,address2,city,state,zipcode}
}

company.createBusinessAddress1 = (obj) => {
    const streetNumber = seed.random(9999)
    const street = seed.businessStreet()
    const addrress1 = streetNumber + ' ' + street
    if(obj === false){
        return addrress1
    }
    return {addrress1}
}

company.createBusinessAddress2 = (obj) => {
    const rawAddress2 = seed.address2()
    const address2 = rawAddress2.replace('apt','suite')
    if(obj === false){
        return address2
    }
    return {address2}
}

company.createBusinessCityStateZip = (obj) => {
    const cityInfo = seed.cityStateZip()
    if(obj === false){
        return cityInfo.city + ', ' + cityInfo.state + '. ' + cityInfo.zip
    }
    return {cityInfo}
}

company.createFullBusinessAddress = (obj) => {
    const streetNumber = seed.random(9999)
    const street = seed.businessStreet()
    const rawAddress2 = seed.address2()
    const address2 = rawAddress2.replace('apt','suite')
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

module.exports = company