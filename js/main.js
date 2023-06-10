function qetRandomIntInclusive (min, max) 
{
    if (min >=0 && max>= 0 && min < max)
    {
    min = Math.ceil(min);
    max = Math.floor (max);

    return Math.floor (Match.random () * (max - min + 1)) + min;
}
else {
    if (min > max) {
        return 'Incorrect order of values!';
    }
    }
}

const result = getRandomIntInclusive (0, -2);

function checkStringLength (string, length) {
    return string.length <= length;
  }
