//一维数组的动态和
function runningSum (nums) {
    let newNums=nums.map((item,index)=>{
        let newIndex=index;
        let newNum=0
        while(newIndex>=0){
            newNum+=nums[newIndex];
            newIndex--;
        }
        return newNum;
    })
    return newNums;
};
module.exports=runningSum;