

(function(d){
	
	const $nav = d.querySelector('#nav-1');
	const $btn = d.querySelector('#menu-1');	
	$btn.addEventListener('click', function(){		
		$nav.classList.toggle('show');		
	});	
	
})(document);

(function(d){
	
	const $nav = d.querySelector('#nav-2');
	const $btn = d.querySelector('#menu-2');	
	$btn.addEventListener('click', function(){		
		$nav.classList.toggle('show');		
	});	
	
})(document);