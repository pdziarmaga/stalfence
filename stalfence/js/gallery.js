$(document).ready(function () {  
     $('#collapseOne').collapse({toggle: true});
     $('#collapseTwo').collapse({toggle: true});
     $('#collapseThree').collapse({toggle: true})
     $('#collapseFour').collapse({toggle: true})
     $('#collapseFive').collapse({toggle: true})
     $('#collapseSix').collapse({toggle: true})
   });


   let rowHeight = 120;

   if ( $(window).width() < 1100) {  
        rowHeight = rowHeight / 2;
   }

$(document).ready(function () {
    $('#gallery-wrought').justifiedGallery({
        rowHeight: rowHeight,
        maxRowHeight: null,
        margins: 3,
        border: 1,
        rel: 'liveDemo',
        lastRow: 'nojustify',
        captions: false,
        randomize: false,
        sizeRangeSuffixes: {
            lt100: '_m',//t
            lt240: '_m',//m
            lt320: '_m',//n
            lt500: '',
            lt640: '_m',//z
            lt1024: '_m'//b
        }
    });
});

$(document).ready(function () {
    $('#gallery-modern').justifiedGallery({
        rowHeight: rowHeight,
        maxRowHeight: null,
        margins: 3,
        border: 1,
        rel: 'liveDemo',
        lastRow: 'nojustify',
        captions: false,
        randomize: false,
        sizeRangeSuffixes: {
            lt100: '_m',//t
            lt240: '_m',//m
            lt320: '_m',//n
            lt500: '',
            lt640: '_m',//z
            lt1024: '_m'//b
        }
    })
});

$(document).ready(function () {
    $('#gallery-industrial').justifiedGallery({
        rowHeight: rowHeight,
        maxRowHeight: null,
        margins: 3,
        border: 1,
        rel: 'liveDemo',
        lastRow: 'nojustify',
        captions: false,
        randomize: false,
        sizeRangeSuffixes: {
            lt100: '_m',//t
            lt240: '_m',//m
            lt320: '_m',//n
            lt500: '',
            lt640: '_m',//z
            lt1024: '_m'//b
        }
    })
});

$(document).ready(function () {
    $('#gallery-mesh').justifiedGallery({
        rowHeight: rowHeight,
        maxRowHeight: null,
        margins: 3,
        border: 1,
        rel: 'liveDemo',
        lastRow: 'nojustify',
        captions: false,
        randomize: false,
        sizeRangeSuffixes: {
            lt100: '_m',//t
            lt240: '_m',//m
            lt320: '_m',//n
            lt500: '',
            lt640: '_m',//z
            lt1024: '_m'//b
        }
    })
});

$(document).ready(function () {
    $('#gallery-balcony').justifiedGallery({
        rowHeight: rowHeight,
        maxRowHeight: null,
        margins: 3,
        border: 1,
        rel: 'liveDemo',
        lastRow: 'nojustify',
        captions: false,
        randomize: false,
        sizeRangeSuffixes: {
            lt100: '_m',//t
            lt240: '_m',//m
            lt320: '_m',//n
            lt500: '',
            lt640: '_m',//z
            lt1024: '_m'//b
        }
    })
});

$(document).ready(function () {
    $('#gallery-automation').justifiedGallery({
        rowHeight: rowHeight,
        maxRowHeight: null,
        margins: 3,
        border: 1,
        rel: 'liveDemo',
        lastRow: 'nojustify',
        captions: false,
        randomize: false,
        sizeRangeSuffixes: {
            lt100: '_m',//t
            lt240: '_m',//m
            lt320: '_m',//n
            lt500: '',
            lt640: '_m',//z
            lt1024: '_m'//b
        }
    })
});