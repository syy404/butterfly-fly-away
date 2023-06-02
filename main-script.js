$(document).ready(function () {
  $(document).ready(function () {
    var imageIndex = 0;
    var images = [
      "image/chpt0-1.jpg",
      "image/chpt0-2.png",
      "image/chpt0-3.png",
      "image/chpt0-4.png",
      "image/chpt0-5.png",
    ];
    setInterval(function () {
      $(".chpt0-container").css(
        "background-image",
        "url(" + images[imageIndex] + ")"
      );
      imageIndex = (imageIndex + 1) % images.length;
    }, 1000);
  });
  //bcgchanger is here!
  $(document).ready(function () {
    var chats0 = $(".chpt0-chat");
    var pops0 = $(".chpt0-pop");
    var count = 0;
    $(".chpt0-container").on("click", function () {
      switch (count) {
        case 0:
        case 1:
          chats0.eq(count).fadeIn();
          break;
        case 2:
          pops0.eq(0).fadeIn();
          break;
        case 3:
          chats0.slice(0, 2).fadeOut();
          pops0.eq(0).fadeOut(function () {
            chats0.eq(2).fadeIn();
          });
          break;
        case 4:
          chats0.eq(3).fadeIn();
          break;
        case 5:
          pops0.eq(1).fadeIn();
          break;
        case 6:
          chats0.slice(1, 4).fadeOut();
          pops0.eq(1).fadeOut(function () {
            chats0.eq(4).fadeIn();
          });
          break;
        case 7:
          chats0.eq(5).fadeIn();
          break;
        case 8:
          pops0.eq(2).fadeIn();
          break;
        case 9:
          chats0.slice(4, 6).fadeOut();
          pops0.eq(2).fadeOut(function () {
            chats0.eq(6).fadeIn();
          });
          break;
        case 10:
          chats0.eq(7).fadeIn();
          break;
        case 11:
          pops0.eq(3).fadeIn();
          break;
        case 12:
          chats0.slice(6, 8).fadeOut();
          pops0.eq(3).fadeOut(function () {
            pops0.eq(4).fadeIn();
          });
          break;
        case 13:
          pops0.eq(4).fadeOut(function () {
            $(".chpt0-title").fadeIn();
          });
          break;
      }
      count++;
    });
  });
  //popchanv2.0 is here!
  $(document).ready(function () {
    var chats = $(".chpt0-chat");
    var currentChat = 0;
    function typeWriter(chat, text, index) {
      if (index < text.length) {
        chat.append(text.charAt(index));
        setTimeout(function () {
          typeWriter(chat, text, index + 1);
        }, 100);
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
  });
  //typetext is here!
  $(document).ready(function () {
    $(".chpt3-pop-text").hide();
    $(".chpt3-popchan").on("click", function () {
      $(this).siblings(".chpt3-pop-text").slideToggle();
    });
  });
  //popclick is here!
});
