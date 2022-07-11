let originalArray = [];

themSo = () => {
  let inputNum = Number(document.getElementById('inputNum').value);
  originalArray.push(inputNum);
  document.getElementById('originalArray').innerHTML = originalArray;
};

tinhTong = () => {
  let sum = 0;
  for (i = 0; i < originalArray.length; i++)
    originalArray[i] > 0 ? (sum += originalArray[i]) : sum;
  document.getElementById('SumSoDuong').innerHTML = `Tổng số dương: ${sum}`;
};

DemSoDuong = () => {
  let count = 0;
  for (i = 0; i < originalArray.length; i++)
    originalArray[i] > 0 ? count++ : count;
  document.getElementById('DemSoDuong').innerHTML = `Số dương: ${count}`;
};

timMin = () => {
  document.getElementById('timMin').innerHTML = Math.min(...originalArray);
};

timMinDuong = () => {
  let posArray = [];
  for (i = 0; i < originalArray.length; i++) {
    originalArray[i] > 0 ? posArray.push(originalArray[i]) : posArray;
  }
  document.getElementById('timMinDuong').innerHTML = Math.min(...posArray);
};
