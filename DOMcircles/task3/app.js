
// [Tapşırıq 02](#tapşırıq-02)-də verilən detallar eyni ilə tətbiq olunacaq.Bu tapşırıqda yaradacağınız dairələrin görüntüsü [Link](https://www.presentation-process.com/wp-content/uploads/editable-circles-graphic.jpg)-dəki kimi olmalıdır

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
  document.querySelector('.box').innerHTML=daire;

}
createMultipleCircle(10, 200, 'white');

