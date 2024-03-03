const seed  = require('./seeding')
const _func = require('./functions')

const product = {}

product.createProduct = () => {
    const product = seed.randomProduct()
    return  {product}
}

product.createAmount = (low,high) => {
    const amount = seed.randomCharge(low,high)
    return {amount}
}

product.createChargeDate = (startDate) => {
    const chargeDate = seed.randomDateByStartDate(startDate)

    return {chargeDate}
}

product.createChargeInfo = (startDate,min,max) => {
    const chargeDate = seed.randomDateByStartDate(startDate)
    const product = seed.randomProduct()
    const amount = seed.randomCharge(min,max)

    return {chargeDate,product,amount}
}

module.exports = product