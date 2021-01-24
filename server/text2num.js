function text2num(text) {
  let pillsDes = text.toUpperCase();
  let pills = 0;
  let frequency = 0;
  let indexPills;
  if (
    pillsDes.includes(
      'ONE TABLET' || '1 TABLET' || 'ONE CAPSULE' || '1 CAPSULE'
    )
  ) {
    if (pillsDes.includes('ONE TABLET' || 'ONE CAPSULE')) {
      pillsDes = pillsDes.replace(/ONE/g, '1');
    }
    indexPills = pillsDes.search('1');
  }

  pills = parseInt(pillsDes[indexPills]);

  if (pillsDes.includes('EVERY DAY' || 'DAILY')) {
    frequency = 24;
  }

  return 'Take your pill in an hour!';
}

module.exports = text2num;
// const Small = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
//   ten: 10,
//   eleven: 11,
//   twelve: 12,
//   thirteen: 13,
//   fourteen: 14,
//   fifteen: 15,
//   sixteen: 16,
//   seventeen: 17,
//   eighteen: 18,
//   nineteen: 19,
//   twenty: 20,
//   thirty: 30,
//   forty: 40,
//   fifty: 50,
//   sixty: 60,
//   seventy: 70,
//   eighty: 80,
//   ninety: 90,
// };

// const Magnitude = {
//   thousand: 1000,
//   million: 1000000,
//   billion: 1000000000,
//   trillion: 1000000000000,
//   quadrillion: 1000000000000000,
//   quintillion: 1000000000000000000,
//   sextillion: 1000000000000000000000,
//   septillion: 1000000000000000000000000,
//   octillion: 1000000000000000000000000000,
//   nonillion: 1000000000000000000000000000000,
//   decillion: 1000000000000000000000000000000000,
// };

// let a, n, g;

// function text2num(s) {
//   a = s.toString().split(/[\s-]+/);
//   n = 0;
//   g = 0;
//   a.forEach(feach);
//   return n + g;
// }

// function feach(w) {
//   let x = Small[w];
//   if (x != null) {
//     g = g + x;
//   } else if (w == 'hundred') {
//     g = g * 100;
//   } else {
//     x = Magnitude[w];
//     if (x != null) {
//       n = n + g * x;
//       g = 0;
//     } else {
//       alert('Unknown number: ' + w);
//     }
//   }
// }

// module.exports = text2num;
