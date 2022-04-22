"use strict.";
// Verilən parametrlərə əsasən iç içə dairələr yaradan metod yazın.[Nümunə](https://i.pinimg.com/originals/20/64/c1/2064c19aa04bac67153ef8832618ccb0.gif)


function createMultipleCircle(_circleCount, _radius, _backgroundColor) {
  for (let i = 0; i < _circleCount; i++) {
    if (true) {
      let daire = document.createElement('div');
      daire.style.width = `${_radius*2}px`;
      daire.style.height = `${_radius*2}px`;
      daire.style.backgroundColor = `${_backgroundColor}`;
      daire.className = 'circle';
      document.body.append(daire);
      _radius-=20;
    }

  }

}
createMultipleCircle(10, 200, 'white');


