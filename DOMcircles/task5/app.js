// 1-i ağ 1-i qara 7-si mavi 7-si qırmızı olmaqla ümümilikdə 16 bilyard topu yaradın
// ağ dairə xaricində geri qalan topların daxilində nömrələri yazılacaq
// bilyard masasI görüntüsü üçün [link](https://upload.wikimedia.org/wikipedia/commons/5/5e/American-style_pool_table_diagram_%28empty%29.png)-dəki arxafon şəklindən istifadə edin.
// yaradılan toplar random olaraq görüntüsü verilən bilyard masası üzərində random yerlərdə yerləşməlidir.



function randomCirclePlacement(_radius) {
    let i = 0;
    let daireler = [];
    while (i < 16) {
        let daire = document.createElement('div');
        let randX = Math.random() * 1000;
        let randY = Math.random() * 1000;
        daire.style.width = `${_radius*2}px`;
        daire.style.height = `${_radius*2}px`;
        daire.className = 'circle';
        daire.style.top = `${randX}px`;
        daire.style.left = `${randY}px`;
        document.body.append(daire);
        i++
        daireler.push(daire);
        for (let i in daireler) {
            if (i >= 0 && i < 7) {
                daireler[i].style.backgroundColor = 'blue';
            } else if (i >= 7 && i < 14) {
                daireler[i].style.backgroundColor = 'red';

            } else if (i == 14) {
                daireler[i].style.backgroundColor = 'black';

            } else {
                daireler[i].style.backgroundColor = 'white';

            }
        }
    }

}
randomCirclePlacement(15)






















// function randomCirclePlacement(_radius) {
//     let i = 0;
//     while (i < 16) {
//         let daire = document.createElement('div');
//         let randX = Math.random() * 1000;
//         let randY = Math.random() * 1000;
//         daire.style.width = `${_radius}px`;
//         daire.style.height = `${_radius}px`;
//         daire.className = 'circle';
//         daire.style.top = `${randX}px`;
//         daire.style.left = `${randY}px`;
//         document.body.append(daire);
//         i++
//     }

// }
// randomCirclePlacement(30)