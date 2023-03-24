// 画像のファイル名の配列
const imageNames = [
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpeg",
    "image4.jpeg",
    "image5.jpeg",
    "image6.jpeg",
    "image7.jpeg",
    "image8.jpeg",
    "image9.jpeg",
    "image10.jpeg",
    "image11.jpeg",
    "image12.jpeg",
    "image13.jpeg",
    "image14.jpeg",
    "image15.jpeg",
    "image16.jpeg",
    "image17.jpeg",
    "image18.jpeg",
    "image19.jpeg",
    "image20.jpeg",
    "image21.jpeg",
    "image22.jpeg",
    "image23.jpeg",
    "image24.jpeg",
    "image25.jpeg"
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
    
    