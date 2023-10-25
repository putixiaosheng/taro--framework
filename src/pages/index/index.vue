<template>
  <view class="index">
    <text>{{ msg }}</text>
    <nut-button type="primary">ss</nut-button>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.css'

export default {
  setup () {
    const msg = ref('Hello world3')
    return {
      msg
    }
  }
}
</script>
