/*

FULFILLED 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면, finally()를 설정하고,
함수를 인자로 넣습니다.
*/
function p(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject(new Error('bad'));
    },1000)
  })
}

p()
.then(message=>{
  console.log('1000ms 후에 fulfilled됩니다',message);
})
.catch(error=>{
  console.log('1000ms 후에 rejected 됩니다.',error);
})
.finally(()=>{
  console.log('end');
})
 

/*
보통 비동기 작업을 할때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다.
이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다.

*/


function c(callback){
  setTimeout(()=>{
    callback();
  },1000)
}

c(()=>{
  console.log('1000ms 후에 callback 함수가 실행됩니다.');
})