function toggleProject() {
	//when click a projects item, do the following
	$('.projects-item').mousedown(function() {

		//display project name as title
		var projectName = $(this).html();
		$('.main-title').html(projectName);

		//create a name for each project based on click event to match to project name in JSON
		var projectContentName = projectName.split(' ')[0] + '-' + projectName.split(' ')[1];

		//JSON containing projects
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

		//cycle through projects objects, match content to project that's clicked on
		for (var i = 0; i <= projectContent.projects.length - 1; i++) {
			var currProject = projectContent.projects[i];
			if (currProject.project == projectContentName) {
				$('.main-project').html(currProject.content);
				History.pushState({
					state : i + 1
				}, "State " + (i + 1), "?project=" + (i + 1));
			}
		}

	});
}

function loadHistory() {
	url = window.location.href;
	urlProject = '.project-' + url.split('=')[1];
	$(urlProject).mousedown();
}


$(document).ready(function() {
	toggleProject();
	loadHistory();
});
