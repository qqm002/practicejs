



// $(document).ready(function(){
	
// 	$('.pa-num').click(function(){
// 		var tab_id = $(this).attr('data-tab');

// 		$('.pa-num').removeClass('active');
// 		$('.paging-con').removeClass('active');

// 		$(this).addClass('active');
// 		$("#"+tab_id).addClass('active');
// 	})

// });

// $(document).ready(function(){
	
// 	$('.tab-list').click(function(){
// 		var tab_id = $(this).attr('data-tab');

// 		$('.tab-list').removeClass('active');
// 		$('.tab-cont').removeClass('active');

// 		$(this).addClass('active');
// 		$("#"+tab_id).addClass('active');
// 	})

// });

// $(document).ready(function(){
	
// 	$('.cte-list').click(function(){
// 		// var tab_id = $(this).attr('data-tab');

// 		$('.cte-list').removeClass('active');
// 		// $('.cte-con').removeClass('active');

// 		$(this).addClass('active');
// 		// $("#"+tab_id).addClass('active');
// 	});
// 	$('.cte-list').click(function(){
// 		var $this = $(this);
// 		//var $thisPos = $this.offset().left; //window 축 기준
// 		var $thisPos2 = $this.position().left; //position -> 부모요소축 기준
// 		var $target = $('.wrapList');
// 		// $target.scrollLeft($thisPos2);
// 		$target.stop().animate({scrollLeft: $thisPos2}, 300)
// 		console.log($thisPos2);


// 	});

// });


window.onload = function(){
	const TopScroll = document.querySelector('#top-btn');
	const target1 = document.querySelector('.wrapList-con');
	const con1 = document.querySelector('.cte-con.top').offsetTop;

	TopScroll.addEventListener("click", function () {
		target1.scrollTo({
			top: con1,
			behavior: "smooth"
		});
	});


	const tabList = document.querySelectorAll('.tab-list');
	const tabContent = document.querySelectorAll('.tab-cont')
	tabList.forEach((tab) => {
		tab.addEventListener('click' , function(e){
			const tabData = e.target.dataset.tab;
			tabList.forEach((tab2) => {
				tab2.classList.remove('active');
			});
			tab.classList.add('active');
			tabContent.forEach((con) => {
				if(tabData === con.dataset.tab){
					con.classList.add('active');
				}
				else{
					con.classList.remove('active');
				}
			}

			)
		});
	})

	const tabList2 = document.querySelectorAll('.pa-num');
	const tabContent2 = document.querySelectorAll('.paging-con')
	tabList2.forEach((tab)=>{
		tab.addEventListener('click', function(e){
			const dataset = e.target.dataset.tab;
			tabList2.forEach((tab2)=>{
				tab2.classList.remove('active');
			})
			tab.classList.add('active');

			tabContent2.forEach((con)=>{
				if(dataset === con.dataset.tab){
					con.classList.add('active');
				}
				else{
					con.classList.remove('active');
				}
			})
		})
	})


	const tabMenu = document.querySelectorAll('.cte-list');

		tabMenu.forEach((Element) => {
			Element.addEventListener('click', function(){
				tabMenu.forEach((tab) => {
					tab.classList.remove('active');

				})
				Element.classList.add('active');
				
				const location = Element.offsetLeft;
				const target = document.querySelector('.wrapList');
				target.scrollTo({left : location, top : 0, behavior:"smooth"});
				console.log(location);


				const tabLo = Array.from(tabMenu).indexOf(Element);
				const location2 = document.querySelector(`.cte-con:nth-child(${tabLo + 1})`).offsetTop;
				target1.scroll({top: location2 , behavior: 'smooth'});
				console.log(location2);
			});
			
		});

		
		// const check = document.querySelectorAll(".bank-check input");
		const checkTarget = document.querySelectorAll('.cte-con');
		for(let i = 0 ; i< checkTarget.length; i++){
			const check = checkTarget[i];
			console.log(check);
			const checked = checkTarget[i].querySelectorAll('input');
			console.log(checked);

			let num = 0;
			for(let j=0; j<checked.length; j++){
			  checked[j].addEventListener('click',function(){
				console.log(checked[j]);
				if(checked[j].checked){
					num++
				}else num--;

					console.log(num);

					if(num>3){
						alert('3개까지 선택할 수 있습니다.');
						this.checked =false;
						num--;
						console.log(num);

					}


					
			 	});
			};
		};
			
			
		
		
};




