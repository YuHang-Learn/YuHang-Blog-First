<template>
  <el-card class="card">
      <editor ref="editor" :content="form.article_content" />
    <el-button type="primary" class="btn" @click="publish">发表</el-button>
    <el-drawer
      title="发布文章"
      :visible.sync="dialog"
      custom-class="demo-drawer"
      ref="drawer"
      @open="handleOpen"
      size="40%"
      append-to-body
      >
      <div class="demo-drawer__content">
        <el-form :model="form" class="formc" size="medium">
          <el-form-item label="文章标题" label-width="80px">
            <el-input v-model="form.article_title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="文章分类" label-width="80px">
            <el-select v-model="form.classify_id" placeholder="请选择文章分类">
              <el-option
              v-for="(item, index) in categoryList"
              :key="index"
              :label="item"
              :value="index + 1"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文章封面" label-width="80px">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="摘要" label-width="80px">
            <el-input type="textarea" v-model="form.article_abstract"></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="dialog = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        </div>
      </div>
    </el-drawer>
  </el-card>
</template>

<script>
import Editor from '@/components/editor/Editor'
import { getCategoryList } from '@/api/category'
import { publishArticle } from '@/api/article'
export default {
  name: 'Publish',
  components: {
    Editor
  },
  data () {
    return {
      dialog: false,
      loading: false,
      form: {
        article_id: 0,
        article_title: '',
        classify_id: '',
        article_photo: 'xx',
        article_abstract: '',
        article_content: ''
      },
      categoryList: [],
      isChange: false
    }
  },
  created () {
    this.judgeChanged()
  },
  methods: {
    publish () {
      this.form.article_content = this.$refs.editor.$data.editorText
      this.dialog = true
    },
    handleOpen () {
      getCategoryList().then(res => {
        this.categoryList = res.data
      })
    },
    onSubmit () {
      if (this.$route.params.row) {
        this.isChange = true
      }
      this.loading = true
      this.form.user_id = this.$store.state.userInfo.user_id
      console.log('---')
      console.log(this.form)
      publishArticle(this.form, this.isChange).then(res => {
        this.loading = false
        this.$message({
          message: `${this.isChange ? '修改成功' : '发布成功'}`,
          type: 'success'
        })
        this.dialog = false
        this.$router.push('/')
        this.isChange = false
      })
    },
    judgeChanged () {
      if (this.$route.params.row) {
        console.log(this.$route.params.row)
        this.$nextTick(() => {
          console.log(this.$refs.editor)
        })
        this.form.article_id = this.$route.params.row.article_id
        this.form.article_content = this.$route.params.row.article_content
        this.form.article_title = this.$route.params.row.article_title
        this.form.classify_id = this.$route.params.row.classify_id
        this.form.article_photo = this.$route.params.row.article_photo
        this.form.article_abstract = this.$route.params.row.article_abstract
      }
    }
    // this.$confirm('确定要提交表单吗？')
    //   .then(_ => {
    //     this.loading = true
    //     this.timer = setTimeout(() => {
    //       done()
    //       // 动画关闭需要一定的时间
    //       // setTimeout(() => {
    //       this.loading = false
    //       // }, 400)
    //     }, 2000)
    //   })
    //   .catch(_ => {})
    // },
    // cancelForm () {
    //   this.loading = false
    //   this.dialog = false
    //   clearTimeout(this.timer)
    // }
  }
}
</script>

<style lang="less" scoped>
.card {
  height: 100%!important;
  opacity: .8;
}
.el-card /deep/ .el-card__body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    .btn {
    margin-top: 10px;
  }
}

.demo-drawer__content{
  display: flex;
  flex-direction: column;
  height: 100%;
  .formc {
    flex: 1;
  }
}
.demo-drawer__footer {
  display: flex;
  margin-bottom: 10px;
  .el-button {
    flex: 1;
  }
}
</style>
