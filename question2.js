// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const nums = [1,2,3,4,1];
const newArray = [];
let isRepeat = false;

for (let i = 0 ; i < nums.length ; i++) {
    if (newArray.find(value => nums[i] === value)) isRepeat = true;
    else newArray.push(nums[i]);
}

console.log('isRepeat', isRepeat);
console.log(nums.lastIndexOf(1));

