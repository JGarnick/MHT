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

jQuery(document).ready(function($){
    new Vue({
        el: "#main",
        data() {
            return {
                title: "Monster Health Tracker",
                rows: []
            }
        },
        methods: {
            add_row(e){
                console.log(e);
                let row = {
                    name: "",
                    health_current: 0,
                    health_max: 0,
                    conditions: []
                };
            },
            add_multiple(e){
                console.log(e);
            }
        },
        computed: {

        }
    });
});