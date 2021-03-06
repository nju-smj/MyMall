const path=require('path');
function resolve(dir){
  return path.join(__dirname,dir);
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  
  chainWebpack:(config)=>{
    config.resolve.alias
    .set("@",resolve('./src'))
    .set("assets",resolve('./src/assets'))
    .set('components',resolve('./src/components'))
    .set('common',resolve('./src/common'))
    .set('views',resolve('./src/views'))
    .set('network',resolve('./src/network'))
    .set('store',resolve('./src/store'))
  }
}