const express = require('express');
const bp = require('body-parser');
const app = express();

const PORT = 3000;
app.use(bp());

const sum = (nums) => {
  let result = 0;
  nums.forEach(e => {
    result += e;
  })
  return result;
}

const multiply = (nums) => {
  let result = 1;
  nums.forEach(e => {
    result *= e;
  })
  return result;
}

const double = (nums) => {
  let doubled = nums.map(e => e * 2);
  return doubled;
}

app.post('/arrays', (req, res) => {
  const what = req.body.what;
  const nums = req.body.numbers;
  if (what && nums) {
    switch (what) {
      case "sum":
        res.json({ "result": sum(nums) });
        break;
      case "multiply":
        res.json({ "result": multiply(nums) });
        break;
      case "double":
        res.json({ "result": double(nums) });
        break;
    }
  } else {
    res.json({
      "error": "Please provide what to do with the numbers!"
    });
  }
  res.json(double([1, 2]))
});

app.listen(PORT, () => {
  console.log('Server is running on PORT 3000');
})