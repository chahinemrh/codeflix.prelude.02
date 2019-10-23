module.exports = function keys (obj){
    //return Object.keys(obj)
    let arr = []
    for (const item of Object.entries(obj)){
        const [key, value] = item
        arr.push (key)
    }
    return arr
 }