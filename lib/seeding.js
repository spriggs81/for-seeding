const _func = require('./functions');
const config = require('./config');

const app = {};

app.random = (max) => {
    max = typeof(max) === 'number' ? max : Number(max)
    const rand = Math.floor(Math.random() * max + 1)
    return rand
}

app.randomMinMax = (min,max) => {
    min = typeof(min) === 'number' ? min : Number(min)
    max = typeof(max) === 'number' ? max : Number(max)
    const rand = Math.floor(Math.random() * (max - min + 1)) + min
    return rand
}

app.firstName = () => {
        const ranCount = app.random(config.firstNames.length)
        if(ranCount === 0){
          return {error: 'error no count'}
        }
        return config.firstNames[ranCount - 1]
}

app.lastName = () => {
    const ranCount = app.random(config.lastNames.length)
    if(ranCount === 0){
        return {error: 'error no count'}
    }
    return config.lastNames[ranCount - 1]
}

app.month = () => {
    const month = app.random(12)
    return month
}

app.date = (month,) => {
    const day = month === 2 ? app.random(28)
                : [4,6,9,11].includes(month) ? app.random(30)
                : app.random(31);
    return day
}

app.year = (start,end) => {
    const year = app.randomMinMax(start,end)
    return year
}

app.randomDateByAge = (max,min) => {
    const today = new Date()
    const todayMonth = today.getMonth() + 1
    const todayYear = today.getFullYear()
    const month = app.month()
    const day = app.date(month)
    const year = app.year(todayYear - max,todayYear - min)
    return _func.checkZero(month) + '-' + _func.checkZero(day) + '-' + year
}

app.randomDateByStartDate = (startDate) => {
    const today = new Date()
    const todayYear = today.getFullYear()
    const theDate = startDate.split('-')
    const chargeYear = app.year(theDate[2],todayYear)
    const minMonth = chargeYear === Number(theDate[2]) ? theDate[0] : 1
    const maxMonth = chargeYear === todayYear ? today.getMonth() + 1 : 12
    const chargeMonth = app.randomMinMax(minMonth,maxMonth)
    const minDay = chargeYear === Number(theDate[2]) && _func.checkZero(chargeMonth) === theDate[0] ? theDate[1] : 1
    const maxDay = chargeYear === todayYear && _func.checkZero(chargeMonth) === _func.checkZero(today.getMonth() + 1) ? Number(today.getDate())
                : chargeMonth === 2 ? 28 : [4,6,9,11].includes(chargeMonth) ? 30 : 31
    const chargeDay = app.randomMinMax(minDay,maxDay)
    const maxHours = chargeYear === todayYear 
                    && _func.checkZero(chargeMonth) === _func.checkZero(today.getMonth() + 1) 
                    && _func.checkZero(chargeDay) === _func.checkZero(today.getDate()) 
                    ? today.getHours() : 23
    const maxMins = chargeYear === todayYear 
                    && _func.checkZero(chargeMonth) === _func.checkZero(today.getMonth() + 1) 
                    && _func.checkZero(chargeDay) === _func.checkZero(today.getDate()) 
                    && maxHours === today.getHours()
                    ? today.getMinutes() : 59
    const maxSecs = chargeYear === todayYear 
                    && _func.checkZero(chargeMonth) === _func.checkZero(today.getMonth() + 1) 
                    && _func.checkZero(chargeDay) === _func.checkZero(today.getDate()) 
                    && maxHours === today.getHours()
                    && maxMins === today.getMinutes()
                    ? today.getSeconds() : 59
    const chargeDate = chargeYear + '-' + _func.checkZero(chargeMonth) + '-' + _func.checkZero(chargeDay) + ' ' 
                + _func.checkZero(app.randomMinMax(0,maxHours)) + ':' + _func.checkZero(app.randomMinMax(0,maxMins)) + ':' 
                + _func.checkZero(app.randomMinMax(0,maxSecs))
    
    return chargeDate
}

app.randomCharge = (min,max) => {
    const chargeAmount = app.randomMinMax(min,max)
    return chargeAmount.toFixed(2)
}
 
app.street = () => {
    const count = config.streetNames.length
    const street = config.streetNames[app.random(count - 1)]
    return street;
}

app.businessStreet = () => {
    const count = config.businessStreetNames.length
    const street = config.businessStreetNames[app.random(count - 1)]
    return street;
}

app.address2 = () => {
    const count = config.address2.length
    const address2Info = config.address2[app.random(count - 1)]
    const address2 = address2Info === 'apt' ? address2Info + ' #' + app.random(150)
                    : address2Info === 'suite' ? address2Info + ' ' + app.random(500)
                    : ''
    return address2
}

app.cityStateZip = () => {
    const count = app.random(config.citiesData.length)
    const cityStateZip = config.citiesData[count - 1]
    return cityStateZip
}

app.randomProduct = () => {
    const count = app.random(config.productNames.length)
    return config.productNames[count - 1]      
}

app.randomCompanyName = () => {
    const count = config.companyNames.length
    const company = config.companyNames[app.random(count) - 1]
    return company
}

app.easyEmail = () => {
    const count1 = app.random(config.fakeEmails.length)
    const count2 = app.random(config.fakeDomains.length)
    const start = config.fakeEmails[count1 - 1]
    const middle = app.random(1000)
    const end = config.fakeDomains[count2 - 1]
    const email = start + middle + '@' + end
    return email
}

app.easyPassword = () => {
    const count = app.random(config.easyPasswords.length)
    const start = config.easyPasswords[count - 1]
    const end = app.random(100)
    const password = start + end
    return password
}

app.randomPassword = (count = 6,special = false) => {
    const abc = 'qwertyuiopasdfghjklzxcvbnm'
    const num = '1234567890'
    const specialChar = '!@#$%^&*_+;?.,'
    let password = ''
    for(i = 0; i < count; i++){
        const caps = app.random(5)
        if(special){
            const numb = app.random(3)
            const pullFrom = numb === 1 ? specialChar : numb === 2 ? num : abc
            const char = pullFrom[app.random(pullFrom.length) - 1]
            password += abc.includes(char) === true && specialChar.includes(char) === false && caps === 2 ? char.toUpperCase() : char
        } else {
            const numb = app.random(2)
            const pullFrom = numb === 1 ? num : abc
            const char = pullFrom[app.random(pullFrom.length) - 1]
            password += abc.includes(char) === true && caps === 2 ? char.toUpperCase() : char
        }
    }
    return password
}

module.exports = app