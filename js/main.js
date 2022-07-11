let originalArray = [];

themSo = () => {
  let inputNum = Number(document.getElementById('inputNum').value);
  originalArray.push(inputNum);
  document.getElementById('txtArray').innerHTML = originalArray;
};
