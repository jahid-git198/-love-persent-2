
// দুই হৃদয়ের ম্যাচিং চেক
const click = document.getElementById("button-click");
// abarcheack-btn
const abarcheackbtn = document.getElementById('abarcheack-btn');
// from
const lovecalculator = document.querySelector(".love-calculator");
//  result container
const resultcontainer = document.querySelector(".result-container");
// resultName
const resultame = document.querySelector(".resultName");
// ResulMassage
const resulmassage = document.querySelector(".ResulMassage");
// persent box
const persentBox = document.querySelector(".persent");
//  persentPrant
const persentPranT = document.querySelector(".persentPrant");


const loveQuaryBye = [
  {
    range: [0, 10],
    quote: "তোমাকে আমি 💯% ভালোবাসি ❤️ কারণ তুমি ছাড়া জীবন অসম্পূর্ণ মনে হয়!",
  },
  {
    range: [10, 20],
    quote:
      "তোমার হাসি আমার হৃদয়ের ৯০% জায়গা দখল করে আছে 😍 বাকি ১০% তোমার কথা ভাবি! 💭",
  },
  {
    range: [20, 30],
    quote:
      "প্রতিদিন ১% করে তোমার প্রতি ভালোবাসা বাড়ছে ❤️ এখন তা হিসাবের বাইরে চলে গেছে 📈",
  },
  {
    range: [30, 40],
    quote:
      "তুমি আমার চিন্তার ৭৫%, স্বপ্নের ২০%, আর বাকি ৫% — নিঃশ্বাসেও তুমি 💖",
  },
  {
    range: [40, 50],
    quote:
      "তোমাকে ভালোবাসার অনুভূতি = ৯৯.৯% নিখুঁত ❤️ আর বাকি ০.১% শুধু তোমার নামটি শোনার অপেক্ষা 🎧",
  },
  {
    range: [50, 60],
    quote:
      "তুমি আমার দিনের ৮০%, রাতের ১৫%, আর স্বপ্নের ৫% 💭 মানে তুমি আমার পুরো জগত 🌍❤️",
  },
  {
    range: [60, 70],
    quote:
      "তোমার ভালোবাসা আমার হৃদয় ১০০% দখল করে ফেলেছে 🥰 এখন আমি শুধুই তোমার 💌",
  },
  {
    range: [70, 80],
    quote:
      "তোমাকে ৯৮% সময় ভালোবাসি, আর ২% সময় তোমার মুখ দেখে অভিভূত হয়ে থাকি 😶‍🌫️❤️",
  },
  {
    range: [80, 90],
    quote:
      " তুমি আমার জীবনের ১০০% শান্তি 🕊️, ভালোবাসা ❤️ আর সাহস 💪 — তুমি মানেই আমি।",
  },
  {
    range: [90, 100],
    quote:
      "তোমাকে ভালোবাসা কোনো হিসেবের মধ্যে পড়ে না — তবে ধরো ❤️ ১০০০% ভালোবাসি তোমায় 😘",
  },
];

click.addEventListener("click", (e) => {
  e.preventDefault();

  const inp1 = document.getElementById("input1");
  const inp2 = document.getElementById("input2");

  if (inp1.value && inp2.value) {
    const lovesor = Math.floor(Math.random() * 100) + 1;
    persentBox.innerText = `${lovesor}%`;

    lovecalculator.style.display = "none";

    resultcontainer.style.display = "block";
    resultcontainer.style.display = "width:100% ;   box-sizing:border-box; heigth:auto ";

    persentPranT.style.background = ` conic-gradient(#fb93bb  0% ${lovesor}%, #755d5ddc  ${lovesor}% 100%)`;

    resultame.innerText = `${inp1.value} & ${inp2.value}`;

    const expectedQuotefind = loveQuaryBye.find(
      (elem) => lovesor >= elem.range[0] && lovesor <= elem.range[1]
    );
     
    resulmassage.innerText = expectedQuotefind.quote;
    // console.log(expectedQuotefind);
  } else {
    alert("name not found");
  }
});

abarcheackbtn.addEventListener('click', () => {
    window.location.reload();
})
