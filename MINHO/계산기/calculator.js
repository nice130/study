const log = console.log;
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

const $clearBtn = document.querySelector("#clearBtn");
const $InputBox = document.querySelector("#numberInput");
const $displayBox = document.querySelector(".displayBox");
const $comma = document.querySelector("#comma");
const $equal = document.querySelector("#equal");
let checkBtn = false

function onClickNumber () {
    if (calObj.checkBtn) {
      $InputBox.value = ""
    }
    const textValue = this.innerHTML;
    $displayBox.innerHTML   += textValue;
    $InputBox.value   += textValue;
    checkBtn = false
   
}

function onClickOperator () {
    const operatorValue = this.innerHTML;
    $displayBox.innerHTML   += operatorValue;
    calObj.op = operatorValue;
    checkBtn = true;
    if (!calObj.checkPreNum) {
      calObj.preNum = Number($InputBox.value)
      console.log(calObj.preNum)
      calObj.checkPreNum = true
    } else {
      calObj.nextNum = Number($InputBox.value)
      console.log(calObj.nextNum)
      $InputBox.value = "";
      calObj.resultFn(calObj.preOp)
      calObj.preNum = calObj.result
      if (calObj.op == '=') {
        calObj.checkPreNum = false
        $displayBox.innerHTML += calObj.result +', '
      }
    }
    calObj.preOp = calObj.op;
}
// // 숫자버튼 클릭시 inputNum함수 호출
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', onClickNumber);
}

// 연산자버튼 클릭시
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', onClickOperator);
}

$comma.addEventListener('click', function() {
    log(this.innerHTML);
})

let calObj = {
  result : 0,
  preNum : 0,
  checkPreNum : false,
  nextNum : 0,
  preObj : null,
  op : null,
  resultFn: function(op) {
    switch (op) {
    case '+':
    calObj.result = calObj.preNum + calObj.nextNum
    console.log("result"+calObj.result)
    break;
    case '-':
      calObj.result = calObj.preNum - calObj.nextNum
    console.log("result"+calObj.result)
    break;
    case '*':
      calObj.result = calObj.preNum * calObj.nextNum
    console.log("result"+calObj.result)
    break;
    case '/':
      calObj.result = calObj.preNum / calObj.nextNum
    console.log("result"+calObj.result)
    break;
    }
    $displayBox.value = calObj.result
  }
}

// // 계산기 객체
// let cal = {
//   result: 0,
//   preNum: 0,
//   nextNum: 0,
//   preOp: null,
//   op: null,
//   calculator: function() {
//     var inputText = this.innerHTML
//     cal.op = inputText
//     showBox.innerHTML += inputText
//     checkBtn = true
//     if (!checkPreNum) {
//       cal.preNum = Number(numInput.value)
//       console.log(cal.preNum)
//       checkPreNum = true
//     } else {
//       cal.nextNum = Number(numInput.value)
//       console.log(cal.nextNum)
//       clearNum()
//       cal.resultFn(cal.preOp)
//       cal.preNum = cal.result
//       if (cal.op == '=') {
//         checkPreNum = false
//         showBox.innerHTML += cal.result +', '
//       }
//     }
//     cal.preOp = cal.op
//   },
//   resultFn: function(op) {
//     switch (op) {
//     case '+':
//     cal.result = cal.preNum + cal.nextNum
//     console.log("result"+cal.result)
//     break;
//     case '-':
//     cal.result = cal.preNum - cal.nextNum
//     console.log("result"+cal.result)
//     break;
//     case '*':
//     cal.result = cal.preNum * cal.nextNum
//     console.log("result"+cal.result)
//     break;
//     case '/':
//     cal.result = cal.preNum / cal.nextNum
//     console.log("result"+cal.result)
//     break;
//     }
//     numInput.value = cal.result
//   }
// }


$clearBtn.addEventListener('click', function() {
  $InputBox.value = "";
  $displayBox.innerHTML = "";
})