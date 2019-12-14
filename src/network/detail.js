import {request} from "./request"

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getDetailRecommend(){
  return request({
    url: '/recommend'
  })
}

//通过面向对象的方式整合数据
export class Goods {
  constructor(columns,detailInfo,itemInfo,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.nowPrice = itemInfo.highNowPrice;
    this.desc = detailInfo.desc;
    this.columns = columns
    this.services = services
  }
}

