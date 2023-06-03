$(document).ready(function () {
  //bcgchanger is here!
  var imageIndex = 0;
  var images = [
    "image/chpt0-1.jpg",
    "image/chpt0-2.png",
    "image/chpt0-3.png",
    "image/chpt0-4.png",
    "image/chpt0-5.png",
  ];
  var chat0 = $(".chpt0-chat");
  var pop0 = $(".chpt0-pop");
  var count = 0;
  var chats = $(".chpt0-chat");
  var road = $(window).scrollTop();
  //bcgchanger is here!
  setInterval(function () {
    $(".chpt0-container").css(
      "background-image",
      "url(" + images[imageIndex] + ")"
    );
    imageIndex = (imageIndex + 1) % images.length;
  }, 5000);
  //typetext is here!
  var currentChat = 0;
  function typeWriter(chat, text, index) {
    if (index < text.length) {
      chat.append(text.charAt(index));
      setTimeout(function () {
        typeWriter(chat, text, index + 1);
      }, 50);
    } else if (currentChat < chats.length - 1) {
      currentChat++;
      startTypeWriter();
    }
  }
  function startTypeWriter() {
    var chat = $(chats[currentChat]);
    var text = chat.find(".typetext").text();
    chat.show();
    typeWriter(chat, text, 0);
  }
  startTypeWriter();
  //popchanv2.0 is here!
  $(".chpt0-container").on("click", function () {
    switch (count) {
      case 0:
      case 1:
        chat0.eq(count).fadeIn();
        break;
      case 2:
        pop0.eq(0).fadeIn();
        break;
      case 3:
        chat0.slice(0, 2).fadeOut();
        pop0.eq(0).fadeOut(function () {
          chat0.eq(2).fadeIn();
        });
        break;
      case 4:
        chat0.eq(3).fadeIn();
        break;
      case 5:
        pop0.eq(1).fadeIn();
        break;
      case 6:
        chat0.slice(1, 4).fadeOut();
        pop0.eq(1).fadeOut(function () {
          chat0.eq(4).fadeIn();
        });
        break;
      case 7:
        chat0.eq(5).fadeIn();
        break;
      case 8:
        pop0.eq(2).fadeIn();
        break;
      case 9:
        chat0.slice(4, 6).fadeOut();
        pop0.eq(2).fadeOut(function () {
          chat0.eq(6).fadeIn();
        });
        break;
      case 10:
        chat0.eq(7).fadeIn();
        break;
      case 11:
        pop0.eq(3).fadeIn();
        break;
      case 12:
        chat0.slice(6, 8).fadeOut();
        pop0.eq(3).fadeOut(function () {
          pop0.eq(4).fadeIn();
        });
        break;
      case 13:
        pop0.eq(4).fadeOut(function () {
          $(".chpt0-title").fadeIn();
        });
        break;
    }
    count++;
  });
  //popclick is here!
 /* $(".chpt3-pop-text").hide();
  $(".chpt3-popchan").on("click", function () {
    $(this).siblings(".chpt3-pop-text").slideToggle();
  });*/
  //scroll fifth is here!
  $("chpt1-girl").hide();
  window.addEventListener("scroll", function () {
    if (road >= $("chpt1-girl").offset.top() + 30) {
      $("chpt1-girl").fadeIn();
    }
  });
});
