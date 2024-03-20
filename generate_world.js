function updateWorldMap(map) {
  const mapTable = document.getElementById('world-map');
  mapTable.innerHTML = '';

  for (let y = 0; y < map.ysize; y++) {
      const mapRow = document.createElement('tr');
      for (let x = 0; x < map.xsize; x++) {
          const mapCell = document.createElement('td');
          const [cellType, cellColor] = map.fields[y][x].split(' ');
          mapCell.style.backgroundSize = 'cover';
          mapCell.style.backgroundImage = `url('images/${cellColor ? `${cellType}_${cellColor}` : cellType}.png'), url('images/empty.png')`;
          if (cellType === 'water') {
            mapCell.style.backgroundImage = `url('images/water.gif')`;
          }
          mapRow.appendChild(mapCell);
      }
      mapTable.appendChild(mapRow);
  }
}
