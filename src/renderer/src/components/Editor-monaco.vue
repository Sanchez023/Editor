<template>
  <div ref="editorContainer" style="height: 500px; border: 1px solid #ddd;"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

const editorContainer = ref(null); // 使用 Vue 的 ref 获取 DOM

onMounted(() => {
  // 确保 DOM 已加载后再初始化编辑器
  monaco.editor.create(editorContainer.value, {
    value: "// 你的代码在这里\nconsole.log('Hello, Monaco!');",
    language: 'javascript',
    theme: 'vs-dark', // 可选主题：'vs', 'vs-dark', 'hc-black'
    automaticLayout: true, // 自动调整大小
  });
});
</script>