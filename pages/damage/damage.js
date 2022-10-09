var a = require("../../@babel/runtime/helpers/defineProperty");

Page({
    data: {
        attack: 0,
        elementalMastery: 0,
        critRate: 0,
        critDamage: 0,
        physicalAddition: 0,
        elementalAddition: 0,
        damageRate: 100,
        otherAddition: 0,
        reduceDefense: 0,
        reduceResistance: 0,
        level: 0,
        monsterLevel: 0,
        index: "0",
        index2: "0",
        damageCalculate: 0,
        commonDamageCalculate: 0,
        critDamageCalculate: 0,
        array: [ "物理", "雷", "火", "水", "冰", "风", "岩", "火水蒸发", "冰火融化", "水火蒸发", "火冰融化" ],
        objectArray: [ {
            id: 0,
            magnification: 1,
            name: "物理"
        }, {
            id: 1,
            magnification: 1,
            name: "雷"
        }, {
            id: 2,
            magnification: 1,
            name: "火"
        }, {
            id: 3,
            magnification: 1,
            name: "水"
        }, {
            id: 4,
            magnification: 1,
            name: "冰"
        }, {
            id: 5,
            magnification: 1,
            name: "风"
        }, {
            id: 6,
            magnification: 1,
            name: "岩"
        }, {
            id: 7,
            magnification: 1.5,
            name: "火水蒸发"
        }, {
            id: 8,
            magnification: 1.5,
            name: "冰火融化"
        }, {
            id: 9,
            magnification: 2,
            name: "水火蒸发"
        }, {
            id: 10,
            magnification: 2,
            name: "火冰融化"
        } ],
        array2: [ "史莱姆", "丘丘人", "暴徒丘丘人", "丘丘人萨满", "岩盔王", "遗迹守卫者", "遗迹猎者", "炽热骗骗花", "冰霜骗骗花", "愚人众", "债务处理人", "雷莹术士", "盗宝团", "幼岩龙蜥", "深渊法师", "无相", "炎爆树", "炎爆树（击倒）", "急冻树", "急冻树（击倒）", "风魔龙", "北风狼" ],
        objectArray2: [ {
            id: 0,
            thunder: 10,
            fair: 10,
            water: 10,
            ice: 10,
            wind: 10,
            rock: 10,
            physics: 10,
            name: "史莱姆"
        }, {
            id: 1,
            name: "丘丘人"
        }, {
            id: 2,
            physics: 30,
            name: "暴徒丘丘人"
        }, {
            id: 3,
            name: "丘丘人萨满"
        }, {
            id: 4,
            rock: 70,
            physics: 50,
            name: "岩盔王"
        }, {
            id: 5,
            physics: 70,
            name: "遗迹守卫者"
        }, {
            id: 6,
            physics: 50,
            name: "遗迹猎者"
        }, {
            id: 7,
            thunder: 35,
            fair: 75,
            water: 35,
            ice: 35,
            wind: 35,
            rock: 35,
            physics: 35,
            name: "炽热骗骗花"
        }, {
            id: 8,
            thunder: 35,
            fair: 35,
            water: 35,
            ice: 75,
            wind: 35,
            rock: 35,
            physics: 35,
            name: "冰霜骗骗花"
        }, {
            id: 9,
            physics: -20,
            name: "愚人众"
        }, {
            id: 10,
            fair: 50,
            physics: -20,
            name: "债务处理人"
        }, {
            id: 11,
            thunder: 50,
            physics: -20,
            name: "雷莹术士"
        }, {
            id: 12,
            physics: -20,
            name: "盗宝团"
        }, {
            id: 13,
            rock: 50,
            physics: 30,
            name: "幼岩龙蜥"
        }, {
            id: 14,
            name: "深渊法师"
        }, {
            id: 15,
            name: "无相"
        }, {
            id: 16,
            thunder: 81.5,
            fair: 87,
            water: 81.5,
            ice: 81.5,
            wind: 81.5,
            rock: 81.5,
            physics: 84,
            name: "炎爆树"
        }, {
            id: 17,
            fair: 70,
            name: "炎爆树（击倒）"
        }, {
            id: 18,
            thunder: 81.5,
            fair: 81.5,
            water: 81.5,
            ice: 87,
            wind: 81.5,
            rock: 81.5,
            physics: 84,
            name: "急冻树"
        }, {
            id: 19,
            ice: 70,
            name: "急冻树（击倒）"
        }, {
            id: 20,
            name: "风魔龙"
        }, {
            id: 21,
            name: "北风狼"
        } ]
    },
    setAttack: function(a) {
        var e = a.detail.detail.value;
        isNaN(e) || this.setData({
            attack: e
        });
    },
    setElementalMastery: function(a) {
        var e = a.detail.detail.value;
        isNaN(e) || this.setData({
            elementalMastery: e
        });
    },
    setCritRate: function(a) {
        var e = a.detail.detail.value;
        isNaN(e) || this.setData({
            critRate: e
        });
    },
    setCritDamage: function(a) {
        var e = a.detail.detail.value;
        isNaN(e) || this.setData({
            critDamage: e
        });
    },
    setPhysicalAddition: function(a) {
        var e = a.detail.detail.value;
        isNaN(e) || this.setData({
            physicalAddition: e
        });
    },
    setElementalAddition: function(a) {
        var e = a.detail.detail.value;
        isNaN(e) || this.setData({
            elementalAddition: e
        });
    },
    setDamageRate: function(a) {
        var e = a.detail.detail.value;
        isNaN(e) || this.setData({
            damageRate: e
        });
    },
    setOtherAddition: function(a) {
        var e = a.detail.detail.value;
        isNaN(e) || this.setData({
            otherAddition: e
        });
    },
    setReduceDefense: function(a) {
        var e = a.detail.detail.value;
        isNaN(e) || this.setData({
            reduceDefense: e
        });
    },
    setReduceResistance: function(a) {
        var e = a.detail.detail.value;
        isNaN(e) || this.setData({
            reduceResistance: e
        });
    },
    bindPickerChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            index: a.detail.value
        });
    },
    bindPickerChange2: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            index2: a.detail.value
        });
    },
    handleLevel: function(a) {
        var e = a.detail;
        this.setData({
            level: e.value
        });
    },
    handleMonsterLevel: function(a) {
        var e = a.detail;
        this.setData({
            monsterLevel: e.value
        });
    },
    reset: function(e) {
        var i;
        this.setData((a(i = {
            attack: 0,
            elementalMastery: 0,
            critRate: 0,
            critDamage: 0,
            physicalAddition: 0,
            elementalAddition: 0,
            damageRate: 100,
            otherAddition: 0,
            reduceDefense: 0
        }, "reduceDefense", 0), a(i, "level", 0), a(i, "monsterLevel", 0), a(i, "index", "0"), 
        a(i, "index2", "0"), a(i, "damageCalculate", 0), a(i, "commonDamageCalculate", 0), 
        a(i, "critDamageCalculate", 0), a(i, "blank", ""), i));
    },
    done: function(a) {
        var e = 0;
        if (e = this.data.attack * this.data.damageRate / 100, e *= (this.data.level + 100) / (this.data.level + 100 + (this.data.monsterLevel + 100) * (1 - this.data.reduceDefense / 100)), 
        e *= this.data.physicalAddition / 100 + this.data.elementalAddition / 100 + 1, e *= 1 + this.data.otherAddition / 100, 
        this.data.index >= 7) {
            var i = -2e-4 * this.data.elementalMastery * this.data.elementalMastery + .4527 * this.data.elementalMastery + 1.0058;
            0 == this.data.elementalMastery && (i = 0), e = e * (i / 240 + 1) * this.data.objectArray[this.data.index].magnification;
        }
        var t = this.data.objectArray2[this.data.index2], n = 0;
        switch (this.data.index) {
          case "0":
            n = this.dillDef(t.physics);
            break;

          case "1":
            n = this.dillDef(t.thunder);
            break;

          case "2":
            n = this.dillDef(t.fair);
            break;

          case "3":
            n = this.dillDef(t.water);
            break;

          case "4":
            n = this.dillDef(t.ice);
            break;

          case "5":
            n = this.dillDef(t.wind);
            break;

          case "6":
            n = this.dillDef(t.rock);
            break;

          case "7":
            n = this.dillDef(t.fair);
            break;

          case "8":
            n = this.dillDef(t.ice);
            break;

          case "9":
            n = this.dillDef(t.water);
            break;

          case "10":
            n = this.dillDef(t.fair);
        }
        var d = n / 100 - this.data.reduceResistance / 100;
        d < 0 && (d /= 2);
        var s = (e *= 1 - d) * (1 + this.data.critDamage / 100);
        a = e * (1 + this.data.critRate / 100 * this.data.critDamage / 100);
        this.setData({
            damageCalculate: a.toFixed(2),
            commonDamageCalculate: e.toFixed(2),
            critDamageCalculate: s.toFixed(2)
        });
    },
    dillDef: function(a) {
        return null == a ? 10 : a;
    },
    onLoad: function(a) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(a) {},
    onShareTimeline: function(a) {}
});