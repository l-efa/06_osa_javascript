// 1.1
const henkilö = {
  nimi: "Aleksi",
  ikä: 30,
  tervehdi: function () {
    console.log(`Hei, nimeni on ${this.nimi}`);
  },
};

console.log(henkilö);

//-----------------------
// 1.2

console.log(henkilö["nimi"]);
console.log(henkilö.ikä);

//-----------------------------------
// 1.3

henkilö.ikä = 31;
henkilö["maa"] = "Kroatia";

console.log(henkilö.ikä, henkilö.maa);

//----------------------------------
// 1.4

const opiskelija = {
  nimi: "Emilia",
  tiedot: {
    ikä: 22,
    kurssi: "Javascript",
  },
};

console.log(opiskelija.tiedot.ikä);

//---------------------------------
// 1.5

delete henkilö["ikä"];

console.log(henkilö);

//---------------------------------
// 1.6

for (key in henkilö) {
  console.log(`avain: ${key}, arvo: ${henkilö[key]}`);
}

//----------------------------------
// 1.7

henkilö.tervehdi();

//-----------------------------------
// tehtävä 2
// 2.1

let kirjasto = [
  {
    otsikko: "Kissat koiria",
    kirjailija: "Urho Kekkonen",
    julkaisuvuosi: 1996,
  },

  {
    otsikko: "Kirjolohi",
    kirjailija: "Hauki",
    julkaisuvuosi: 2007,
  },
];

//------------------------------
// 2.2

console.log(kirjasto[0].otsikko);
kirjasto[1].julkaisuvuosi = 2009;
console.log(kirjasto[1].julkaisuvuosi);

//-------------------------------
// 2.3

kirjasto[0].lajityypit = ["draama", "rikos"];
kirjasto[0]["onSaatavilla"] = true;

console.log(kirjasto[0]);

//--------------------------------
// 2.4
class Kirjasto {
  constructor(otsikko, julkaisuvuosi, kirjailija, lajityypit) {
    this.otsikko = otsikko;
    this.julkaisuvuosi = julkaisuvuosi;
    this.kirja = kirjailija;
    this.lajityypit = lajityypit;
  }
}

let kirja1 = new Kirjasto("david", 1212, "david", ["draama", "rikos"]);

console.log(kirja1);

//------------------------------------
// 2.5

function LuoKirja(otsikko, julkaisuvuosi, kirjailija, lajityypit) {
  this.otsikko = otsikko;
  this.julkaisuvuosi = julkaisuvuosi;
  this.kirjailija = kirjailija;
  this.lajityypit = lajityypit;
}

let kirja2 = new LuoKirja("turtles", 2000, "mike", ["Action", "thriller"]);

console.log(kirja2);

//-----------------------------------
// 2.6

let jsonKirja = JSON.stringify(kirja2);

console.log(jsonKirja);
