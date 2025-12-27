
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
  { range: [0, 5], quote: "আমাদের ভালোবাসা সবে শুরু, এই ছোট্ট বীজটি একদিন বিশাল মহীরুহ হবে! 🌱❤️" },
  { range: [6, 10], quote: "তোমাকে আমি ১০০% ভালোবাসি ❤️ কারণ তুমি ছাড়া জীবন অসম্পূর্ণ মনে হয়!" },
  { range: [11, 15], quote: "তোমার সাথে কাটানো প্রতিটা মুহূর্ত আমার কাছে স্পেশাল। 💖" },
  { range: [16, 20], quote: "তোমার হাসি আমার হৃদয়ের ৯০% জায়গা দখল করে আছে 😍 বাকি ১০% তোমার কথা ভাবি!" },
  { range: [21, 25], quote: "তুমি আমার জীবনের সেই রঙ, যা আমার ধূসর পৃথিবীকে রঙিন করে দিয়েছে। 🌈" },
  { range: [26, 30], quote: "প্রতিদিন ১% করে তোমার প্রতি ভালোবাসা বাড়ছে ❤️ এখন তা হিসাবের বাইরে!" },
  { range: [31, 35], quote: "তোমার চোখে তাকালে আমি আমার পুরো পৃথিবী দেখতে পাই। 👀✨" },
  { range: [36, 40], quote: "তুমি আমার চিন্তার ৭৫%, স্বপ্নের ২০%, আর বাকি ৫% — নিঃশ্বাসেও তুমি 💖" },
  { range: [41, 45], quote: "পৃথিবীর সব সুখ একদিকে, আর তোমার পাশে থাকা একদিকে। 🥰" },
  { range: [46, 50], quote: "তোমাকে ভালোবাসার অনুভূতি = ৯৯.৯% নিখুঁত ❤️ বাকি ০.১% শুধু তোমার নামের অপেক্ষা।" },
  { range: [51, 55], quote: "হাজার মানুষের ভিড়েও আমার চোখ শুধু তোমাকেই খুঁজে বেড়ায়। 🔍❤️" },
  { range: [56, 60], quote: "তুমি আমার দিনের ৮০%, রাতের ১৫%, আর স্বপ্নের ৫% 💭 মানে তুমি আমার পুরো জগত!" },
  { range: [61, 65], quote: "তোমার সাথে কথা না বললে দিনটা কেমন যেন অপূর্ণ থেকে যায়। 📞💌" },
  { range: [66, 70], quote: "তোমার ভালোবাসা আমার হৃদয় ১০০% দখল করে ফেলেছে 🥰 এখন আমি শুধুই তোমার!" },
  { range: [71, 75], quote: "আমার হৃদস্পন্দন প্রতিবার তোমার নাম ধরে ডাকে, তুমি কি শুনতে পাও? ✨💓" },
  { range: [76, 80], quote: "তোমাকে ৯৮% সময় ভালোবাসি, আর ২% সময় তোমার মুখ দেখে অভিভূত হয়ে থাকি 😶‍🌫️" },
  { range: [81, 85], quote: "আমার জীবনের শ্রেষ্ঠ সিদ্ধান্ত ছিল তোমাকে ভালোবাসা। 💍🌹" },
  { range: [86, 90], quote: "তুমি আমার জীবনের ১০০% শান্তি 🕊️, ভালোবাসা ❤️ আর সাহস 💪 — তুমি মানেই আমি।" },
  { range: [91, 95], quote: "তোমার জন্য আমার ভালোবাসা শেষ হওয়ার নয়, এটি অন্তহীন। ♾️❤️" },
  { range: [96, 100], quote: "তোমাকে ভালোবাসা কোনো হিসেবের মধ্যে পড়ে না — ধরো ১০০০% ভালোবাসি তোমায়! 😘" }
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



 
//  localstorage use kore same name er jonno same result dewa 


click.addEventListener("click", (e) => {
    e.preventDefault();

    const inp1 = document.getElementById("input1").value.trim().toLowerCase();
    const inp2 = document.getElementById("input2").value.trim().toLowerCase();

    if (inp1 && inp2) {
        // দুইজনের নাম মিলিয়ে একটি ইউনিক আইডি তৈরি (যাতে উল্টোপাল্টা নাম দিলেও একই রেজাল্ট আসে)
        const combinedKey = [inp1, inp2].sort().join("-");
        
        let lovesor;

        // চেক করা হচ্ছে এই নামে আগে রেজাল্ট বের করা হয়েছে কি না
        if (localStorage.getItem(combinedKey)) {
            lovesor = parseInt(localStorage.getItem(combinedKey));
        } else {
            lovesor = Math.floor(Math.random() * 100) + 1;
            localStorage.setItem(combinedKey, lovesor); // নতুন রেজাল্ট সেভ করে রাখা
        }

        // বাকি কাজ আগের মতোই
        displayResult(inp1, inp2, lovesor);
    } else {
        alert("Please enter both names!");
    }
});

//  reload dile jen data na jai 
// রেজাল্ট দেখানোর ফাংশন (যাতে বারবার কল করা যায়)
function displayResult(name1, name2, score) {
    persentBox.innerText = `${score}%`;
    lovecalculator.style.display = "none";
    resultcontainer.style.display = "block";
    
    // CSS ফিক্স: style.display তে উইথ সেট হয় না, style.cssText ব্যবহার করুন
    resultcontainer.style.cssText = "display:block; width:100%; box-sizing:border-box; height:auto;";
    
    persentPranT.style.background = `conic-gradient(#fb93bb 0% ${score}%, #755d5ddc ${score}% 100%)`;
    resultame.innerText = `${name1} & ${name2}`;

    const expectedQuotefind = loveQuaryBye.find(
        (elem) => score >= elem.range[0] && score <= elem.range[1]
    );
    resulmassage.innerText = expectedQuotefind ? expectedQuotefind.quote : "Love is in the air!";
    
    // বর্তমান রেজাল্ট সেভ রাখা যাতে রিলোড দিলে না হারায়
    localStorage.setItem("lastName1", name1);
    localStorage.setItem("lastName2", name2);
    localStorage.setItem("lastScore", score);
}

// পেজ লোড হওয়ার সময় চেক করা
window.onload = () => {
    const s1 = localStorage.getItem("lastName1");
    const s2 = localStorage.getItem("lastName2");
    const sc = localStorage.getItem("lastScore");

    if (s1 && s2 && sc) {
        displayResult(s1, s2, parseInt(sc));
    }
};

// আবার চেক করার বাটন
abarcheackbtn.addEventListener('click', () => {
    // আগের সব শেষ রেজাল্ট মুছে ফেলা যাতে নতুন করে ইনপুট দেওয়া যায়
    localStorage.removeItem("lastName1");
    localStorage.removeItem("lastName2");
    localStorage.removeItem("lastScore");
    window.location.reload();
});