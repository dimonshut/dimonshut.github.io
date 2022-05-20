window.onload = function() {
	// tabs
	let $icons = document.getElementsByClassName('js-icon');
	for(let $i = 0; $i < $icons.length; $i++) {
		let $icon = $icons[$i];
		$icon.onclick = function() {
			if (!$icon.classList.contains('active')) {
				showActiveIcon($icon);
				showActiveArea($i);
			}
		}
	}

	function showActiveIcon($icon) {
		let $currentActiveIcon = document.querySelector('.js-icon.active');
		$currentActiveIcon.classList.remove('active');
		$icon.classList.add('active');
	}

	function showActiveArea($index) {
		let $currentArea = document.querySelector('.js-area.active');
	 	let $activeArea = document.querySelectorAll('.wrap-item')[$index];
		$currentArea.classList.remove('active');
		$activeArea.classList.add('active');
	}

	// counts
	calculateAllCount();
	function calculateAllCount(){
		let $areas = document.getElementsByClassName('js-area');
		for(let $i = 0; $i < $areas.length; $i++) {
			let $area = $areas[$i],
				$itemsLength = $area.querySelectorAll('.flex-item').length,
				$currentCounter = document.querySelectorAll('.js-icon-count')[$i];
			$currentCounter.innerText = $itemsLength;
		}
	}
}