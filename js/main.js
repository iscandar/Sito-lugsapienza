//carousel home
jQuery(function($) {

	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 2000,
			pause: false
		});
	});

//function email
function controllaform(){
	Errore="";
	if(document.getElementById('nome').value==""){Errore=Errore+"Campo obbligatorio\n";}
	if(document.getElementById('from').value==""){Errore=Errore+"Campo obbligatorio\n";}
  if(document.getElementById('body').value==""){Errore=Errore+"Campo obbligatorio\n";}
	if(Errore==""){
		document.forms.contact_form.submit();
	}else{
		alert(Errore);
	}
}
//smooth scroll
	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 600);
	});

//scrollspy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	})

//prettyPhoto
	$("a.preview").prettyPhoto({
		social_tools: false
	});

//isotope
	$(window).load(function(){
		$portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});
		$portfolio_selectors = $('.portfolio-filter >li>a');
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
});
