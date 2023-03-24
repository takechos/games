// 画像のファイル名の配列
const imageNames = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    "image7.png",
    "image8.png",
    "image9.png",
    "image10.png",
    "image11.png",
    "image12.png",
    "image13.png",
    "image14.png",
    "image15.png",
    "image16.png",
    "image17.png",
    "image18.png",
    "image19.png",
    "image20.png",
    "image21.png",
    "image22.png",
    "image23.png",
    "image24.png",
    "image25.png"
  ];
  
  const imageArea = document.getElementById("image-area");
  const displayButton = document.getElementById("display-button");
  const resetButton = document.getElementById("reset-button");
  const imageList = document.getElementById("image-list");
  
  let displayedImageNames = [];
  
  displayButton.addEventListener("click", displayImage);
  resetButton.addEventListener("click", resetImageList);
  
  function displayImage() {
    // ランダムに画像を選択
    const imageName = imageNames[Math.floor(Math.random() * imageNames.length)];
    // 画像を表示
    imageArea.innerHTML = `<img src="./images/${imageName}">`;
    // 画像を既に表示した画像一覧に追加
    displayedImageNames.push(imageName);
    const imageListItem = document.createElement("li");
    imageListItem.innerHTML = `<img src="./images/${imageName}">`;
    imageList.appendChild(imageListItem);
  }
  
  function resetImageList() {
    // 既に表示した画像一覧をクリア
    displayedImageNames = [];
    imageList.innerHTML = "";
}
    
    