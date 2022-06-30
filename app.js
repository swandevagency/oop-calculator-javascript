class calcolator {
  constructor(outputResult) {
    this.input = '';
    this.outputResult = outputResult;
  }

  inputNum(event) {
    this.input = event.target.innerText;
    this.output(this.input);
    console.log(this.input, 'jkhkjhkjhjkj');
  }
  output(number) {
    console.log('true')
    this.outputResult.innerText = number;
  }


  cal() {}
}

const outputResult = document.getElementById('output');
const test = new calcolator(outputResult);

const nums = document.getElementById('nums').children;
for (let i = 0; i < nums.length; i++)
  nums[i].addEventListener('click', test.inputNum);
