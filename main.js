// Ex ---2--- XXX-XXX-XXXX OR (XXX) XXX-XXXX TRUE

// const regex = /^(\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4})$/
// console.log(regex.test('899-563-3550'))

// Ex ---3--- http or https 

// const redex = /^(http|https):\/\/[^/s]+$/
// console.log(redex.test("https://w1237&*TWY"));

// Ex ---4--- only number

// const redex = /^\d+$/
// console.log(redex.test("1234"));

// Ex ---5--- Start A End Z

// const redex = /^A.*Z+$/
// console.log(redex.test("A12342e&*gZ"));

// Ex ---6--- find HTML tags

// const html = "<div> Hello < World > </div>"
// const regex = /<\/?[a-z][\s\S]*?>/gi;
// const res = html.match(regex)
// console.log(res);

// Ex --- Passport seria ---

// const redex = /^[A-Z]{2}\d{6}$/
// console.log(redex.test("AC123456"));