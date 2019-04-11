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
                        {name: "The Test", current: "100", max: "100", conditions: []}
                    ],
                    overlay_class: ""
                }
            },
            methods: {
                add_row(name, health){
                    let row = {
                        name: name,
                        current: health,
                        max: health,
                        conditions: []
                    };
                    this.rows.push(row);
                },
                add_multiple(){
                    console.log("test");
                },
                delete_row(id){
                    this.rows.splice(id, 1);
                },
                damage(id){
                    this.overlay_class = "damage";
                    console.log("damage", id);
                },
                heal(id){
                    this.overlay_class = "heal";
                    console.log("heal", id);
                }
            },
            computed: {
    
            }
        });
    });
})(jQuery)