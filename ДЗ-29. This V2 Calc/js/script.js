let calculator = {      
    read() {
        this.a = +prompt('First num');
        this.b = +prompt('Second num');
      },
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    }
  };
  
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

console.log(typeof calculator.a)
console.log(typeof calculator.b)
