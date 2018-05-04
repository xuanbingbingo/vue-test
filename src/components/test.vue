<template>
  <div class="test">
    <div class="left">
      <ul>
        <li @click="selectType(1)">个人文档</li>
        <li @click="selectType(2)">隐私文件</li>
      </ul>
    </div>
    <div class="center">
      <div v-if="currentCenter.length > 0"><span>全选</span><input type="checkbox" @click="addAll" v-model="checkAll"></div>
      <ul>
        <li v-for="item in currentCenter" :key="item.docId"><input :checked="getChecked(item)" @click="addChecked(item)"  type="checkbox"/><span>{{item.docName}}</span></li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li v-for="item in allChecked" :key="item.docId"><span>{{item}}</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      leftType1: [{'docType': 'type1', 'docId': 1, 'docName': '名字一'}, {'docType': 'type1', 'docId': 2, 'docName': '名字二'}, {'docType': 'type1', 'docId': 3, 'docName': '名字三'}, {'docType': 'type1', 'docId': 4, 'docName': '名字四'}],
      leftType2: [{'docType': 'type2', 'docId': 5, 'docName': 'type2名字一'}, {'docType': 'type2', 'docId': 6, 'docName': 'type2名字二'}, {'docType': 'type2', 'docId': 7, 'docName': 'type2名字三'}, {'docType': 'type1', 'docId': 8, 'docName': 'type2名字四'}],
      currentCenter: [], // 当前中间区域要显示的内容
      allChecked: [], // 存储所有已选的文件
      checkAll: false // 全选状态，初始为全不选
    }
  },
  watch: {
    currentCenter () {
      console.log('中间数据变了')
      this.checkAll = false
      this.isContainer()
    }
  },
  methods: {
    selectType (type) {
      let nowType = 'leftType' + type
      this.currentCenter = this[nowType]
    },
    // 单选
    addChecked (item) {
      let _this = this
      let index = -1
      for (let i = 0; i < _this.allChecked.length; i++) {
        if (item.docId === _this.allChecked[i].docId) {
          index = i
          break
        }
      }
      if (index > -1) { // 如果数组里有这个对象，就删除
        _this.allChecked.splice(index, 1)
      } else { // 没有则添加
        _this.allChecked.push(item)
      }
      _this.isContainer()// 判断全选
    },
    // 显示是否选中
    getChecked (item) {
      let _this = this
      for (let i = 0; i < _this.allChecked.length; i++) {
        if (item.docId === _this.allChecked[i].docId) {
          return true
        }
      }
      return false
    },
    // 全选或全不选
    addAll () {
      // 将当前的中间区域显示的内容，全部添加到右边（没有的话则添加，有的话不添加，避免重复添加）
      // 如果点击前是没全选状态，则进行全选，否则进行全不选操作
      let _this = this
      for (let k = 0; k < _this.currentCenter.length; k++) {
        let index = -1
        for (let i = 0; i < _this.allChecked.length; i++) {
          if (_this.currentCenter[k].docId === _this.allChecked[i].docId) {
            index = i
            break
          }
        }
        if (index > -1 && this.checkAll) { // 如果数组里有这个对象，就不做操作
          this.allChecked.splice(index, 1)
        } else if (index === -1 && !this.checkAll) { // 没有则添加
          this.allChecked.push(_this.currentCenter[k])
        }
      }
    },
    isContainer () { // 判断中间的数组是否全部在全局数组中，如果全部都在，则全选按钮展开
      let allStatus = []
      for (let i = 0; i < this.currentCenter.length; i++) {
        let container = 'false'// 默认不在，如果在的时候，置为true
        for (let j = 0; j < this.allChecked.length; j++) {
          if (this.currentCenter[i].docId === this.allChecked[j].docId) {
            container = 'true'
          }
        }
        allStatus.push(container)
      }
      if (allStatus.indexOf('false') > -1) {
        this.checkAll = false
      } else {
        this.checkAll = true
      }
    }
  }
}
</script>
<style>
  li{
    list-style: none;
  }
  .test{
    position: relative;
    height:600px;
    border:1px solid red;
  }
  .left{
    position: absolute;
    width:200px;
    left:0;
    top:0;
    bottom:0;
    border-right:1px solid red;
  }
  .center{
    position: absolute;
    left:200px;
    width:200px;
    top:0;
    bottom:0;
    border-right:1px solid red;
  }
  .right{
    position: absolute;
    left:400px;
    top:0;
    bottom:0;
  }
</style>
