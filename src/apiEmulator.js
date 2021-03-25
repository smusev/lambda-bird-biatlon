export default function apiEmulator(){

    const rows = [
        createData('Симон Эдер', 92.5, 1, 67, 1021),
        createData('Артем Тищенко', 92.1, 2, 51, 1002),
        createData('Стурла Легрейд', 92.0, 3, 24, 994),
        createData('Никита Лобастов', 90.6, 4, 24, 998),
        createData('Яков Фак', 89.5, 5, 49, 976),
        createData('Давид Коматц', 88.3, 6, 87, 993),
        createData('Матвей Елисеев', 88.2, 7, 37, 889),
        createData('Эрленн Бьонтегор', 87.9, 8, 94, 767),
        createData('Арнд Пайффер', 87.7, 9, 65, 808),
        createData('Себастьян Самуэльссон', 87.5, 10, 98, 744),
        createData('Миха Довжан', 87.5, 11, 81, 815),
        createData('Алекс Цисар', 87.3, 12, 9, 833),
        createData('Михал Крчмарж', 87.1, 13, 63, 793),
      ]
    


    return rows;
};
  
function createData(name, shots, place, shotTime, yearScore) {
    return { name, shots, place, shotTime, yearScore };
  };