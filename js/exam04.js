
/*
생성자를 통해서 프로미스 객체를 만들 수 있습니다.
생성자의 인자로 executor함수

executor함수는 resolve와 reject를 인자로 가집니다.
(resolve,reject)=>{...}
resolve 와 reject는 함수입니다.

resolve(), reject()
*/

// 생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기) 상태라고 합니다.
// executor함수 인자중 하나인 resolve함수를 실행하면, fulfilled(이행 ) 상태가 됩니다.


new Promise((resolve,reject)=>{

  // 
  // ...
  
})

new Promise((resolve,reject)=>{
  reject();  //rejected
})