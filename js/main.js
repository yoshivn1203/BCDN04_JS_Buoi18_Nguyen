let originalArray = [];

themSo = () => {
  let inputNum = Number(document.getElementById('inputNum').value);
  originalArray.push(inputNum);
  document.getElementById('originalArray').innerHTML = originalArray;
};

tinhTong = () => {
  let sum = 0;
  for (let i = 0; i < originalArray.length; i++)
    originalArray[i] > 0 ? (sum += originalArray[i]) : sum;
  document.getElementById('SumSoDuong').innerHTML = `Tổng số dương: ${sum}`;
};

demSoDuong = () => {
  let count = 0;
  for (let i = 0; i < originalArray.length; i++)
    originalArray[i] > 0 ? count++ : count;
  document.getElementById('DemSoDuong').innerHTML = `Số dương: ${count}`;
};

timMin = () => {
  document.getElementById('timMin').innerHTML = Math.min(...originalArray);
};

timMinDuong = () => {
  let posArray = [];
  for (let i = 0; i < originalArray.length; i++) {
    originalArray[i] > 0 ? posArray.push(originalArray[i]) : posArray;
  }
  let result =
    posArray.length > 0 ? Math.min(...posArray) : 'Không có số dương';
  document.getElementById('timMinDuong').innerHTML = result;
};

timSoChan = () => {
  let evenNumber = -1; // trả về -1 khi không có số chẵn
  for (let i = 0; i < originalArray.length; i++) {
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

sapXep = () => {
  for (let i = 0; i < originalArray.length; i++)
    for (let u = 0; u < originalArray.length - 1; u++)
      if (originalArray[u] > originalArray[u + 1]) {
        doiCho(u, u + 1);
      }
  document.getElementById('sapXep').innerHTML = originalArray;
};

checkSnt = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

timSnt = () => {
  let snt = -1; // trả về -1 khi không có số nguyên tố
  for (let i = 0; i < originalArray.length; i++) {
    if (checkSnt(originalArray[i])) {
      snt = originalArray[i];
      break;
    }
  }
  document.getElementById('timSnt').innerHTML = snt;
};

let secondArray = [];

themSoThuc = () => {
  let number = Number(document.getElementById('inputNum2').value);
  secondArray.push(number);
  document.getElementById('themSoThuc').innerHTML = secondArray;
};

demSoNguyen = () => {
  let count = 0;
  for (let i = 0; i < secondArray.length; i++) {
    Number.isInteger(secondArray[i]) ? count++ : count;
  }
  document.getElementById('demSoNguyen').innerHTML = count;
};

soSanhAmDuong = () => {
  let countPos = 0,
    countNeg = 0;
  for (let i = 0; i < originalArray.length; i++)
    originalArray[i] > 0 ? countPos++ : originalArray[i] < 0 && countNeg++;
  document.getElementById('soSanhAmDuong').innerHTML =
    countPos > countNeg
      ? 'Số dương > Số âm'
      : countPos < countNeg
      ? 'Số âm > Số dương'
      : 'Số âm = Số dương';
};
