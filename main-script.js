/*
window.onload = function () {
  var meetupbox = document.querySelector(".meetupbox");
  if (meetupbox) {
    meetupbox.style.display = "none";
  }
};
*/
//这里没有使用动态获取时间而是将加载时间写死的一部分原因在于GitHub的连接确实不太稳定……

$(document).ready(function () {
  //muter is here!
  $("audio").each(function () {
    this.pause();
  });

  //loadingbox is here!
  var meetupbox = $(".meetupbox");
  if (sessionStorage.getItem("verifiedRefresh")) {
    meetupbox.css("display", "none");
    setTimeout(function () {
      meetupbox.css("display", "none");
    }, 1500);
  } else {
    meetupbox.css("display", "none");
    sessionStorage.setItem("verifiedRefresh", "true");
  }

  //web starts here!
  var imageIndex = 0;
  var images = [
    "https://sys-little-bucket.oss-cn-shanghai.aliyuncs.com/img/chpt0-1.jpg",
    "https://sys-little-bucket.oss-cn-shanghai.aliyuncs.com/img/chpt0-2.png",
    "https://sys-little-bucket.oss-cn-shanghai.aliyuncs.com/img/chpt0-3.png",
    "https://sys-little-bucket.oss-cn-shanghai.aliyuncs.com/img/chpt0-4.png",
    "https://sys-little-bucket.oss-cn-shanghai.aliyuncs.com/img/chpt0-5.png",
  ];
  var chat0 = $(".chpt0-chat");
  var pop0 = $(".chpt0-pop");
  var count = 0;
  var chats = $(".chpt0-chat");
  var road = $(window).scrollTop();
  $("body").addClass("no-scroll");

  //bcgchanger is here!
  setInterval(function () {
    $(".chpt0-container").css(
      "background-image",
      "url(" + images[imageIndex] + ")"
    );
    imageIndex = (imageIndex + 1) % images.length;
  }, 5000);
  $(window).scrollTop(0);

  //typetext is here!

  //popchanv2.0 is here!
  chat0.hide();
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

  //scroll fifth for girl is here!
  $(".chpt1-girl").hide();
  $(window).scroll(function () {
    var girlTop = $(".chpt1-girl").offset().top;
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (
      windowTop + windowHeight > girlTop &&
      windowTop < girlTop + $(".chpt1-girl").height()
    ) {
      $(".chpt1-girl").fadeIn();
    } else {
      $(".chpt1-girl").fadeOut();
    }
  });

  // chpt3-pop-voice is here!
  $(".chpt3-pop-left .chpt3-voice img").click(function () {
    var audio = $(this).siblings("audio")[0];
    if (audio.paused) {
      audio.play();
      $(this).attr("src", "image/voiceon.png");
    } else {
      audio.pause();
      $(this).attr("src", "image/voiceoff-1.png");
    }
  });

  $(".chpt3-pop-right .chpt3-voice img").click(function () {
    var audio = $(this).siblings("audio")[0];
    if (audio.paused) {
      audio.play();
      $(this).attr("src", "image/voiceon-1.png");
    } else {
      audio.pause();
      $(this).attr("src", "image/voiceoff.png");
    }
  });

  //jumper is here!
  $(".titlelink").click(function (e) {
    e.preventDefault();
    allowNavigation = true;
    $("body").removeClass("no-scroll");
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000,
      function () {
        // 当动画完成后，显示 .catalog
        $(".catalog").fadeIn();
      }
    );
  });

  //the scrollV is here!
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    var flrhOffset = $(".chpt2-2-container").offset().top;
    var kuangOffset =
      $(".kuang-enhance").offset().top + $(".kuang-enhance").height();

    if (
      scrollPosition - 700 >= flrhOffset &&
      scrollPosition + 500 <= kuangOffset
    ) {
      $(".flrh-enhance").fadeIn();
      $(".flrh-enhance").css({ position: "fixed", top: "20%", left: "0" });
    } else {
      $(".flrh-enhance").fadeOut(100);
    }
  });
});
