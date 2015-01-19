function toggleProject() {
	//when click a projects item, do the following
	$('.projects-item').mousedown(function() {
		if ($(this).hasClass('active')) {

		} else {
			$('.projects-item').removeClass('active');
			$(this).addClass('active');

			$('.main').fadeOut(0);

			//display project name as title
			var projectName = ($(this).html()).split('>')[1];
			$('.main-title').html(projectName);

			//create a name for each project based on click event to match to project name in JSON
			var projectContentName = projectName.split(' ')[0] + '-' + projectName.split(' ')[1];

			//JSON containing projects
			var projectContent = {
				"projects" : [{
					'project' : 'Green-Fields',
					'img' : '<img src="img/project-1.jpg" />',
					'content' : '<p>This project is hella dope. I hope you really like it because I tried super hard to make it as dope as humanly possible. And, indeed, when you look at it, I bet you\'re like, "<a href="#">Damn, that is really dope</a>."</p><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p><p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p><p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>'
				}, {
					'project' : 'Silly-Dog',
					'img' : '<img src="img/project-2.jpg" />',
					'content' : 'Damn, dogg. How did this project get so cool? I started working on it thinking it would be cool, but then it got, like, really, REALLY cool. And then I worked on it some more and -- BLAMO! -- I had a cool ass motherfucking project.'
				}, {
					'project' : 'Purple-Fog',
					'img' : '<img src="img/project-3.jpg" />',
					'content' : '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since <a href="#">the 1500s</a>, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>'
				}, {
					'project' : 'Nice-Sunset',
					'img' : '<img src="img/project-4.jpg" />',
					'content' : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, <a href="#">sed quia consequuntur magni dolores</a> eos qui ratione voluptatem sequi nesciunt.</p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
				}]
			};

			//cycle through projects objects, match content to project that's clicked on
			for (var i = 0; i <= projectContent.projects.length - 1; i++) {
				var currProject = projectContent.projects[i];
				if (currProject.project == projectContentName) {

					$('.main').fadeIn();

					$('.main-project-img').html(currProject.img);

					$('.main-project-content').html(currProject.content);

					History.pushState({
						state : i + 1
					}, "Portfolio | " + currProject.project, "?p=" + currProject.project);
				}
			}
		}

	});
}

function loadHistory() {
	url = window.location.href;
	urlProject = '.' + url.split('=')[1];
	$(urlProject).mousedown();
}

function responsive() {
	var windowWidth = $(window).width();

	if (windowWidth <= 992) {
		//Small devices (tablets, 768px and up)
		$('.projects').css({
			'height' : '260px',
			'border-bottom' : '1px solid #e7e7e7',
			'border-right' : 'none'
		});
		$('.projects-item').css({
			'float' : 'left',
			'margin-right' : '55px'
		});
		$('.main-project-img img').css({
			'width' : '100%',
		});
		$('.projects-item img').css({
			'width' : '50px'
		});
	} else if (windowWidth > 992) {
		//Medium devices (desktops, 992px and up)
		$('.projects').css({
			'height' : '100vh',
			'border-bottom' : 'none',
			'border-right' : '1px solid #e7e7e7'
		});
		$('.projects-item').css({
			'float' : 'none',
			'margin-right' : '0px'
		});
		$('.main-project-img img').css({
			'width' : '50%',
		});
		$('.projects-item img').css({
			'width' : '80px'
		});
	}
}


$(document).ready(function() {
	toggleProject();
	responsive();
	$(window).resize(responsive);
	loadHistory();
});
