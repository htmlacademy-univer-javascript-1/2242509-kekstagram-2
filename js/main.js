function checkLength (str, maxLength) {
    if (str.length <= maxLength) {
        return true;
    }
    return false;
}

function getrandomNumber(min, max) {
    if (min < 0) {
        return "Ошибка!";
    }
    if (max <= min) {
        return "Проверть введённые данные!";
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
}