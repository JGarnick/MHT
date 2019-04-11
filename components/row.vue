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
                <input type="text" name="current" :value="data.max">
            </span>
           
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

            },
            heal(){

            },
            delete_row(){
                this.$emit("delete_row", this.id);
            }
        }
    }
</script>