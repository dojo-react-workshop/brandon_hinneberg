// binaryReplace = (str, repArr = [0, 1], resultArr = []) => {
//     ind = str.indexOf('?')

//     if (ind >= 0) {
//         before_subString = str.substring(0, ind - 1)
//         after_substring = str.substring(ind + 1)

//         repArr.forEach((val)=>{
//             binaryReplace(before_subString + val + after_substring, resultArr)
//         })
//     }
//     else {
//         resultArr.push(str)

//     }
//     return resultArr
// }

// let stringArry = '1?0'
// console.log(binaryReplace(stringArry))

module.exports = function binStr(string, arry=[]){
    const firstQuestionMarkLocation = string.indexOf('?')
    if(firstQuestionMarkLocation <0){
        array.push(string);
        return array;
    }
    const firstSlice = string.slice(0, firstQuestionMarkLocation);
    const secondSlice = string.slice(firstQuestionMarkLocation + 1);
    
    binStr(firstSlice + '1'+ secondSlice, array);
    binStr(firstSlice+'0'+secondSlice,array);

    return array;

}