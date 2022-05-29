window.onload = function() {

	buildHTML('[data-type=games]', $gamesData);
	buildHTML('[data-type=education]', $educationData);

	function buildHTML($attr, $data) {
		let $mainWrap = document.querySelector($attr),
			$html = '';

		$data.forEach($section => {
			let $sectionTitle = $section.title,
				$sectionItems = $section.items;

			$html += '<section class="section-item">';
			$html += getSectionTitleHTML($sectionTitle);
			$html += '<div class="items">';

			$sectionItems.forEach($item => {
				$html += getItemHTML($item);
			});

			$html += '</div></section>';
		});
		$mainWrap.innerHTML = $html;
	}

	function getSectionTitleHTML($title) {
		let $html = '<div class="section-title-wrap">'+
			'<h2 class="section-title">'+ $title +'</h2>'+
		'</div>';
		return $html;
	}

	function getItemHTML($item) {
		let $title = $item.title,
			$date = $item.date,
			$imgSrc = $item.img,
			$html = '<div class="flex-item">'+
			'<span>'+
				'<img class="img-fluid" src="" data-src="'+ $imgSrc +'" alt="'+ $title +'">'+
			'</span>'+
			'<div class="p-1 my-2">'+
				'<h6 class="item-name"><span>'+ $title +'</span></h6>'+
				'<div class="labels-block">'+
					'<div class="item-field">'+ $date +'</div>'+
				'</div>'+
			'</div>'+
		'</div>';
		return $html;
	}


	let $icons = document.getElementsByClassName('js-icon');
	for (let $i = 0; $i < $icons.length; $i++) {
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
		let $currentArea = document.querySelector('.js-area.active'),
	 		$activeArea = document.querySelectorAll('.wrap-item')[$index];
		$currentArea.classList.remove('active');
		$activeArea.classList.add('active');
	}


	calculateAllCount();
	function calculateAllCount() {
		let $areas = document.getElementsByClassName('js-area');
		for (let $i = 0; $i < $areas.length; $i++) {
			let $area = $areas[$i],
				$itemsLength = $area.querySelectorAll('.flex-item').length,
				$currentCounter = document.querySelectorAll('.js-icon-count')[$i];
			$currentCounter.innerText = $itemsLength;
		}
	}


	lazyLoad();
	function lazyLoad() {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					console.log(entry.target.dataset.src)
					entry.target.src = entry.target.dataset.src
					observer.unobserve(entry.target)
				}
			})
		}, { threshold: 0.5 })
		document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img))
	}
}