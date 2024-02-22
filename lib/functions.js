const app = {}

app.checkZero = (x) => {
    let xx = x.toString();
    if(xx.length == 1){
         xx = "0" + x;
         return xx;
    }
    return xx;
}

module.exports = app;