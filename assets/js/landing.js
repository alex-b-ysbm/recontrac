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
  $('.sidebar .btn-action').click(function(){
    $('.btn-action').parent().parent().find('.active').each(function() {
      if($(this)[0] != $('.btn-action').parent()[0])
        $(this).find('div')[0].click()
    });
    $('.sidebar_popup .action').animate({
      opacity: "toggle"
    })
    $(this).parent().toggleClass('active');
  })
  $('.sidebar .btn-note, .note .close').click(function(){
    $('.btn-note').parent().parent().find('.active').each(function() {
      if($(this)[0] != $('.btn-note').parent()[0])
      $(this).find('div')[0].click()
    });
    $('.sidebar_popup .note').animate({
      opacity: "toggle"
    })
    $('.btn-note').parent().toggleClass('active');
  })

  $('.sidebar .btn-photo, .photo .close').click(function(){
    $('.btn-photo').parent().parent().find('.active').each(function() {
      if($(this)[0] != $('.btn-photo').parent()[0])
      $(this).find('div')[0].click()
    });
    $('.sidebar_popup .photo').animate({
      opacity: "toggle"
    })
    $('.btn-photo').parent().toggleClass('active');
  })
  $('.sidebar .btn-insp, .inspection .close').click(function(){
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
  $('.sidebar .photos .bulb').click(function(){
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
  $('.sidebar .zoom').click(function(){
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
  $('.rows .title').click(function(){
    var current = $(this).closest('.rows').find('.row_info');
    $('.row_info').each(function(){
      if (current[0] != $(this)[0])
      $(this).slideUp();
    })
    current.slideDown();
  })
  $('.row_info .edit').click(function(){
    var info_box = $(this).closest('.row_info');
    info_box.find('.laborh div').hide();
    info_box.find('.laborh input').show();
    info_box.find('.labor div').hide();
    info_box.find('.labor input').show();
    info_box.find('.parts div').hide();
    info_box.find('.parts img').hide();
    info_box.find('.parts input').show();
    $(this).hide();
    $(this).parent().find('.save').show();
  })
  $('.row_info .save').click(function(){
    var info_box = $(this).closest('.row_info');
    info_box.find('.laborh input').hide();
    info_box.find('.laborh .price').text(info_box.find('.laborh input').val())
    info_box.find('.laborh div').show();
    info_box.find('.labor input').hide();
    info_box.find('.labor .price').text(info_box.find('.labor input').val())
    info_box.find('.labor div').show();
    info_box.find('.parts input').hide();
    info_box.find('.parts .price').text(info_box.find('.parts input').val())
    info_box.find('.parts div').show();
    info_box.find('.parts img').show();
    $(this).hide();
    $(this).parent().find('.edit').show();
  })
  $('.row_info .close').click(function(){
    $(this).closest('.row_info').slideUp();
  })
  $('.total_section_mobile .header_section').click(function(){
    $('.total_section_mobile .body_section').slideToggle();
  })
  $('.btn-action-mob').click(function(){
    $(this).closest('.button_area').find('.action-mob').slideToggle();
  })
  $('.action-mob .has-child-menu').click(function(e){
      $(this).find('.subsubmenu').show();
  })
  $('.action-mob .subsubmenu').click(function(e){
    e.stopPropagation();
    if (e.target === e.currentTarget){
      $(this).hide();
    }
  })
  $('.buttons_mobile .btn-note').click(function(e){
    e.preventDefault();
    $(this).parent().find('.photo-modal').hide();
    $(this).parent().find('.note-modal').slideToggle();
  })
  $('.buttons_mobile .btn-photo').click(function(e){
    e.preventDefault();
    $(this).parent().find('.note-modal').hide();
    $(this).parent().find('.photo-modal').slideToggle();
  })
  $('.buttons_mobile .zoom').click(function(){
    $('.modal_bg').show();
    $('.buttons_mobile .modal_image').slideDown('slow');
    console.log($(this).parent().find('.car_images')[0].src);
    $('.buttons_mobile .modal_image .main_image img')[0].src = $(this).parent().find('.car_images')[0].src;
    $('.buttons_mobile .modal_image .comment p').text($(this).parent().find('input').val());

  })
  $('.buttons_mobile .photos .bulb').click(function(){
    $(this).parent().find('input').animate({
      opacity: "toggle"
    })
    $(this).parent().find('.bulb').animate({
      opacity: "toggle"
    }, "fast")
    if($(this).parent().find('input').val() != ''){
      $(this).parent().find('.bulb')[0].src = 'assets/images/bulb_black_mob.png'
    } else{
      $(this).parent().find('.bulb')[0].src = 'assets/images/bulb_tr_mob.png'
    }

  });
  $('.btn-addServices-mob').click(function(){
    $('.modal_bg').show()
    $('.modal_service_mob').show();
  })
  $('.modal_service_mob .type').change(function(){
    $('.modal_service_mob table').removeClass('selected');
    $('.modal_service_mob table').hide();
    $('.modal_service_mob .item_'+$(this).val()).addClass('selected');
    $('.modal_service_mob .item_'+$(this).val()).slideDown();
  })
})
