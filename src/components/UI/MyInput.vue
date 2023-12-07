<template lang="">
    <input :value='modelValue' class='inp' type="text" @input="updateInput">
</template>
<script>
export default {
    name:'my-input',
    props:{
        modelValue:[String, Number]
    },
    methods:{
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style lang="">
    
</style>