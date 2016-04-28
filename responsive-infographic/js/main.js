var $title = $('.id-theft-text');
var $grab = $('.grab');
var $four = $('.four-years');
var $three = $('.three-months');
var $amount = $('.amount');
var $smallHand = $('.small-hand');
var $bigHand = $('.big-hand');
var $dude = $('.dude');
var $house = $('.just-house');
var $watch = $('.watch');
var $paper = $('.paper');
var $receiptClick = $('.click-zone');

$title.addClass('title-animate');

$grab.waypoint(function (direction) {
  if (direction == 'down') {
  $grab.addClass('grab-animate');
  } else {
  $grab.removeClass('grab-animate');
}
}, { offset: '-5%' });

$four.waypoint(function (direction) {
  if (direction == 'down') {
  $four.addClass('four-years-animate');
  } else {
  $four.removeClass('four-years-animate');
}
}, { offset: '70%' });

$three.waypoint(function (direction) {
  if (direction == 'down') {
  $three.addClass('three-months-animate');
  } else {
  $three.removeClass('three-months-animate');
}
}, { offset: '70%' });

$amount.waypoint(function (direction) {
  if (direction == 'down') {
  $amount.addClass('amount-animate');
  } else {
  $amount.removeClass('amount-animate');
}
}, { offset: '60%' });

$watch.on('mouseover', function () {
  $smallHand.addClass('small-hand-spin');
});

$watch.on('mouseover', function () {
  $bigHand.addClass('big-hand-spin');
});

$watch.on('mouseout', function () {
  $smallHand.removeClass('small-hand-spin');
});

$watch.on('mouseout', function () {
  $bigHand.removeClass('big-hand-spin');
});

$house.on('click', function () {
  $dude.toggleClass('dude-rise');
});

$receiptClick.on('click', function () {
  $paper.addClass('paper-animate');
});
