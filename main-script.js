$(document).ready(function () {
  var count = 0;
  var chatCount = 0;
  var popCount = 0;
  var images = [
    "image/chpt0-1.jpg",
    "image/chpt0-2.png",
    "image/chpt0-3.png",
    "image/chpt0-4.png",
    "image/chpt0-5.png",
  ];
  var imageIndex = 0;

  var chats0 = $(".chpt0-chat");
  var pop0 = $(".chpt0-pop");

  $(".chpt0-container").on("click", function () {
    if (count % 5 == 4) {
      $(".chpt0-container").css(
        "background-image",
        "url(" + images[imageIndex] + ")"
      );
      chats0.slice(0, chatCount).hide();
      pop0.slice(0, popCount).hide();
      if (imageIndex < images.length - 1) {
        imageIndex += 1;
      }
    } else if (count % 5 < 2) {
      chats0.eq(chatCount).fadeIn();
      chatCount += 1;
    } else if (count % 5 == 2) {
      pop0.eq(popCount).fadeIn();
      popCount += 1;
    }
    count += 1;
  });
  $(document).ready(function () {
    $(".chpt3-pop-text").hide();
    $(".chpt3-popchan").on("click", function () {
      $(this).siblings(".chpt3-pop-text").slideToggle();
    });
  });
});
