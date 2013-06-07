Frog.Controller.extend('Frogui.Controllers.Components.Table', {
    /* @Static */
    listensTo: ['table.enable', 'table.disable', 'table.destroy'],

}, {

    init: function() {
        if (this.options.headers && this.options.rows) {
            if (!this.options.rows.match) {
                console.log('Data provided', this.options);
                throw new Error('Must provide JMVC list for `rows`.');
            }

            if (Frog.Utilities.toType(this.options.headers) !== 'object' || this.options.headers === null) {
                console.log('Data provided', this.options);
                throw new Error('Must provide object literal for `headers`.');
            }
            this.render();
        } else {
            console.log('Data provided', this.options);
            throw new Error('Must provide object literal for `headers` AND JMVC list for `rows`.');
        }
    },

    render: function() {
        this.options.template = this.options.template || '//frogui/components/table/views/core/table.ejs';
        this.element.html(this.view(this.options.template, this.options));
    },

    update: function(options) {
        this._super(options);
        this.render();
    }

});
