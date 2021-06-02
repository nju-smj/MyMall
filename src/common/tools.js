export function debounce(func,delay=500){
  let timer=null;
  return function(...args){
    if(timer){
      clearTimeout(timer);
    }
    timer=setTimeout(()=>{
      func.apply(this,args);
    },delay);
  }
}
export function throttle(func,delay=1000){
  let begin=0;
  return function(...args){
    let cur=new Date().getTime();
    if(cur-begin > delay){
      func.apply(this,args);
      begin=cur;
    }
  }
}