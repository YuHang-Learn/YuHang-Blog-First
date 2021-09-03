<template>
  <editor
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
  data () {
    return {
      editorOptions: {
        language: 'zh-CN'
      }
    }
  }
}
</script>
