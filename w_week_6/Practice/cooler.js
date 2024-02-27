document.getElementById('b1').addEventListener('click', function() {
    var container = document.getElementById('container');
    var column = document.createElement('div');
    column.className = 'column';
    column.style.backgroundColor = getRandomColor();
    container.appendChild(column);
  });
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function generateRandom(){
    const array= document.getElementById
  }