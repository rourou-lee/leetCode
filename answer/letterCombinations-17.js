/** 
* 电话号码的字母组合
*/
//存放键盘数字和字母的映射
const numObj={
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','l'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','v'],
    9:['w','x','y','z']
}
function letterCombinations(digits) { 
    if(!digits.replace(/\s+/,'').length) return [];
    if(digits.length==1) return numObj[digits];
    let numAry=[];
    for(let i of digits){
        numAry.push(numObj[i]);
    }
    for(let index=0;index<numAry.length;index++){
        let newAry=match(numAry[index],numAry[index+1]);
        numAry.splice(0,2,newAry);
        if(numAry.length==1){
            break;
        }
        index--;
    }
    return numAry[0];
 }
function match(ary1,ary2){
    //存放两个字母组合后的整个数组
    let newAry=[];
    ary1.map((item1)=>{
        ary2.map((item2)=>{
            newAry.push(`${item1}${item2}`);
        })
    })
    return newAry;
}
module.exports=letterCombinations;