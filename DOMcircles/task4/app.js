// radiusu 5px olan bir dairə yaradın
// funksiya hər dəfə icra olunanda yaradılan dairə body elementinin daxilində təsadufi bir yerdə görünməlidir


function randomCirclePlacement(_radius) {
    let daire = document.createElement('div');
    let randX = Math.random() * 1000;
    let randY = Math.random() * 1000;
    daire.style.width = `${_radius*2}px`;
    daire.style.height = `${_radius*2}px`;
    daire.style.backgroundColor = "red";
    daire.className = 'circle';
    daire.style.top = `${randX}px`;
    daire.style.left = `${randY}px`;
    document.body.append(daire);
}
randomCirclePlacement(10)