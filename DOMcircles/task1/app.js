
 // Verilən parametrlərə əsasən dairə yaradan metod yazın
function createCircle(_selector, _radius, _backgroundColor) {
  let daire = document.createElement('div');
  daire.style.width = `${_radius*2}px`;
  daire.style.height = `${_radius*2}px`;
  daire.style.backgroundColor = `${_backgroundColor}`;
  daire.className = 'circle';
  document.body.append(daire)
  document.querySelector(`${_selector}`).appendChild(daire);

}
createCircle('box',100, 'white');

