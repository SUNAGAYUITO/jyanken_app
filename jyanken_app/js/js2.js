$("#buttonA").on("click", function () {
  const name = $("#text").val();

  const hello = [
    "おはようございます！",
    "こんにちは、初めまして！",
    "こんばんは！",
  ];
  const like = [
    "野球",
    "サッカー",
    "バドミントン",
    "水球",
    "Youtube",
    "スイカ割り",
    "サイクリング",
    "ランニング",
    "1人で散歩",
    "1人旅"
  ];
  const hart = [
    "自身はない",
    "不安だ",
    "やる気はある",
    "みんなと頑張る",
  ];
  const responses = [
    "友達100人作ること",
    "プログラマーになること",
    "コードをたくさん覚ること",
    "起業すること",
    "アプリを開発すること",
    "有名になること",
  ]

  const helloMessage = hello[Math.floor(Math.random() * hello.length)];
  const likeMessage = like[Math.floor(Math.random() * like.length)];
  const hartMessage = hart[Math.floor(Math.random() * hart.length)];
  const randomMessage = responses[Math.floor(Math.random() * responses.length)];


  
  $("#name").html(
    `<p><strong>${helloMessage}</strong>  <strong>${name}</strong> と申します！</p>
     <p>好きなことは<strong>${likeMessage}</strong>で、詳しい人がいればお話ししたいです！！</p>
     <p>プログラミングに関して<strong>${hartMessage}</strong>ですけど頑張ります！</p>
     <p>僕の目標は<strong>「${randomMessage}」</strong>です！！よろしくお願いします！！</p>`
  );
});