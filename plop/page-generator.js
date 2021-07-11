module.exports = function (plop) {
	plop.setGenerator('hook', {
		description: 'Gerador de React Hooks',
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
                path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx',
                templateFile: 'plop/templates/page-template.hbs'
            },
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/index.js',
                templateFile: 'plop/templates/page-index-template.hbs'
            }
        ]
	})
};