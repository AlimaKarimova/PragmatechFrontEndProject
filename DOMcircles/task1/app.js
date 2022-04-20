function createCircle(_selector, _radius, _backgroundColor) {
  let daire=document.createElement('div');
  daire.style.width=`${_radius}px`;
  daire.style.height=`${_radius}px`;
  daire.style.backgroundColor=`${_backgroundColor}`;
  daire.style.border='1px solid black';
  daire.style.borderRadius=`50%`;
  document.body.append(daire)

}
createCircle();
