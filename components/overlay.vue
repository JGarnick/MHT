

<template>
    <div class="overlay-container" :class="overlay_class">
        <div class="overlay"></div>
        <slot name="row"></slot>
        <input @keyup="key" type="text" class="change-hp" size="3" value="0">
        <button @click="clicked" class="accept"><i class="fas fa-check"></i></button>
    </div>
</template>
<script>
const $j = require("jquery");
export default {
    props: ["type", "overlay_class", "id"],
    mounted(){
        
		$j(window).on("click", (e) => {
            let el = $j(this.$el);
            var is_button = $j(e.target).is("button.damage") || $j(e.target).is("button.heal") || $j(e.target).parent().is("button.damage") || $j(e.target).parent().is("button.heal");
            console.log(is_button);
			if(!$j(e.target).closest(".overlay-container").is(el) && !is_button){
				el.removeClass("damage").removeClass("heal");
				return;
			}
		});
    },
    methods: {
        key(e){
            if(isNaN(parseInt(e.key))){
                if(e.key == "Enter"){
                    if(isNaN(parseInt(e.target.value))){ e.target.value = 0; }
                    this.$emit("change_hp", this.overlay_class, e.target.value, this.id);
                    return;
                }
                
                let core_val = e.target.value.replace(/\D*/gm, '');
                e.target.value = core_val;
            }
        },
        clicked(e){
            var children = [...this.$el.children];
            var hp = children.filter(el => el.classList.contains("change-hp"))[0].value;
            
            if(isNaN(parseInt(hp))){ hp = 0; }
            this.$emit("change_hp", this.overlay_class, hp, this.id);
            return;
        }
    }
}
</script>