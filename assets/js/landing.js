$(document).ready(function(){
  $('.btn-menu').click(function(){
    $(this).parent().find('.submenu').animate({
      opacity: "toggle"
    })
  })
  $('.open_section>img, .open_section .section_title').click(function(){
    var table = $(this).closest('.close');
    table.removeClass('close');
    table.addClass('open');
  })
  $('.close_section>img, .close_section .title').click(function(){
    var table = $(this).closest('.open');
    table.removeClass('open');
    table.addClass('close');
  })
  $('.user_acc').click(function(){
    if( $(this).find('img')[0].src.indexOf('user_acc') > 0){
      $(this).find('img')[0].src = 'assets/images/close.png';
    } else{
      $(this).find('img')[0].src = 'assets/images/user_acc.png';
    }
    $(this).parent().find('.submenu').animate({
      opacity: "toggle"
    })
  })
  $('.btn-action').click(function(){
    $('.btn-action').parent().parent().find('.active').each(function() {
      if($(this)[0] != $('.btn-action').parent()[0])
        $(this).find('div')[0].click()
    });
    $('.sidebar_popup .action').animate({
      opacity: "toggle"
    })
    $(this).parent().toggleClass('active');
  })
  $('.btn-note, .note .close').click(function(){
    $('.btn-note').parent().parent().find('.active').each(function() {
      if($(this)[0] != $('.btn-note').parent()[0])
      $(this).find('div')[0].click()
    });
    $('.sidebar_popup .note').animate({
      opacity: "toggle"
    })
    $('.btn-note').parent().toggleClass('active');
  })

  $('.btn-photo, .photo .close').click(function(){
    $('.btn-photo').parent().parent().find('.active').each(function() {
      if($(this)[0] != $('.btn-photo').parent()[0])
      $(this).find('div')[0].click()
    });
    $('.sidebar_popup .photo').animate({
      opacity: "toggle"
    })
    $('.btn-photo').parent().toggleClass('active');
  })
  $('.btn-insp, .inspection .close').click(function(){
    $('.btn-insp').parent().parent().find('.active').each(function() {
      if($(this)[0] != $('.btn-insp').parent()[0])
      $(this).find('div')[0].click()
    });
    $('.sidebar_popup .inspection').animate({
      opacity: "toggle"
    })
    $('.btn-insp').parent().toggleClass('active');
  })
  $('.btn-add').click(function(){
    var message = $(this).parent().find('textarea').val();
    var now = new Date();
    var date = now.format("mm/dd/yyyy hh:MMTT");
    var count = $('.chat_section').find('.message').length +1;
    var username = $('.username h2').text();
    $('.chat_section').append('<div class="message item_'+count+' question"><div class="bulb item_right"><span>'+ message +'</span></div><div class="info"><strong>'+ username +'</strong> at '+ date +'</div></div>');
    $(this).parent().find('textarea').val('');
    $('.chat_section')[0].scrollTo(0, 10000000000)
  })
  $('.info_box').click(function(){
    $(this).parent().find('.subsection').animate({
      opacity: "toggle"
    })
  })
  $('.cancel').click(function(){
    $(this).closest('.subsection').animate({
      opacity: "toggle"
    })
  })
  $('.photos .bulb').click(function(){
    $(this).parent().find('input').animate({
      opacity: "toggle"
    })
    $(this).parent().find('.bulb').animate({
      opacity: "toggle"
    }, "fast")
    if($(this).parent().find('input').val() != ''){
      $(this).parent().find('.bulb')[0].src = 'assets/images/bulb_black.png'
    } else{
      $(this).parent().find('.bulb')[0].src = 'assets/images/bulb.png'
    }

  });
  $('.zoom').click(function(){
    $('.modal_bg').show();
    $('.modal_image').slideDown('slow');

    $('.modal_image .main_image img')[0].src = $(this).parent().find('.car_images')[0].src;
    $('.comment p').text($(this).parent().find('input').val());

  })
  $('.modal_bg, .modal_image .close, .modal_service .close').click(function(){
    $('.modal_image').hide();
    $('.modal_service').hide();
    $('.modal_bg').hide();
  })
  $('.btn-addServices').click(function(){
    $('.modal_bg').show()
    $('.modal_service').show();
  })
  $('table .custom_checkbox input').click(function(){
    $(this).closest('tr').toggleClass('checked');
  })
  $('.modal_service .title').click(function(){
    $(this).closest('.row').toggleClass('selected');
  })
  $(".rate").click(function(){
    if ($(this)[0].src.indexOf('up') > 0){
      $(this)[0].src = $(this)[0].src.replace('up', 'down');
    } else{
      $(this)[0].src = $(this)[0].src.replace('down', 'up')
    }
    $(this).closest('.clearfix').toggleClass('down');
    // $(".rate")[0].src = $(".rate")[0].src.replace('hand_up', 'hand_down')
  })
  $('.note_count').text('('+ $('.sidebar_popup .note .message').length +')');
})
