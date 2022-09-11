const log = console.log;
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

const $clearBtn = document.querySelector("#clearBtn");
const $InputBox = document.querySelector("#numberInput");
const $displayBox = document.querySelector(".displayBox");
const $comma = document.querySelector("#comma");
const $equal = document.querySelector("#equal");
let checkBtn = false

// function onClickNumber () {
//     if (calObj.preOp)
//     if (calObj.checkBtn) {
//       $InputBox.value = ""
//     }
//     const textValue = this.innerHTML;
//     $displayBox.innerHTML   += textValue;
//     $InputBox.value   += textValue;
//     checkBtn = false
   
// }

// function onClickOperator () {
//     const operatorValue = this.innerHTML;
//     $displayBox.innerHTML   += operatorValue;
//     calObj.op = operatorValue;
//     checkBtn = true;
//     if (!calObj.checkPreNum) {
//       calObj.preNum = Number($InputBox.value)
//       console.log(calObj.preNum)
//       calObj.checkPreNum = true
//     } else {
//       calObj.nextNum = Number($InputBox.value)
//       console.log(calObj.nextNum)
//       $InputBox.value = "";
//       calObj.resultFn(calObj.preOp)
//       calObj.preNum = calObj.result
//       if (calObj.op == '=') {
//         calObj.checkPreNum = false
//         $displayBox.innerHTML += calObj.result +', '
//       }
//     }
//     calObj.preOp = calObj.op;
// }

const onClickNumber = (e) => {
  const numberValue = e.target.textContent;
  $displayBox.innerHTML += numberValue;
  if (!calObj.op) {
    calObj.preNum += numberValue;
    $InputBox.value += numberValue;
    return;
  }
  if (!calObj.nextNum) {
    $InputBox.value = '';
  }
  calObj.nextNum += numberValue;
  $InputBox.value += numberValue;

}

const onClickOperator = (e) => {
  const operatorValue = e.target.value;
  $displayBox.innerHTML += operatorValue;
  if (calObj.preNum) {
      calObj.op = operatorValue;
  }
  if (calObj.nextNum) {
    calObj.resultFn(operatorValue);
  }
}

const onClearValue = () => {
  $InputBox.value = "";
  $displayBox.innerHTML = "";
  calObj.result, calObj.preNum, calObj.nextNum = '';
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

$clearBtn.addEventListener('click', onClearValue);

let calObj = {
  result : '',
  preNum : '',
  nextNum : '',
  op : '',
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
    onClearValue();
    calObj.preNum = calObj.result;
    $InputBox.value = calObj.result;
  }
}



