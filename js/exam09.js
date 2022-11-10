

/*
executor의 resolve 함수를 실행할떄 인자를 넣어 실행하면,then의 callback함수의 인자로
받을수 있습니다
resolve('hello')
then((message)=>{...})

*/


function p(){
  return new Promise((resolve,reject)=>{
    // pending
    setTimeout(()=>{
      resolve('hello'); 
    },1000)
  });
}


p().then((message)=>{
  console.log('1000ms 후에 rejected됩니다.,'.message);
})
.catch(()=>{
  console.log('1000ms 후에 catch됩니다.');
})