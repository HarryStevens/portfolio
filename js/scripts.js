function toggleProject() {
	$('.projects-item').mousedown(function() {

		var projectName = $(this).html();
		$('.main-title').html(projectName);

		var projectContentName = projectName.split(' ')[0] + '-' + projectName.split(' ')[1];

		var projectContent = {
			"projects" : [{
				'project' : 'Project-1',
				'content' : '<img src="img/project-1.jpg" />'
			}, {
				'project' : 'Project-2',
				'content' : '<img src="img/project-2.jpg" />'
			}, {
				'project' : 'Project-3',
				'content' : '<img src="img/project-3.jpg" />'
			}, {
				'project' : 'Project-4',
				'content' : '<img src="img/project-4.jpg" />'
			}]
		};

		
		for (var i=0; i <= projectContent.projects.length-1; i++) {
				var currProject = projectContent.projects[i];
				if (currProject.project==projectContentName){
					$('.main-project').html(currProject.content);
				}
		}
		

	});
}


$(document).ready(function() {
	toggleProject();
	console.log('document ready');

});
