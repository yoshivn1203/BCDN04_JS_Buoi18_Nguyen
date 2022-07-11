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
  let result =
    posArray.length > 0 ? Math.min(...posArray) : 'Không có số dương';
  document.getElementById('timMinDuong').innerHTML = result;
};

timSoChan = () => {
  let evenNumber = -1; // trả về -1 khi không có số chẵn
  for (i = 0; i < originalArray.length; i++) {
    originalArray[i] % 2 == 0 ? (evenNumber = originalArray[i]) : evenNumber;
  }
  document.getElementById('timSoChan').innerHTML = evenNumber;
};

doiCho = (a, b) => {
  tempNumber = originalArray[a];
  originalArray[a] = originalArray[b];
  originalArray[b] = tempNumber;
};

doiChoBai6 = () => {
  let vitri1 = document.getElementById('viTri1').value,
    vitri2 = document.getElementById('viTri2').value;
  doiCho(vitri1, vitri2);

  document.getElementById('doiChoBai6').innerHTML = originalArray;
};
