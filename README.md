# Grunt

1. What you need - Node.js and NPM
2. Why Grunt?
	* Mundane tasks are boring
	* Large apps NEED a build process
	* Make sure you don't miss things
	* Static file server
3. Installing Grunt - `npm install grunt -g`
4. Discuss CLI and Grunt commands (init tasks vs regular/multi tasks)
	* Explain built-in tasks
		* concat
		* init
		* lint
		* min
		* qunit
		* server
		* test
		* watch
5. Adding it to your project - `grunt init:gruntfile`
	* Explain init templates and which are available by default
	* Go through prompts and explain predefined prompts and defaults
	* Explain "fuzzy logic" (lib/src, test/tests/unit/spec)
	* Adds grunt.js file to your project
6. Examine grunt.js and defaults
	* Explain the `default` task
7. Adding local and NPM tasks
	* http://gruntjs.com/
	* Creating a new gruntplugin - `grunt init:gruntplugin`
8. Templates
	* `grunt.template.process(template, options)` - `options.data` passed to template
		* `config` - use <% %> style delimiters (default)
		* `init` - use {% %} style delimiters (used in init task templates)
		* `user` - use [% %] style delimiters (not used internally in grunt)
	* `grunt.template.date(date, format)` and `grunt.template.today(format)`
9. Discuss the differences between Grunt and Yeoman
	* Yeoman is an opinionated version of Grunt (SASS/Compass, Bootstrap, Mocha, RequireJS)
	* Many dependencies (curl, git, NodeJS, ruby, RubyGems, Compass, PhantomJS, jpegtran, optipng)
	* `curl -L get.yeoman.io | bash`
	* Adds Bower for package management
	* Adds its own initializers (yeoman, bbb, angular, ember)
	* Implements `generators` - like initializers for stubs
	* Insights/Analytics
10. Transitioning to Grunt 0.4
	* Gruntfile.js
	* Strict mode
	* CoffeeScript support
	* Bash autocompletion
	* No more helpers or directives (use regular Node exports with init function)
	* grunt.utils renamed to grunt.util (don't know why)
	* Split into many small modules (tasks) - under grunt-contrib-NAME
	* Many small task changes
	* https://github.com/gruntjs/grunt/blob/devel/docs/migration_guide.mds
