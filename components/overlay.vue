<template>
    <div class="overlay-container">
        <div class="overlay"></div>
        <slot></slot>
        <input @keyup="key" type="number" pattern="\d*" min=0 max=999 class="change-hp" value="0">
    </div>
</template>
<script>
    export default {
        props: ["type"],
        methods: {
            key(e){
                if(e.key == "Enter"){
                    this.$emit("change_hp", e.target.value);
                }
                
                if(isNaN(parseInt(e.key))){
                    // ???
                }
            }
        }
    }
</script>