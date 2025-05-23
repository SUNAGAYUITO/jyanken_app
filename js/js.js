$(document).ready(function () {

  const cards = [
    {
      name: "芸人風",
      image: "./img/geinin.png",
      information: "関西風や、関東風、さまざまな場面で自己紹介する場面がある。頑張って乗り切ってみよう！",
      link: "gei.html"
    },
    {
      name: "新入生風",
      image: "./img/sinnnyu.jpg",
      information: "新しい学校生活のスタート！自己紹介で仲間を作ろう！",
      link: "student.html"
    }
  ];

  $("#sentaku").on("click", function () {
    const card = cards[Math.floor(Math.random() * cards.length)];

    $('#image').hide().attr('src', card.image).fadeIn(1000);
    $('#name').hide().text(card.name).fadeIn(1000);
    $('#information').hide().text(card.information).fadeIn(1000);

    $('#nextLink').attr('href', card.link);  
    $('#inf').removeClass('hidden');
  });

});
