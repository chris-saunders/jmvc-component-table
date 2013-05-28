Frog.Controller.extend('Frogui.Controllers.Components.Table', {
    /* @Static */
    listensTo: ['table.enable', 'table.disable', 'table.destroy'],

}, {

    init: function() {
        if (this.options.headers && this.options.rows) {
            if (!this.options.rows.match) {
                throw new Error('Must provide JMVC list for `rows`.');
            }

            if (Frog.Utilities.toType(this.options.headers) !== 'object' || this.options.headers === null) {
                throw new Error('Must provide object literal for `headers`.');
            }
            this.render();
        } else {
            throw new Error('Must provide object literal for `headers` AND JMVC list for `rows`.');
        }
    },

    render: function() {
        this.options.template = this.options.template || '//frogui/components/table/views/core/table.ejs';
        this.element.append(this.view(this.options.template, this.options));
    }

});
