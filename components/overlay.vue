<template>
    <div class="overlay-container">
        <div class="overlay"></div>
        <slot></slot>
        <input @keyup="key" type="text" class="change-hp" size="3" value="0">
    </div>
</template>
<script>
import $ from "jquery";
    export default {
        props: ["type"],
        methods: {
            key(e){
                if(isNaN(parseInt(e.key))){
                    if(e.key == "Enter"){
                        this.$emit("change_hp", e.target.value);
                        return;
                    }
                    
                    let core_val = $(e.target).val().replace(/\D*/gm, '');
                    $(e.target).val(core_val);
                }
            }
        }
    }
</script>