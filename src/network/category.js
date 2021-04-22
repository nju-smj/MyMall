import {request} from './request'

export function getTypes(){
  return request({
    url: '/category'
  })
}

export function getGoodsByKey(maitKey){
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  });
}

export function getSubTypeDetail(miniWallkey, type){
  return request({
    url: '/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  });
}