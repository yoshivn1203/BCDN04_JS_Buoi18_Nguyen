let originalArray = [];

themSo = () => {
  let inputNum = Number(document.getElementById('inputNum').value);
  originalArray.push(inputNum);
  document.getElementById('originalArray').innerHTML = originalArray;
};

tinhTong = () => {
  let sum = 0;
  for (i = 0; i < originalArray.length; i++)
    originalArray[i] > 0 && (sum += originalArray[i]);
  document.getElementById('SumSoDuong').innerHTML = 'Tổng số dương: ' + sum;
};
