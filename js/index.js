$(function() {
  $('#j-slides').slidesjs({
    width: 620,
    height: 280,
    navigation: false,
    play: {
      auto: true
    }
  });

  // Select teams
  $('#j-select')
    .click(function() {
      $(this).toggleClass('dropdown-active');
    })
    .on('mouseenter click', '.team-kind', function(e) {
      $(this).addClass('selected').siblings().removeClass('selected');
      e.stopPropagation();
    })
    .on('mouseleave', '.team-kind', function() {
      $(this).removeClass('selected');
    })
    .find('.team-kinds > li')
    .each(function(i) {
      // Fix z-index for IE
      $(this).css('z-index', 1000 - i);
    });

  // For mobile
  // Expand menu
  var $nav = $('#j-nav');
  $('#j-menu').add($nav).click(function() {
    $nav.toggle();
  });
  $('#j-search')
    .on('touchstart click', 'button', function() {
      $(this).siblings('input').focus();
    })
    .on('submit', function() {
      var v = $(this).find('input').val();
      return !!$.trim(v);
    });
});
