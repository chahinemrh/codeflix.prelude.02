module.exports = function map(list, iterateCb){
    let arr = []
    for (let item of Object.entries(list)){
        console.log(item);
        [key, value] = item
        let res = iterateCb(value)
        arr.push(res)
        //let res = iterateCb(value)
        // arr.push(res)
    }
    return arr
 }