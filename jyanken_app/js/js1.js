$("#buttonA").on("click", function () {
  const name = $("#text").val();

  const hello = [
    "おはよう！",
    "こんちわーー!",
    "ぐっっとアフタヌーン！",
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
    "自身しかない",
    "やる気はある",
    "みんなと頑張る",
    "お腹よく空く",
  ];
  const responses = [
    "今日は早寝すると吉。",
    "今すぐ外を見てごらん。何かあるかも。",
    "その手は…神の怒りを買ったぞ。",
    "笑う門には福来る！",
    "カレーを食べると運気アップ。",
    "深呼吸して、もう一度押してみよう。",
    "あなたは選ばれし者かもしれない。",
    "風が語りかけています…おいしいと。",
    "やり直したくなる気持ち、わかるよ。",
    "とりあえず水を飲もう。"
  ];

  const helloMessage = hello[Math.floor(Math.random() * hello.length)];
  const likeMessage = like[Math.floor(Math.random() * like.length)];
  const hartMessage = hart[Math.floor(Math.random() * hart.length)];
  const randomMessage = responses[Math.floor(Math.random() * responses.length)];


  
  $("#name").html(
    `<p><strong>${helloMessage}</strong>  <strong>${name}</strong> だよ〜!!</p>
     <p>ポレの好きなことは<strong>${likeMessage}</strong>で、あっれはたまらないね！！ハマってしまうよ！</p>
     <p>プログラミングはね<strong>${hartMessage}</strong>けどポレ頑張ってみるよ！よろしゅう頼むわ！</p>
     <p>僕のモットー<strong>「${randomMessage}」</strong>を胸に今日というポレ様が輝けるよう強く生きよう！</p>`
  );
});
