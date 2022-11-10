

// static 상속

class Parent{
  static age=37;

}

class Child extends Parent{

}


// 부모-> 자식
// new키워드를 통해 생성 
// 부모(instance)-> 자식(instance)
console.log(Parent.age,Child.age);