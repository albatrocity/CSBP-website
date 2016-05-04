// (function() {
//   var s = Snap("#animation");
//   console.log(s);
//   Snap.load("/img/flock_party_bg.svg", function (f) {
//     g = f.select("g");
//     s.append(g);
//     canvas = g.getBBox()
//     console.log(canvas);
//     var pizzabella = g.select("#pizzabella")
//     var mildreds   = g.select("#mildreds")
//
//     pizzaMatrix = new Snap.Matrix()
//     // pizzaMatrix.rotate(200)
//     pizzaMatrix.translate(-canvas.width/2,0)
//
//     pizzabella.attr({transform: pizzaMatrix})
//     // pizzabella.attr({fill: 'white'})
//     // pizzabella.animate({ry:10}, 220, function() {
//     //   console.log('done');
//     // })
//
//     //rotate and scale with transform string (raphael/snap format)
//     // var bbox = pizzabella.getBBox(); //bounding box, centre cx/cy
//     // var mbbox = mildreds.getBBox(); //bounding box, centre cx/cy
//     // pizzabella.animate({ transform: "r1," + bbox.cx + ',' + bbox.cy }, 2000);
//     // mildreds.animate({ transform: "r1," + mbbox.cx + ',' + mbbox.cy }, 2000);
//
//
//     // pizzabella.animate({
//     //   transform: "r2," + pizzabellaBox.cx + "," + pizzabellaBox.cy
//     // }, 5000, mina.bounce);
//     // pizzabella.animate({
//     //     rotate: [20,20,20]
//     // }, 500, function() {console.log('DONE');});
//   });
// })()
