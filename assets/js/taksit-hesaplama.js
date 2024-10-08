//Kullanıcıdan kredi miktarını ve taksit sayısını alarak aylık taksiti hesaplayın.
//v2 toplam faiz oranını da sorup aylık faizli taksiti hesaplayın.

let kredi= prompt('Kredi miktarını giriniz: ');
let taksit= prompt('Taksit sayısını giriniz: ');
let faizOrani= prompt('Toplam faiz oranını giriniz: ');

let aylikTaksit= kredi+(kredi * (faizOrani/100)) / taksit;
faizliTaksit= alert('Aylık faizli taksitiniz= ' + aylikTaksit);
