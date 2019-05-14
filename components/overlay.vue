

<template>
    <div class="overlay-container" :class="overlay_class">
        <div class="overlay"></div>
        <slot name="row"></slot>
        <input @keyup="key" type="text" class="change-hp" size="3" value="0">
        <!-- <button class="accept">Accept</button> -->
    </div>
</template>
<script>

export default {
    props: ["type", "overlay_class", "id"],
    methods: {
        key(e){
            if(isNaN(parseInt(e.key))){
                if(e.key == "Enter"){
                    if(isNaN(e.target.value)){ e.target.value = 0; }
                    this.$emit("change_hp", this.overlay_class, e.target.value, this.id);
                    return;
                }
                
                let core_val = e.target.value.replace(/\D*/gm, '');
                e.target.value = core_val;
            }
        }
    }
}
</script>