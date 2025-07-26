import * as monaco from 'monaco-editor';
import { onMounted,onUnmounted,ref,watch,toRefs, type Ref } from 'vue';

export function useMonacoEditor(
    container:Ref<HTMLElement|null>,
    options:{
        value:string;
        language:string;
        theme:string;
        editorOptions?:monaco.editor.IStandaloneEditorConstructionOptions;
    }
){
    const editor = ref<monaco.editor.IStandaloneCodeEditor| null>(null);
    const {value,language,theme,editorOptions} = toRefs(options);

    // init editor
    const initEditor = () => {
        if (!container.value) return;

        editor.value = monaco.editor.create(container.value,{
            value:value.value,
            language:language?.value || 'sql',
            theme: theme?.value ||'vs',
            automaticLayout:true,
            ...editorOptions?.value,
        });
    
        // listening content change
        editor.value.onDidChangeModelContent(()=>{
            const newValue = editor.value?.getValue()||'';
            if (newValue != value.value){
                options.value = newValue
            }
        })

        // listening outer value change
        watch(value,(newValue)=>{
            if (editor.value &&editor.value.getValue() !== newValue){
                editor.value.setValue(newValue);
            }
        })

        // listening language change
        watch(language,(newLanguage)=>{
            if(editor.value && newLanguage){
                const model = editor.value.getModel();
                if (model){
                    monaco.editor.setModelLanguage(model,newLanguage)
                }
            }
        })
        // listening theme change
        watch(theme,(newtheme)=>{
            if(newtheme){
                monaco.editor.setTheme(newtheme);
            }
        })
    }
    onMounted(initEditor);
    onUnmounted(()=>{
        if(editor.value){
            editor.value.dispose();
        }
    })
    return {
        editor
    }
}