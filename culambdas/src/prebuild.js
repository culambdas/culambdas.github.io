const fs = require('fs');
const members = require('./members.json');

const genMemberMap = () => {
  const tmp = {};
  for (const [cls, lst] of Object.entries(members)) {
    for (const e of lst) {
      tmp[e['nickname']] = {
        number: e['number'],
        class: cls,
      };
    }
  }

  fs.writeFileSync('./src/memberMap.json', JSON.stringify(tmp), {
    encoding: 'utf8',
    flag: 'w',
  });
};

genMemberMap();

// for (const [cls, lst] of Object.entries(members)) {
//   for (const e of lst) {
//     let little = e['little-bro'];
//     let idx = little.indexOf(',');
//     if (idx !== -1) {
//       let fst = little.slice(0, idx);
//       let snd = little.slice(idx + 1, little.length);
//       e['little-bro'] = [fst, snd];
//     } else {
//       e['little-bro'] = [little];
//     }
//   }
// }

for (const [cls, lst] of Object.entries(members)) {
  for (const e of lst) {
    let little = e['little-bro'];
    let idx = little.indexOf(',');
    if (little === 'N/A') {
      e['little-bro'] = [];
    } else if (idx !== -1) {
      let fst = little.slice(0, idx);
      let snd = little.slice(idx + 1, little.length);
      e['little-bro'] = [fst, snd];
    } else {
      // let fst = little.indexOf('"');
      // let tmp = little.slice(fst + 1);
      // let snd = tmp.indexOf('"');
      // let nickname = tmp.slice(0, snd);
      // if (!membersMap.hasOwnProperty(nickname)) {
      //   console.log(e.name, '|', nickname);
      // }
      e['little-bro'] = [little];
    }
  }
}
