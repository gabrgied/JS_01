//  1

let amzius = 80;
let vardas = 'Vainius';
let hobis = 'lenktynes';

console.log(`Mano vardas ` + vardas + `, man ` + amzius + ` metu. \n Mano hobis ` + hobis);

// 2

let gimimo_metai = 1994;
let metai_ateity = 2051;

console.log(metai_ateity + ` metais man bus ` + (metai_ateity-gimimo_metai) + ` arba ` + (metai_ateity-gimimo_metai-1) + ` metai(-u)`);

// 3

let skersmuo = 14;
let spindulys = (skersmuo/2);
let plotas = Math.PI*Math.pow(spindulys, 2);

console.log(`Apskritimo, kurio skersmuo yra `+  skersmuo  + `, plotas yra ` + plotas.toFixed(2));

// 4

let laipsniaiC = 23;
let laispniaiF = (laipsniaiC * 9/5) + 32;

console.log(laipsniaiC.toFixed(1) + ` Celcijaus atitinka ` + laispniaiF + ` Farenheito`);

//5

var sakinys="Mes kalbame mažai, jeigu nekalbame apie save";
console.log(sakinys.length);
var sakinysUp = sakinys.toUpperCase();
console.log(sakinysUp);
var sakinysRem = sakinys.split(" apie save");
console.log(sakinysRem);
var sakinysSplit = sakinys.split(" ");
console.log(sakinysSplit);
console.log(sakinys.indexOf('mažai'));
var sakinysReplace = sakinys.replace("kalbame", "šnekame");
console.log(sakinysReplace);

//6

var sakinysBlogas = "laBa8s rYta56s, lIEtuva";
var sakinysGeresnis1 = sakinysBlogas.replace(/\d+/g, '');
var sakinysGeresnis2 = sakinysGeresnis1.toLowerCase();
var sakinysGeresnis3 = sakinysGeresnis2.replace("l", "L");
var sakinysGeriausias = sakinysGeresnis3.replace("l", "L");   // AR YRA PROTINGESNIS BUDAS?
console.log(sakinysGeriausias);


// 7

var masyvas = [10, 77, 1, 5, 74, 12, -2, -9, 0, 51];
var masyvasPop = masyvas.pop();
console.log(masyvas);
var masyvasShift = masyvas.shift();
console.log(masyvas);
var masyvasRep = masyvas.splice(5, 1, 'naujas');
console.log(masyvas);

var masyvas2 = ['rep', 'gif', 'tar'];
var masyvasNew=masyvas.concat(masyvas2);
console.log(masyvasNew);
masyvasNew.join(', ');
console.log(masyvasNew);

// 8
let mokinys = {
  Martynas:
  {
    vardas: 'Martynas',
    pavarde: 'Lubys',
    amzius: 17,
    pazymiu_vidurkis: 4.5,
    stipendija: false
  },
  Alina:
  {
    vardas: 'Alina',
    pavarde: 'Alijeva',
    amzius: 16,
    pazymiu_vidurkis: 9,
    stipendija: true
  },
  Kazimieras:
  {
    vardas: 'Kazimieras',
    pavarde: 'Bakštys',
    amzius: 17,
    pazymiu_vidurkis: 9.3,
    stipendija: true
  },
  Algimantas:
  {
    vardas: 'Algimantas',
    pavarde: 'Peraitis',
    amzius: 16,
    pazymiu_vidurkis: 6.5,
    stipendija: true
  },
  Kotryna:
  {
    vardas: 'Kotryna',
    pavarde: 'Petraitytė',
    amzius: 16,
    pazymiu_vidurkis: 4,
    stipendija: false
  }
};

console.log(mokinys['Alina'].amzius);
console.log(mokinys['Algimantas'].pazymiu_vidurkis);
console.log(mokinys['Martynas']);
