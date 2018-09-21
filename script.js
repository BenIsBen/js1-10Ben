// SleepIn
function sleepIn(x,y) {
    var sleepin = !x && y;
    return sleepin;
}
// Monkey Trouble
function monkey_trouble(x, y){
    if(x == y){
        return true;
    }else{
        return false;
    }
}
//string times
function string_times(x, y){
    var text = x;
    if(y > 0){
        for (var i = 1; i < y; i++) {
            text = text + x;
        }
        return text;
    }else{
        return "";
    }
}
// front times
function front_times(x, y){
    var text = x;
    var newtext = text.substring(0,3);
    if(y > 0){
        for (var i = 1; i < y; i++) {
            newtext = newtext + text.substring(0,3);
        }
        return newtext;
    }else{
        return "";
    }
}
// string bits
function string_bits(string){
    var stringLength = string.length;
    var newString = "";
    var letter = "";
    for(var i = 0; i < stringLength/2; i++){
        letter = string.substring(0 + 2 * i, 1 + 2 * i);
        newString += letter;
    }
    return newString;
}

//caught speeding
function caughtSpeeding(x, y){
    if(!y){
        if(x > 60){
            if(x > 80){
                return 2;
            }else{
                return 1;
            }
        }else{
            return 0;
        }
    }else if (x > 65){
        if (x > 85){
            return 2;
        } else {
            return 1;
        }
    } else {
        return 0;
    }
}
//fizzbuzz
function fizz_buzz(x){
    if(x % 3 == 0){
        var div3 = true;
    }else{
        div3 = false;
    }
    if(x % 5 == 0){
        var div5 = true;
    }else{
        div5 = false;
    }
    if(div3 && div5){
        return "FizzBuzz";
    }else{
        if(div3){
            return "Fizz";
        }else{
            if(div5){
                return "Buzz";
            }else{
                return x + "!";
            }
        }
    }
}
//tea party
function teaParty(x, y){
    if(x < 5 || y < 5){
        return 0;
    }else{
        if(2 * x <= y || 2 * y <= x){
            return 2;
        }else{
            return 1;
        }
    }
}
//blackjack
function blackjack(x, y) {
    var newx = x;
    var newy = y;
    if (x > 21 && y > 21) {
        return 0;
    } else {
        if (x > 21) {
            return newy;
        } else {
            if (y > 21) {
                return newx;
            } else {
                if (newx > newy) {
                    return newx;
                } else {
                    return newy;
                }
            }
        }
    }
}
//lonesum
function loneSum(a, b, c) {
    if(a == b && a == c && b == c) {
        sum = 0;
    }else if (a == b) {
        var sum = c;
    } else if (a == c) {
        sum = b;
    } else if(b == c){
        sum = a;
    } else if (a != b && a != c) {
        sum = a+b+c;
    }

    return sum;
}