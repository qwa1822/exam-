

class Parent{
  name;


  constructor(name){
    this.name=name;
  }

  hello(){
    console.log('hello',this.name);
  }
}

class Child extends Parent {
  age;

  constructor(name,age){
    // super를 통해 부모요소를 먼저하게함.
      super(name);
      this.age=age;
  }

  hello(){
    console.log('hello',this.name,this.age);
  }
}


const p=new Parent('Mark');

p.hello();
const c=new Child('Mark',37);
c.hello();
