document.addEventListener('DOMContentLoaded', function() {

	let clientId = $.cookie('_ym_uid');
	let utm = window.location.search;

	if (clientId != undefined) {
		if (utm != '') {
			history.pushState(null, null, utm +'&yscid=' + clientId);
		} else {
			history.pushState(null, null, '?yscid=' + clientId);
		}
		
	}


});

