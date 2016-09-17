$(document).ready(function() {
    var bhagaskaraImg = $('.bhagaskara').find('img');
    var sitOnChairImg = $('.sit-on-chair').find('img');
    var bhagaskaraTitle = $('.bhagaskara').find('li:first-child');
    var sitOnChairTitle = $('.sit-on-chair').find('li:first-child');
    console.log(bhagaskaraImg);
    console.log(sitOnChairImg);
    console.log(bhagaskaraTitle);

    $(bhagaskaraImg).hover(function() {
        bhagaskaraTitle.toggleClass('bhagaskara-title-hover');
    });
    $(sitOnChairImg).hover(function() {
        sitOnChairTitle.toggleClass('sit-on-chair-title-hover');
    });
    // $('.sit-on-chair img').on('mouseenter', function(){
    //     $('.sit-on-chair li:first-child').animate({color: '#23b89f'}, 1000);
    // });
    // $('sitOnChairImg').on('mouseout', function() {
    //     sitOnChairTitle.animate({color: 'white'}, 1000);
    // });
});
