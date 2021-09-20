function sumFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

function sumWhile(nums) {
    let sum = 0;
    let i = 0;
    while(i < nums.length) {
        sum += nums[i];
        i++;
    }
    return sum;
}

function sumRecursion(nums, index) {
  if (index === nums.length) {
    return 0;
  } else {
    return(nums[index] + sumRecursion(nums, index+1));
  }
}

function sumTheSimpleWay(nums) {
    return _.reduce(nums, function(memo, nums) { return memo + nums});
}

let nums = [1, 2, 3, 4];
console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums, 0));
console.log(sumTheSimpleWay(nums));