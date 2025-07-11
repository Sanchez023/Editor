<script setup>
import { onMounted } from 'vue'
// import jQuery from 'jquery'
import 'jquery.fancytree'
import 'jquery.fancytree/dist/skin-lion/ui.fancytree.less'
import 'jquery.fancytree/dist/modules/jquery.fancytree.edit'
import 'jquery.fancytree/dist/modules/jquery.fancytree.filter'

// Make jQuery available globally (as $ and jQuery)
// window.$ = window.jQuery = jQuery

onMounted(() => {
  '#tree'.fancytree({
    extensions: ['edit', 'filter'],
    source: [
      { title: 'Child 1', key: '1', lazy: true },
      { title: 'Folder 2', key: '2', folder: true, lazy: true }
    ],
    lazyLoad: function(event, data) {
      const node = data.node
      data.result = {
        url: '/getBranchData',
        data: { key: node.key }
      }
    }
  })
})
</script>

<template>
  <div id="tree"></div>
</template>