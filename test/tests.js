define(['mocha', 'chai'], function(mocha, chai) {
	mocha.setup('bdd');
	var assert = chai.assert;

	describe('ember handlebars plugin', function(){
		describe('load handlebars template', function(){
			it('should be in Ember.TEMPLATES', function(done){
				curl(['ehbs!template'], function() {
					assert.isFunction(Ember.TEMPLATES.template);
					done();
				});
			});

			it('should be in returned from curl', function(done){
				curl(['ehbs!template'], function(template) {
					assert.isFunction(template);
					done();
				});
			});

			it('should render html', function(done){
				curl(['ehbs!template'], function(template) {
					var view = Ember.View.create({template: template});
					var buffer = Ember.RenderBuffer();
					view.render(buffer);
					assert.equal(buffer.string(), "<h1>Title</h1>");
					done();
				});
			});

		});
	});

	describe('handlebars plugin', function(){
		describe('load handlebars template', function(){
			it('should be in returned from curl', function(done){
				curl(['hbs!template'], function(template) {
					assert.isFunction(template);
					done();
				});
			});

			it('should render html', function(done){
				curl(['hbs!template'], function(template) {
					assert.equal(template(), "<h1>Title</h1>");
					done();
				});
			});

		});
	});

});
