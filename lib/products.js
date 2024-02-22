const seed  = require('./seeding')
const _func = require('./functions')

const product = {}

product.createProduct = () => {
    const product = seed.randomProduct()
    return product
}

product.createChargeInfo = (startDate,min,max) => {
    const today = new Date()
    const todayYear = today.getFullYear()
    const theDate = startDate.split('-')
    const startYear = Number(theDate[2])
    const chargeYear = seed.year(startYear,todayYear)
    const chargeMonth = chargeYear === startYear ? seed.randomMinMax(theDate[0],12) : seed.month();
    const chargeDay = _func.checkZero(chargeMonth) !== theDate[0] ? seed.date(chargeMonth)
                    : chargeMonth === 2 ? seed.randomMinMax(theDate[1],28)
                    : [4,6,9,11].includes(chargeMonth) ? seed.randomMinMax(theDate[1],30)
                    : seed.randomMinMax(theDate[1],31);
    chargeDate = chargeYear + '-' + _func.checkZero(chargeMonth) + '-' + _func.checkZero(chargeDay) + ' ' 
                + _func.checkZero(seed.randomMinMax(0,23)) + ':' + _func.checkZero(seed.randomMinMax(0,59)) + ':' 
                + _func.checkZero(seed.randomMinMax(0,59))
    
    const product = seed.randomProduct()
    const amount = seed.randomCharge(min,max)

    return {chargeDate,product,amount}
}

module.exports = product

// for(i=0;i<10;i++){
//     console.log(product.createProduct())
// }