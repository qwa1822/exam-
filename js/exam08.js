
/*
마찬가지로 프로미스 객체가 rejected되는 시점에 p.catch안에 설정한 callback 함수가 실행됩니다.

*/

function p(){
  return new Promise((resolve,reject)=>{
    // pending
    setTimeout(()=>{
      reject();  /*rejected */
    },1000)
  });
}


p().then(()=>{
  console.log('1000ms 후에 rejected됩니다.,');
})
.catch(()=>{
  console.log('1000ms 후에 catch됩니다.');
})