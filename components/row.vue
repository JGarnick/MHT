<template>
    <div class="row-container flex just-cont--space-between">
        <div class="left align-items--ce flex">
            <span class="name">
                {{data.name}}
            </span>
            
            <span class="max">
                {{data.max}}
            </span>
            <span class="divide">
                /
            </span>
            <span class="current flex align-items--ce">
                <input type="text" name="current" :value="data.max" size="3">
            </span>
           <button class="damage" name="damage" @click="damage()"><i class="fas fa-fist-raised"></i></button>
           <button class="heal" name="heal" @click="heal()"><i class="fas fa-heart"></i></button>
        </div>
        <div class="right flex just-cont--end align-items--ce">
            <button name="remove" class="remove" @click="delete_row()"><i class="far fa-trash-alt"></i></button>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["data", "id"],
        methods: {
            damage(){
                this.$emit("damage", this.id);
            },
            heal(){
                this.$emit("heal", this.id);
            },
            delete_row(){
                this.$emit("delete_row", this.id);
            }
        }
    }
</script>