module.exports = function( grunt ) {

	grunt.initConfig({
	    uglify : {
			options : {
				mangle : false
			},
			my_target : {
				files : {
					'js/script.main.js':[
									'_assets/_js/libs/jquery-1.10.2.min.js',
									'assets/_js/libs/APP.js',
									'assets/_js/AppFiles/**/*',
								]
				}
	        }
		},// uglify

		sass: {
			dist: {
				options : { style : 'compressed' },
				files: {
					'css/style.main.css':[
									'assets/_sass/libs/**/*',
									'assets/_sass/AppFiles/**/*'
								]
				}
			}
		},//sass

		imagemin: {
			static: {
				options: {
			        optimizationLevel: 3
			    },
			    files: {
			        'img/alerta.png': 'assets/_img/alerta.png',
			        'img/fb.png': 'assets/_img/fb.png',
			        'img/tw.png': 'assets/_img/tw.png',
			        'img/yt.png': 'assets/_img/yt.png',
			        'img/lupa.png': 'assets/_img/lupa.png',
			        'img/logo_ufmg.png': 'assets/_img/logo_ufmg.png',
			        'img/lupa_busca.png': 'assets/_img/lupa_busca.png',
			        'img/minha-ufmg.png': 'assets/_img/minha-ufmg.png',
			        'img/seta_nav.png': 'assets/_img/seta_nav.png',
			        'img/banner.png': 'assets/_img/banner.png',
			        'img/ciencias_biologicas.png': 'assets/_img/ciencias_biologicas.png',
			        'img/espaco_fisico.png': 'assets/_img/espaco_fisico.png',
			        'img/todos_reitores.png': 'assets/_img/todos_reitores.png'
			    }
		    }
		}, //image mim

	    watch : {
			dist : {
				files : [
					'assets/**/*', // diretory watched
				],
				tasks : [ 'uglify', 'sass']
			}
	    },// watch
	});


	// Grunt Plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');


	// Tasks
	grunt.registerTask( 'default', ['uglify', 'sass', 'imagemin']);

	// Task to Watch
	grunt.registerTask( 'w', [ 'watch' ] );
};