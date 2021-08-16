# is-ugly-number
Determines if a number is a ugly number or not.



## Install

`npm install --save is-ugly-number`


## Usage

```js

const isUgly = require('is-ugly-number');

isUgly(120);
//=> true

isUgly(101);
//=> false

isUgly('3960');
//=> TypeError: Expects number got string

isUgly(); 
//=> TypeError: Expects number got undefined

```

## Author

avinash <avinashkulal1977@gmail.com>