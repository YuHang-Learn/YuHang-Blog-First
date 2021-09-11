<template>
  <editor
    :initialValue="content"
    ref='toastuiEditor'
    @change="onEditorChange"
    :options="editorOptions"
    height="800px"
    initialEditType="markdown"
    previewStyle="vertical"
  />
</template>

<script>
import { Editor } from '@toast-ui/vue-editor'
import '@toast-ui/editor/dist/i18n/zh-cn.js'
import '@toast-ui/editor/dist/toastui-editor.css'
export default {
  name: 'Markdown',
  components: {
    Editor
  },
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      editorOptions: {
        language: 'zh-CN'
      },
      editorText: ''
    }
  },
  created () {
    this.$refs.toastuiEditor.invoke('setHTML', this.content, true)
  },
  methods: {
    onEditorChange () {
      this.editorText = this.$refs.toastuiEditor.invoke('getMarkdown')
      console.log(this.editorText)
    }
  }
}
</script>
