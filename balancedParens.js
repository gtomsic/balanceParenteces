// Sample Strings
let sample1 = 'This ( is unbalanced.';
let sample2 = '(This (is (a) balanced) string.)';
let sample3 = 'This is () also ) unbalanced.';
let sample4 = 'Balanced.';

// Write your solution below:

const has_balanced_parens = (textContent) => {
  let open = false;
  let close = false;
  textContent.split('').forEach((letter) => {
    letter === '(' ? (open = !open) : '';
    letter === ')' ? (close = !close) : '';
  });
  return !!open && !!close ? true : false;
};

console.log(has_balanced_parens(`This is () also ) unbalanced.`));
