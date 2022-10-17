//引入精确计算的js
const acc = require('../../utils/accurate.js');

Page({
  data: {
    num:'0',
    op:''
  },
  result : null,
  isClear : false,
  numBtn(e){
     var num = e.target.dataset.val;
     if(this.data.num === '0' || this.isClear){
       this.setData({num : num});
       this.isClear = false;
     }else{
       this.setData({num : this.data.num + num});
     }
  },
  opBtn(e){
    var op = this.data.op;
    var num = Number(this.data.num);
    this.setData({op : e.target.dataset.val});
    if(this.isClear){
      return;
    }
    this.isClear = true;
    if(this.result === null){
      this.result = num;
      return;
    }
    if(op === '+'){
      this.result = acc.add(this.result, num);
    } else if(op === '-'){
      this.result = acc.sub(this.result, num);
    } else if(op === '*'){
      this.result = acc.mul(this.result, num);
    } else if(op === '/'){
      this.result = acc.div(this.result, num);
    } else if(op === '%'){
      this.result = this.result % num;
    }
    this.setData({num : this.result + ''});
  },
  dotBtn(e){
    if (this.isClear){
      this.setData({num : '0.'});
      this.isClear = false;
      return;
    }
    if (this.data.num.indexOf('.') >= 0){
      return;
    }
    this.setData({ num : this.data.num + '.'});
  },
  delBtn(e){
    var num = this.data.num.substr(0,this.data.num.length - 1);
    this.setData({ num : num === '' ? '0' : num});
  },
  resetBtn(e){
    this.result = null;
    this.isClear = false;
    this.setData({num : '0',op : ''});
  }
})