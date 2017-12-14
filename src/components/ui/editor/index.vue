<template>
  <transition name="fade">
    <section class="editorWp">
      <div class="editorMain" id="editorMain"></div>
    </section>
  </transition>
</template>

<script>
import Editor from 'wangeditor'
export default {
  props: {
    // btnText: {
    //   type: String
    // }
  },
  mounted() {
    this.uploadImg()
  },
  methods: {
    uploadImg() {
      // 创建编辑器
      var editor = new Editor('#editorMain')
      // 配置服务器端地址
      // 将图片大小限制为 3M
      editor.customConfig.uploadImgMaxSize = 5 * 1024 * 1024
      // 限制一次最多上传 5 张图片
      editor.customConfig.uploadImgMaxLength = 8
      editor.customConfig.uploadImgHeaders = {
        Accept: 'text/x-json'
      }
      // 将 timeout 时间改为 3s
      editor.customConfig.uploadImgTimeout = 3000
      editor.customConfig.uploadImgServer = '/upload'
      editor.customConfig.uploadImgHooks = {
        before: function(xhr, editor, files) {
          // 图片上传之前触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
          // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
          // return {
          //     prevent: true,
          //     msg: '放弃上传'
          // }
        },
        success: function(xhr, editor, result) {
          // 图片上传并返回结果，图片插入成功之后触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        },
        fail: function(xhr, editor, result) {
          // 图片上传并返回结果，但图片插入错误时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        },
        error: function(xhr, editor) {
          // 图片上传出错时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },
        timeout: function(xhr, editor) {
          // 图片上传超时时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },

        // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
        // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
        customInsert: function(insertImg, result, editor) {
          // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
          // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

          // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
          var url = result.url
          insertImg(url)

          // result 必须是一个 JSON 格式字符串！！！否则报错
        }
      }
      editor.create()
    }
  }
}
</script>

<style type="text/scss" lang="scss">
@import '../../../style/_include/_all.scss';
.online-apply-link {
  width: 100%;
  height: px2rem(50);
  line-height: px2rem(50);
  font-size: px2rem(17);
  color: $white;
  font-weight: bold;
  text-align: center;
  border-radius: px2rem(8);
  display: inline-block;
}
</style>
