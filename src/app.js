import { createApp } from 'vue'
import './app.css'
import "@nutui/nutui-taro/dist/style.css";
//import { Button } from "@nutui/nutui-taro"; 按需引入
const App = createApp({
  onShow (options) {
    console.log('App onShow.')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
//App.use(Button)
export default App
