//의상

function solution(clothes) {
  let clothesNum = clothes.length;
  let clothesObj = {};
  let clothesArr = [];

  clothes.forEach((item) => {
    clothesObj[item[1]] ? clothesObj[item[1]]++ : (clothesObj[item[1]] = 1);
  });

  if (Object.keys(clothesObj).length === 1) return clothesNum;
  clothesArr = Object.values(clothesObj);

  clothesArr = clothesArr.reduce((acc, cur) => acc * (cur + 1), 1);
  return clothesArr - 1;
}
