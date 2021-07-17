module.exports = function (plop) {
	plop.setGenerator('page', {
		description: 'Gerador de React Pages',
		prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'component name: '
            }
        ],
		actions: [
            {
                type: 'add',
                path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx',
                templateFile: 'templates/page-template.hbs'
            },
            {
                type: 'add',
                path: '../src/pages/{{pascalCase name}}/index.js',
                templateFile: 'templates/page-index-template.hbs'
            },
            {
                type: 'add',
                path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile: 'templates/page-test-template.hbs'
            }
        ]
	})
};