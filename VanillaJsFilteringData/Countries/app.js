// Verilən data strukturuna əsasən aşağıdakı işləri görün Countries
// Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın
// write function that return array of country names
// Hərfə görə ölkə sayının olduğu object return edən funksiya yazın. Nümunə {"A":20,"B":15}
// write function that return object of Letter as key and value as country count like in example {"A":20,"B":15}
// Ən çox şəhəri olan ölkə adını return edən funksiya yazın
// write function that return name of country which have max number of cities
// Ölkə adı ən uzun olan ölkənin şəhərlərini return edən funksiya yazın.
// write function that return city names of country which name is the longest
// Bütün ölkələrin şəhər saylarının olduğu objecti return edən funksiya yazın .Nümunə {"Azerbaijan":70,"Turkey":300}

import { countries } from "./list"

function getOlkeAdi() {
    for (x in countries) {
        console.log(x)
    }

}