import Toast from './Toast'
let obj={};
obj.install=(Vue)=>{
  console.log('-------');
  let toastConstrutor=Vue.extend(Toast);
  let ToastInstance=new toastConstrutor();
  ToastInstance.$mount(document.createElement('div'));
  document.body.appendChild(ToastInstance.$el);
  Vue.prototype.$toast=ToastInstance;
};
export default obj