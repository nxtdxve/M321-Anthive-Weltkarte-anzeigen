// colors: red, blue, cyan, orange, brown, pink, purple, gold

const map = {
  xsize: 15,
  ysize: 24,
  fields: [
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'ant red', 'hill red', 'empty', 'ant red', 'hill red', 'empty', 'ant red', 'hill red', 'empty', 'ant red', 'hill red', 'water', 'water', 'water'],
    ['water', 'ant blue', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'water', 'water'],
    ['water', 'ant cyan', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'water', 'water', 'water'],
    ['water', 'ant orange', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'ant brown', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'ant pink', 'food', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'empty', 'empty', 'water', 'water'],
    ['water', 'ant purple', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant gold', 'empty', 'food', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'hill gold', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'hill orange', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'food', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ]
};

updateWorldMap(map)
console.log('HALLO');

const HOST = 'localhost';
const PORT = 65432;

const ws = new WebSocket('ws://' + HOST + ':' + PORT);

ws.onopen = function () {
  console.log('WebSocket Client Connected');
  ws.send('fetch_world');
}

ws.onmessage = function (e) {
  console.log("Received: '" + e.data + "'");
  // const data = JSON.parse(e.data);
  // if (data.type === 'world') {
  //   updateWorldMap(data.map);
  // }
}