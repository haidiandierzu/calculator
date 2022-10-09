Page({
  data:{
   height:null,
   weight:null,
   bmi:'卡路里为'
  },
  heightInput(e){
    this.setData({
      height: e.detail.value
  })
},
  weightInput(e){
    this.setData({
      weight:e.detail.value
    })
  },
  bmi:function(event){
    var weightnum=parseFloat(this.data.weight)
    var heightnum=parseFloat(this.data.height)
    var bmi=(464*heightnum*weightnu/weightnum).toFixed(2)
    var info=""
    console.log(bmi)
    console.log(info)
    this.setData({
      bmi:bmi,
      info:info
    })
  }
})