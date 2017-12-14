<template>
	<div id="editorMainWp">
    <el-row>
      <el-col :span="24">
      <el-breadcrumb separator="/" class="title">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/pubArticle' }">个人中心</el-breadcrumb-item>
          <el-breadcrumb-item>发表文章</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col> 
			<el-col :span="24">
        <el-col :span="8">
          <el-input class="pubTitle" placeholder="请输入内容" v-model="input1">
            <template slot="prepend">标题：</template>
          </el-input>
        </el-col> 
      </el-col>
      <el-col :span="24">
        <el-col :span="5">
          <el-input  class="pubAuthor" placeholder="请输入内容" v-model="input2">
            <template slot="prepend">作者：</template>
          </el-input>
        </el-col>
      </el-col>
      <el-col :span="14">
        <Editor></Editor>
      </el-col>
      <el-col :span="24">
        <el-col :span="4" class="formBtn">
          <el-button type="primary" @click="onSubmit">发表</el-button>
          <el-button>取消</el-button>
        </el-col>
      </el-col>
    </el-row>
    
	</div>
</template>

<script>
import Editor from 'editor'
export default {
  name: 'app',
  data: function() {
    return {
      input1: '',
      input2: ''
    }
  },
  components: {
    Editor
  },
  methods: {
    onSubmit() {}
  }
}
</script>
<style type="text/scss" lang="scss">
@import '../../style/_include/_all.scss';
/*body*/
#editorMainWp {
  .title {
    padding-top: 10px;
    padding-bottom: 30px;
  }
  .pubTitle,
  .pubAuthor {
    margin-bottom: 10px;
  }
  .itemInfo {
    display: inline-block;
    font-size: 14px;
  }
  .formBtn {
    padding: 20px 20px 20px 0;
  }
}
</style>
