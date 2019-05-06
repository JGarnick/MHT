import Vue from "vue";
import jQuery from "jquery";

const requireComponent = require.context(
    // The relative path of the components folder
    '../components',
    // Whether or not to look in subfolders
    false,
    // The regular expression used to match base component filenames
    /[^\.]+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = "v-" + fileName.replace(/^\.\/(.*)\.\w+$/, '$1');

    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    )

});

(function($){
    $(document).ready(function($){
        new Vue({
            el: "#main",
            data() {
                return {
                    title: "Monster Health Tracker",
                    rows: [
                        {
                            name: "The Test", current: "100", max: "100", conditions: ["exhausted", "dying", "deaf"], overlay_class:""
                        },
                        {
                            name: "The Test 2", current: "100", max: "100", conditions: ["poisoned", "paralyzed", "stunned", "diseased", "cursed"], overlay_class:""
                        }
                    ]
                }
            },
            methods: {
                add_row(name, health){
                    let row = {
                        name: name,
                        current: health,
                        max: health,
                        conditions: [],
                        overlay_class: ""
                    };
                    this.rows.push(row);
                },
                add_many(name, health, count){
                    for( let i = 1; i <= count;i++){
                        
                        let row = {
                            name: name + " " + i,
                            current: health,
                            max: health,
                            conditions: [],
                            overlay_class: ""
                        };
                        this.rows.push(row);
                    }
                },
                delete_row(id){
                    this.rows.splice(id, 1);
                },
                change_hp(type, amount, id){                    
                    if(type === "damage"){
                        this.rows[id].current = parseInt(this.rows[id].current) - parseInt(amount);
                    }

                    if(type === "heal"){
                        this.rows[id].current = parseInt(this.rows[id].current) + parseInt(amount);
                    }
                    this.rows[id].overlay_class = "";
                },
                damage(id){
                    this.rows[id].overlay_class="damage";
                },
                heal(id){
                    this.rows[id].overlay_class="heal";
                }
            },
            computed: {
    
            }
        });
    });
})(jQuery)