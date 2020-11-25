const twoSum_1 = function (nums, target) {
  const resArr = [];

  for (let i = 0; i < nums.length - 1; i++) {
    const item_i = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const item_j = nums[j];
      if (item_i + item_j === target) {
        resArr.push(i, j);
      }
    }
  }
  return resArr
};
// console.time("sort");
// const nums_1 = [0, 1, 2, 3, 4, 5, 6];
// const target_1 = 6;
// const res_1 = twoSum_1(nums_1, target_1);
// console.timeEnd("sort");
// console.log("nums", res_1);


const twoSum_2 = function (nums, target) {
  let map = {};
  let loop = 0;
  let dis;

  while (loop < nums.length) {
    dis = target - nums[loop];
    if(map[dis] !== undefined) {
      return [map[dis], loop];
    }
    map[nums[loop]] = loop;
    loop ++
  }
  return [];

  // console.log('nums', nums);
  // let map = {};
  // let loop = 1;
  // let dis;

  // while (loop < nums.length) {
  //
  //
  //   dis = target - nums[loop];
  //   if (map[dis] !== undefined) {
  //     return [map[dis], loop]
  //   }
  //   map[nums[loop]] = loop;
  //   loop++;
  // }
};

// const nums = [0, 1, 2, 3, 4, 5, 6];
// const target = 6;
const nums_2 = [2,7,11,15];
const target_2 = 9;


const res_2 = twoSum_2(nums_2, target_2);
console.warn('res_2', res_2);

const twoSum_3 = function (nums, target) {
  let i = nums.length;

  while (i > 1) {
    let last = nums.pop();
    let another = nums.indexOf(target - last);
    if (another > -1) return [another, nums.length];
    i--
  }
};

const nums_3 = [2,7,11,15];
const target_3 = 9;
const res_3 = twoSum_3(nums_3, target_3);
// console.log('res_3', res_3);


