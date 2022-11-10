

/*
p.then으로 callback 함수를 설정했기 떄문에 fulfilled되면서 callback 이 실행됩니다.

*/
const p=new Promise((resolve,reject)=>{
  // pending
  setTimeout(()=>{
    resolve(); /* fulfilled  */
  },1000)
})


// 이후에 들어오는 함수 
// resolve가 불린 fulfilled이후
p.then(()=>{
    console.log('1000ms 후에 fulfilled 됩니다.');
})