// Select
$('.slct').click(function(){
/* Заносим выпадающий список в переменную */
var dropBlock = $(this).parent().find('.drop');
/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
if( dropBlock.is(':hidden') ) {
dropBlock.slideDown();
/* Выделяем ссылку открывающую select */
$(this).addClass('active');
/* Работаем с событием клика по элементам выпадающего списка */
$('.drop').find('li').click(function(){
/* Заносим в переменную HTML код элемента
списка по которому кликнули */
var selectResult = $(this).html();
/* Находим наш скрытый инпут и передаем в него
значение из переменной selectResult */
$(this).parent().parent().find('input').val(selectResult);
/* Передаем значение переменной selectResult в ссылку которая
открывает наш выпадающий список и удаляем активность */
$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
/* Скрываем выпадающий блок */
dropBlock.slideUp();
});
/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
} else {
$(this).removeClass('active');
dropBlock.slideUp();
}
/* Предотвращаем обычное поведение ссылки при клике */
return false;
});
// owl-carousel
$('.owl-carousel1').owlCarousel({
loop:true,
margin:10,
nav:false,
dots:false,
navContainer: ".navigation",
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
})
// owl-carousel2
$('.owl-carousel2').owlCarousel({
loop:true,
margin:40,
nav:false,
dots:false,
navContainer: ".navigation2",
responsive:{
0:{
items:1
},
465:{
items:2
},
768:{
items:3
},
1000:{
items:3
}
}
})
// bxSlider
jQuery(document).ready(function(){
jQuery('.img-slider').bxSlider({
controls: false,
nextText: '',
prevText: '',
pagerCustom: '#bx-pager'
});
});
// bxSlider2
jQuery(document).ready(function(){
jQuery('.img-slider2').bxSlider({
controls: false,
nextText: '',
prevText: '',
pagerCustom: '#bx-pager2'
});
});
// bxSlider3
jQuery(document).ready(function(){
jQuery('.img-slider3').bxSlider({
controls: false,
nextText: '',
prevText: '',
pagerCustom: '#bx-pager3'
});
});
// приравнивание высоты блоков
$(document).ready(function(){
h_auto = 89 + "px";
h = $('.img-height').height();
$('#bx-pager').height(h);
console.log (h);
if(document.documentElement.clientWidth < 768) {
	$('#bx-pager').height(h_auto);
	w = $('.img-height').width();
	$('#bx-pager').width(w);
	console.log (w);
}
});
// tabs
var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки
 
window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}
function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}
document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
}}}}
function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}