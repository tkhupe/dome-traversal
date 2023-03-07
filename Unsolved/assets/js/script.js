// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children('ul').children().css('background-color', 'white');
// const boxes = rootEl.find('.box');
// var rowThree = $('#root').find('.box');

var rowThree = rootEl.children('ul').eq(2);





// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning

rowThree.children().eq(0).text('O');

// rootEl.append('<div class="box">o</div>');
// var bottomLeft = rootEl.find('.box').last();
// var topLeft = rootEl.children()('ul').eq(0);
// bottomLeft.text('o')