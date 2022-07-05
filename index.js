// Für die folgenden Aufgaben kannst du dir Funktionen wie toString(), toFixed(), substring() und weitere zur Hilfe nehmen.
// Wichtig: Die Ausgabe soll stets ein String sein. Der String soll so geformt sein, dass er bspw. in CSS als Farbe benutzt werden kann (RGB: rgb(000, 000, 000), HEX: #000000,...).
// Verändere die Farbtöne wie angegeben.
// 1. rgb(247, 101, 101) => Rot um 80 verringern
// 2. rgb(21, 35, 112) => Blau um 100 und Grün um 75 erhöhen
// 3. rgb(167, 249, 85) => Rot und Blau auf ein Viertel reduzieren
// Gib nun die folgenden Farben in den gewünschten Formaten aus.
// 1. rgb(127, 255, 100) => HEX
// 2. #E23F76 => RGB
// 3. rgb(229, 13, 218) => HEX
// 4. #02D633 => RGB
// Und jetzt machen wir beides gleichzeitig: Farbton verändern und in andere Formate ausgeben.
// 1. rgb(71, 171, 247) => Rot um 100 erhöhen und in HEX ausgeben
// 2. rgb(59, 31, 242) => Blau um 200 und Grün um 31 verringern und in HEX ausgeben
// 3. #6BFF95 => Rot auf 255 und Blau auf 0 setzen und in RGB ausgeben
// 4. #234042 => Alle drei Kanäle um 50% erhöhen und in RGB ausgeben
// 5. rgb(165, 21, 50) => Rot und Blau auf ein Viertel reduzieren und in HEX ausgeben

//frage0
//rgb(247, 101, 101) => Rot um 80 verringern
const red = "rgb(247, 101, 101)";
const red2 = red.substring(4, 7);
console.log(red2 - 80);
//frage1
//rgb(21, 35, 112) => Blau um 100 und Grün um 75 erhöhen
const blueandgreen = "rgb(21, 35, 112)";
const blue = blueandgreen.substring(12, 15);
const blueNumber = +blue;
console.log(blueNumber + 100);
const green = blueandgreen.substring(8, 10);
const greenNumber = +green;
console.log(greenNumber + 75);
//frage2
//rgb(167, 249, 85) => Rot und Blau auf ein Viertel reduzieren
const redxandbluex = "rgb(167, 249, 85)";
const redx = redxandbluex.substring(4, 7);
const redx2 = +redx * 0.75;
console.log(redx - redx2);
const bluex = redxandbluex.substring(14, 16);
const bluex2 = +bluex * 0.75;
console.log(bluex - bluex2);
//frage3
//rgb(127, 255, 100) => HEX
const rot = 127;
const Grün = 255;
const blau = 100;
console.log(`#${rot.toString(16)}${Grün.toString(16)}${blau.toString(16)}`);
//frage4
//#E23F76 => RGB
const rot2 = 0xe2;
const Grün2 = 0x3f;
const blau2 = 0x76;
console.log(`rgb( ${rot2}, ${Grün2}, ${blau2})`);
//frage5
//rgb(229, 13, 218) => HEX
const rot3 = 229;
const Grün3 = 13;
const blau3 = 218;
console.log(
  `#${rot3.toString(16)}${Grün3.toString(16).padStart(2, "0")}${blau3.toString(
    16
  )}`
);
//frage6
//#02D633 => RGB
const rot4 = 0x02;
const Grün4 = 0xd6;
const blau4 = 0x33;
console.log(`rgb(${rot4}, ${Grün4}, ${blau4})`);
//frage7
//rgb(71, 171, 247) => Rot um 100 erhöhen und in HEX ausgeben
const redk = "rgb(71, 171, 247)";
const redk2 = redk.substring(4, 6);
const redkNumber = +redk2;
console.log(redkNumber + 100);
const rot5 = 71;
const Grün5 = 171;
const blau5 = 247;
console.log(
  `#${(rot5 + 100).toString(16)}${Grün5.toString(16)}${blau5.toString(16)}`
);
//frag8
//rgb(59, 31, 242) => Blau um 200 und Grün um 31 verringern und in HEX ausgeben
const greenandblue = "rgb(59, 31, 242)";
const greenl = greenandblue.substring(8, 10);
console.log(greenl - 31);
const bluel = greenandblue.substring(12, 15);
console.log(bluel - 200);
const rot6 = 59;
const Grün6 = 0;
const blau6 = 42;
console.log(
  `#${rot6.toString(16)}${Grün6.toString(16).padStart(2, "0")}${blau6.toString(
    16
  )}`
);
//frage9
//#234042 => Alle drei Kanäle um 50% erhöhen und in RGB ausgeben
const hex = "#234042";
const rot7 = 0x23;
const Grün7 = 0x40;
const blau7 = 0x42;
const hexend = `rgb( ${parseInt(rot7 * 1.5)}, ${Grün7 + Grün7 * 0.5}, ${
  blau7 + blau7 * 0.5
})`;
console.log(hexend);
//frage10
//rgb(165, 21, 50) => Rot und Blau auf ein Viertel reduzieren und in HEX ausgeben
const RGB = "rgb(165, 21, 50)";
const redg = RGB.substring(4, 7);
const redg2 = redg * 0.75;
console.log(redg - redg2);
const blueg = RGB.substring(12, 15);
const blueg2 = blueg * 0.75;
console.log(blueg - blueg2);
const rot8 = parseInt(41.25);
const Grün8 = 21;
const blau8 = parseInt(12.5);
console.log(
  `#${rot8.toString(16)}${Grün8.toString(16)}${blau8
    .toString(16)
    .padStart(2, "0")}`
);
