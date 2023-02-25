// 1-masal Berilgan son 10 dan katta bo'lsa unga 3 ni qo'shib konsolga chiqaring.
// Agar 10 dan kichik bo'lsa 2ga ko'paytirib natijani konsolga chiqaring.
// Agar 10 ga teng bo'lsa 22 sonini konsolga chiqaring.

var num = 12;

if (num > 10) {
  console.log(num + 3);
} else if (num < 10) {
  console.log(num * 2);
} else {
  console.log(22);
}

// 2-masala Berilgan a sonini 3ga bo'lgandagi butun  qismini b o'zgaruvchiga joylang va b sonini konsolga chiqaring.

var a = 5;
var b = a / 3;

console.log(b);

// 3-masal a soni berilgan. a sonini 3ga bo'lgandagi qoldig'ini kansolga chiqaring.

var a = 68;

console.log(a % 3);

// 4-masala Sonning  juft  yoki  toqligini  aniqlang.  Agar  juft bo'lsa 'juft' so'zini return qiling.
//  Agar toq bo'lsa 'toq' so'zini return qiling.
var n = 11;

if (n / 2 === 0) {
  console.log("juft");
} else if (n / 2 !== 0) {
  console.log("toq");
}

// 5-masala va b sonlari berilgan.  Berilgan ikkita sondan kattasini konsolga chiqaring. Agar ular teng bo'lsa 'Voy ular teng' yozuvi chiqsin.

var a = 10;
var b = 5;

if (a > b) {
  console.log("a soni katta");
} else if (a < b) {
  console.log("b soni katta");
} else {
  console.log("Voy! ular teng");
}

// 6-masal a, b, c  sonlari berilgan.  Shu sonlardan eng kattasini toping.

var a = 71;
var b = 11;
var c = 81;

if (a > b) {
  if (a > c) {
    console.log("katta son a = " + a);
  } else {
    console.log("katta son c = " + c);
  }
} else {
  if (b > c) {
    console.log("katta son b = " + b);
  }
}

// 7-masala a soni berilgan. Sonning musbat yoki manfiy ekanligini aniqlang.
//  Son 0 ga teng bo'lsa, 0 ni konsolga chiqaring.

var a = -10;

if (a > 0) {
  console.log("musbat");
} else if (a < 0) {
  console.log("manfiy");
} else {
  console.log(a);
}

// 8-masala a soni berilgan. Berilgan son 5 ga bo'linadimi? Agar bo'linsa
//  konsolga true bo'lmasa false chiqaring.
var a = 10;

if (a % 5 == 0) {
  console.log("true");
} else {
  console.log("false");
}

// 9-masala Berilgan son 3 va 4 ga bo'linadimi? Agar bo'linsa konsolga 'true'  bo'lmasa falseni chiqaring.

var a = 26;

if (a % 3 == 0 && a % 4 == 0) {
  console.log("true");
} else {
  console.log("false");
}

// 10-masal Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga chiqsin.
//  Agar bo'linmasa false  konsolga chiqsin.

// Kabisa yil deb 4 yilda birmarta keladigan yilga aytiladi.
// Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi.

var m = 2008;

if ((m % 4 == 0 && m / 100 !== 0) || m / 400 == 0) {
  console.log("true");
} else {
  console.log("false");
}

// 11-masala c char berilgan. Berilgan  char alfavit  yoki raqam ekanligini aniqlang.
//  Agar alfavit bo'lsa 'alpha' ni  konsolga chiqaring,  agar son bo'lsa 'son' ni  konsolga chiqaring.

var c = m;

if (c >= 0 && c <= 9) {
  console.log("number");
} else {
  console.log("alpha");
}

// 12-masala c char berilgan. Berilgan  char katta alfavit yoki kichik alfavit ekanlini aniqlang .
// Agar alfavit kichik bo'lsa 'lowerCase' so'zini konsolga chiqaring,
//  Agar alfavit katta bo'lsa 'upperCase' ni chiqaring,  agar alfavit  bo'lmasa  'none' ni  chiqaring.

var c = "a";

if (c >= "a" && c <= "z") {
  console.log("lowerCase");
} else if (c >= "A" && c <= "Z") {
  console.log("upperCase");
} else {
  console.log("none");
}

// 12-masala Berilgan son hafta kunining qaysi kuniga to'g'ri keladi .
// Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring,
// Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz ..,
// Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin.

var num = 5;

if (num == 1) {
  console.log("Duwanba");
} else if (num == 2) {
  console.log("Sewanba");
} else if (num == 3) {
  console.log("Chorwanba");
} else if (num == 4) {
  console.log("Paywanba");
} else if (num == 5) {
  console.log("Juma");
} else if (num == 6) {
  console.log("Shanba");
} else if (num == 7) {
  console.log("Yakwanba");
} else {
  console.log("none");
}

// 13-masala a,b,c sonlari berilgan . Shu sonlar uchburchakning ichki burchaklari ekanligini aniqlang.
// Agar berilgan  sonlar uchburchakning burchaklari bo'lsa ,
// true konsolga chiqaring bo'lmasa false konsolga chiqaring.

var a = 60,
  b = 60,
  c = 60;
var triangle = a + b + c;

if (a > 0 && b > 0 && c > 0 && triangle == 180) {
  console.log("true");
} else {
  console.log("false");
}

// 14-masala a,b,c sonlari berilgan . Shu sonlar uchburchakning tomonlari ekanligini aniqlang.
// Agar kelgan sonlar uchburchakning tomonlari bo'lsa ,true  konsolga  chiqaring,
//  bo'lmasa false konsolga chiqaring.

var a = 30;
var b = 25;
var c = 20;

if (a < b + c && b < a + c && c < a + b) {
  console.log("true");
} else {
  console.log("false");
}

// 15-masla a,b,c sonlari berilgan. Bu sonlar uchburchakning 3ta tomonidir.
//  Uchburchak ning shakli qanday ekanligini aniqlang.
// Agar teng tomonli bo'lsa  'equilateral' so'zini konsolga chiqaring.
// Agar teng yonli bo'lsa  'isosceles' so'zini konsolga chiqaring.
// Agar ixtiyoriy  bo'lsa  'scalene'  so'zini konsolga chiqaring.

var a = 5,
  b = 12,
  c = 4;

if (a == b && b == c) {
  console.log("equilaterial");
} else if (a == b || b == c || c == a) {
  console.log("isosceles");
} else {
  console.log("scalene");
}

// 16-masala a, b, c sonlari berilgan.
// Berilgan 3 ta sondan nechtasi musbat ekanligini aniqlovchi dastur yozing va
// musbat sonlar sonini konsolga chiqaring.

var a = 12;
var b = -2;
var c = -5;

var num = "";

if (a > 0) {
  num++;
}

if (b > 0) {
  num++;
}

if (c > 0) {
  num++;
}

console.log(num);

// 17-masala a, b sonlari berilgan.
// Berilgan ikkita sondan  kichigini  toping  va shu sonni konsolga chiqaring.
// Agar ular teng bo'lsa 'teng' so'zini konsolga chiqaring.

var a = -5;
var b = 4;

if (a > b) {
  console.log("b soni kichik  = " + b);
} else if (b > a) {
  console.log("a soni kichik = " + a);
} else {
  console.log("teng");
}

// 18-masala a, b, c sonlari berilgan.
// Berilgan uchta sonning o'rtacha qiymatini  hisoblovchi dastur yozing
//   va shu sonni konsolga chiqaring.

var a = 10;
b = 2;
c = 7;

var num = a + b + c;
var averageValue = num / 3;

console.log(averageValue);

// 19-masala a, b, c sonlar berilgan.

// Agar sonlar o'sish tartibida  joylashgan bo'lsa  1 ni konsolga chiqaring.
// Agar kamayish tartibda bo'lsa 2 konsolga chiqaring.
// Agar eng kattasi b bo'sa  b ni konsolga chiqaring.
// Agar ular teng bo'lsa 5 ni konsolga chiqaring.
// Bo'lmasa 0 ni konsolga chiqaring.

var a = 10;
b = 100;
c = 10;

if (a < b && b < c) {
  console.log("1");
} else if (a > b && b > c) {
  console.log("2");
} else if (b > a && b > c) {
  console.log("b = " + b);
} else if (a == b && b == c && c == a) {
  console.log("5");
} else {
  console.log("0");
}

// 20-masala a, b, c sonlar berilgan.
// Agar shu solarning ikkitasi o'zaro teng bo'lsa  teng bo'lmagan sonni konsolga chiqaring,
//  aks holda 0 ni chiqaring.

var a = 20;
b = 7;
c = 5;

if (a == b) {
  console.log(c);
} else if (b == c) {
  console.log(a);
} else if (c == a) {
  console.log(b);
} else {
  console.log(0);
}

// 21-masala Sonlar o'qida a,b sonlari berilgan. Ular orasidagi masofani toping.

var a = 336;
b = -24;

if (a > b) {
  console.log(a - b);
} else {
  console.log(b - a);
}

// 22-masala Sonlar o'qida a nuqta berilgan.
// Shu nuqtadan 0 gacha bo'lgan masofani toping.

var a = -7;

if (a > 0) {
  console.log(a);
} else {
  console.log(-1 * a);
}

// 23-masala a soni berilgan. 1 - 999 sonlar orasida.
// Agar a soni 1 honali son bo'lsa 1 ni return qiling.
// Agat a soni 2 honali son bo'lsa 2 ni return qiling.
// Agar a soni 3 honali bo'lsa 3 ni return qiling.

var a = 157;

if (a >= 100) {
  console.log("3");
} else if (a >= 10) {
  console.log("2");
} else {
  console.log("1");
}

// 24-masala a, b, c, d sonlar berilgan.
// Agar ularning qiymati barchasi musbat   bo'lsa true konsolga chiqaring
//  bo'lmasa false ni konsolga chiqaring.

var a = -12;
b = 20;
c = 120;
d = 200;

if (a > 0 && b > 0 && c > 0 && d > 0) {
  console.log(true);
} else {
  console.log(false);
}

// 25-masala a, b, c sonlar berilgan (0 emas).
// Agar  3 ta son ham toq bo'lsa 1 ni konsolga chiqaring.
// Agar 3 ta son ham juft bo'lsa 2 ni konsolga chiqaring.
// Agar xohlagan bittasi toq bo'lsa 3 ni konsolga chiqaring.
// Agar shartlarni qanoatlantirmasa  0 ni konsolga chiqaring.

var a = 49;
b = 3;
c = 27;

if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) {
  console.log(1);
} else if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
  console.log(2);
} else if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  console.log(3);
} else {
  console.log(0);
}

// 2 -masala a, b, c sonlar berilgan (0 emas).

// Agar xohlagan 2 tasi juft bo'lsa 1 ni konsolga chiqaring.
// Agar xohlagan 2 tasi toq bo'lsa 2 ni konsolga chiqaring
// bo'lmasa 0 ni konsolga chiqaring.

var a = 86;
b = 72;
c = 66;

if (
  (a % 2 == 0 && b % 2 == 0) ||
  (a % 2 == 0 && c % 2 == 0) ||
  (b % 2 == 0 && c % 2 == 0)
) {
  console.log(1);
} else if (
  (a % 2 == 1 && b % 2 == 1) ||
  (a % 2 == 1 && c % 2 == 1) ||
  (b % 2 == 1 && c % 2 == 1)
) {
  console.log(2);
} else {
  console.log(0);
}

// 27-masala a, b, c sonlari berilgan.
// Shu sonlardan uch xonali son yasang.
// Agar xohlagan son 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring.

var a = 7;
b = 6;
c = 8;

if (a >= 0 && b >= 0 && c >= 0) {
  console.log(a * 100 + b * 10 + c);
} else {
  console.log(0);
}
