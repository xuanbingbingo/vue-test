<template>
  <div class="hello">
    <textarea name="" id="" style="width:300px;height:100px;" v-model="text">
    </textarea>
    <div v-show="showModal" style="width:100px;height:100px;border:1px solid #f00">
      <ul>
        <li @click="selectName(item)" v-for="item in arr" :key="item.name">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { jsPanel } from 'jspanel4'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: '',
      showModal: false,
      arr: [{name: '张哼'}, {name: '小明'}, {name: '小张'}]
    }
  },
  watch: {
    text (val) {
      if (val.substr(val.length - 1) === '@') {
        this.showModal = true
      }
    }
  },
  methods: {
    selectName (item) {
      this.showModal = false
      let tempName = item.name
      this.text += tempName
    }
  },
  mounted () {
    let img = document.createElement('img')
    img.src = 'https://www.baidu.com/img/bd_logo1.png?where=super'
    img.classList.add('jsPanel-img')
    img.style.width = '100%'
    img.style.height = '100%'
    jsPanel.create({
      position: 'center-top 0 58',
      iconfont: 'material-icons',
      headerControls: 'closeonly',
      headerTitle: 'example',
      header: false,
      contentSize: '80 80',
      container: '#app',
      content: img,
      dragit: {
        handles: '.jsPanel-img',
        start: function (panel, position) {
          // console.log(position.left, position.top)
        },
        stop: function (panel, position) { // 记录位置
          console.log(position.left, position.top)
        }
      },
      resizeit: {
        start: function (panel, size) {

        },
        stop: function (panel, size) {
          console.log(size.width, size.height)
        }
      }
      // callback: function (panel) {
      //   jsPanel.pointerdown.forEach(function (item) {
      //     panel.content.querySelector('img').addEventListener(item, function () {
      //       panel.dragit()
      //     })
      //   })
      // }
    })
    let img1 = document.createElement('img')
    img1.src = 'https://www.baidu.com/img/bd_logo1.png?where=super'
    img1.classList.add('jsPanel-img')
    img1.style.width = '100%'
    img1.style.height = '100%'
    jsPanel.create({
      iconfont: 'material-icons',
      headerControls: 'closeonly',
      headerTitle: 'example',
      header: false,
      contentSize: '80 80',
      container: '#app',
      content: img1,
      dragit: {
        handles: '.jsPanel-img',
        start: function (panel, position) {
          // console.log(position.left, position.top)
        },
        stop: function (panel, position) { // 记录位置
          console.log(position.left, position.top)
        }
      },
      resizeit: {
        start: function (panel, size) {

        },
        stop: function (panel, size) {
          console.log(size.width, size.height)
        }
      }
      // callback: function (panel) {
      //   jsPanel.pointerdown.forEach(function (item) {
      //     panel.content.querySelector('img').addEventListener(item, function () {
      //       panel.dragit()
      //     })
      //   })
      // }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.jsPanel{
  /* position: absolute!important; */
}
.jsPanel-img{
  border-top:1px solid #f00;
}
</style>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
