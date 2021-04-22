function FilterAll(){
	let elem = document.getElementsByClassName('all');

	for(let i = 0; i < 8; i++){
		elem[i].style.display = "inline";
	}
}
function FilterPrint(){
	let elem = document.getElementsByClassName('all');
	let showElem = document.getElementsByClassName('all print');

	for(let i = 0; i < 8; i++){
		elem[i].style.display = "none";
	}

	for(let j = 0; j < showElem.length; j++){
		showElem[j].style.display = "inline";
	} 
}

function FilterWeb(){
    let elem = document.getElementsByClassName('all');
	let showElem = document.getElementsByClassName('all web');

	for(let i = 0; i < 8; i++){
		elem[i].style.display = "none";
	}

	for(let j = 0; j < showElem.length; j++){
		showElem[j].style.display = "inline";
	}
}

function FilterIterface(){
    let elem = document.getElementsByClassName('all');
	let showElem = document.getElementsByClassName('all interface');

	for(let i = 0; i < 8; i++){
		elem[i].style.display = "none";
	}

	for(let j = 0; j < showElem.length; j++){
		showElem[j].style.display = "inline";
	}
}
function FilterMock(){
    let elem = document.getElementsByClassName('all');
	let showElem = document.getElementsByClassName('all mock');

	for(let i = 0; i < 8; i++){
		elem[i].style.display = "none";
	}

	for(let j = 0; j < showElem.length; j++){
		showElem[j].style.display = "inline";
	}  
}


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$('#home_page').animate({'opacity':'1'},300);

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.container').each( function(i){
            let bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
			let bottom_of_window = $(window).scrollTop() + $(window).height();
			
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},300);    
            }
        }); 
    });
});

