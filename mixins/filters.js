import jQuery from "jquery";
const $ = jQuery;

var filters = {
    methods: {
        number_mask(e) {
            let val = $(e.target).val();
            if (isNaN(e.key)) {
                $(e.target).val(val.slice(0, -1));
            }
        }
    }
};

export { filters };