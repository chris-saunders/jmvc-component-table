Frog.Controller.extend('Frogui.Controllers.Components.Table', {
    defaults: {
        headers: {},
        rows: new Frog.Model.List()
    }
}, {

    init: function() {
        // Assert types on parameters
        if (!this.options.rows.match) {
            console.log('Data provided', this.options);
            throw new Error('Must provide JMVC list for `rows`.');
        }

        if (Frog.Utilities.toType(this.options.headers) !== 'object') {
            console.log('Data provided', this.options);
            throw new Error('Must provide object literal if providing `headers`.');
        }
        this.render();
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
