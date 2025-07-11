<template>
  <v-navigation-drawer v-model="drawer" :width="198" permanent>
    <FileTree />
  </v-navigation-drawer>
  <div class="titleContainer" style="height: 30px">
    <v-tabs bg-color="grey-darken-3" slider-color="white" height="30" hshow-arrows>
      <div style="display: flex; align-items: center">
        <v-btn
          v-if="!drawer"
          icon="mdi-expand-all"
          size="27"
          color="grey-darken-3"
          @click.stop="drawer = !drawer"
        ></v-btn>
        <v-btn
          v-if="drawer"
          icon="mdi-collapse-all"
          size="27"
          color="grey-darken-3"
          @click.stop="drawer = !drawer"
        ></v-btn>
      </div>
      <v-tab v-for="i in 3" :key="i" :text="'Item ' + i" :value="'tab-' + i" border-t-lg></v-tab>
    </v-tabs>
  </div>
  <div ref="editorContainer" style="height: 500px"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import FileTree from './FileTree.vue'
const drawer = ref(null)
const editorContainer = ref(null) // 使用 Vue 的 ref 获取 DOM

onMounted(() => {
  // 确保 DOM 已加载后再初始化编辑器
  monaco.editor.create(editorContainer.value, {
    value: "// 你的代码在这里\nconsole.log('Hello, Monaco!');",
    language: 'javascript',
    theme: 'vs-dark', // 可选主题：'vs', 'vs-dark', 'hc-black'
    automaticLayout: true // 自动调整大小
  })
})
</script>
