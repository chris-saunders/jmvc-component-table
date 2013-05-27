steal(
	'./table.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
    'jquery/class',
    'jquery/model',
    'jquery/model/list',
    'jquery/controller',
    'jquery/controller/view',
    'jquery/view/ejs',
	function(){					// configure your application

    $.Class.prototype.toType = function(obj) {
        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    };

    $.Controller('Component', 
    {

    }, {
        getCompName: function() {
            return 'Component | ' + this.Class.fullName + ' - ';
        }
    });

    Component('Table',
    {

    }, {
    	init: function() {
            if (this.options.headers && this.options.rows) {
                if (!this.options.rows.match) {
                    throw new Error(this.getCompName() + 'Must provide JMVC list for `rows`.');
                }

                if (this.toType(this.options.headers) !== 'object' || this.options.headers === null) {
                    throw new Error(this.getCompName() + 'Must provide object literal for `headers`.');
                }
                this.render();
            } else {
                throw new Error(this.getCompName() + 'Must provide object literal for `headers` AND JMVC list for `rows`.');
            }
    	},

        render: function() {
            this.options.template = this.options.template ? '//' + this.options.template : 'tableView.ejs';
            this.element.append(this.view(this.options.template, this.options));
        }
    });

});