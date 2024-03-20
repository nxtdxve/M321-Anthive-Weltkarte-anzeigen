// colors: red, blue, cyan, orange, brown, pink, purple, gold

const map = {
  xsize: 15,
  ysize: 24,
  fields: [
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'ant red', 'hill red', 'empty', 'ant red', 'hill red', 'empty', 'ant red', 'hill red', 'empty', 'ant red', 'hill red', 'water', 'water', 'water'],
    ['water', 'ant blue', 'hill blue', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'water', 'water'],
    ['water', 'ant cyan', 'hill cyan', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'water', 'water', 'water'],
    ['water', 'ant orange', 'hill orange', 'empty', 'ant red', 'empty', 'empty', 'empty', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'ant brown', 'hill brown', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'ant pink', 'hill pink', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'empty', 'empty', 'water', 'water'],
    ['water', 'ant purple', 'hill purple', 'empty', 'ant red', 'empty', 'water', 'empty', 'empty', 'empty', 'water', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant gold', 'hill gold', 'food', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'water', 'water', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'food', 'water', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'empty', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'empty', 'empty', 'empty', 'water'],
    ['water', 'empty', 'empty', 'empty', 'ant red', 'empty', 'empty', 'water', 'water', 'water', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'food', 'empty', 'water', 'food', 'water', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'water', 'water', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'water', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'water', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'water'],
    ['water', 'ant red', 'empty', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'water'],
    ['water', 'water', 'water', 'empty', 'ant red', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ]
};

updateWorldMap(map)