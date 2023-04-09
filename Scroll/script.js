$(document).ready(function () {
  $("div").scroll(function () {
    let x = $(this).scrollTop();
    // console.log(st);
    // if (st > lastScrollTop) {
    //   x = (x + 1) % 256;
    // } else {
    //   x = (x - 1) % 256;
    // }
    // lastScrollTop = st;
    x = Math.floor(x/50);
    x = x%256;
    let rgb = "rgb(100,100," + x + ")";
    console.log(rgb);
    $("div").css({ "background-color": rgb });

    frame = x%41 + 1;
    if (frame < 10) {
      frameNum = "00" + frame;
    }
    else {
      frameNum = "0" + frame;
    }
    imgSrc = "frames/ezgif-frame-" + frameNum + ".jpg";
    $("#gifImage").attr("src",imgSrc);
  });
});
