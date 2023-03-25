// 画像のファイル名の配列
const imageNames = [
  'phonto 92.JPG',
  'phonto 93.JPG',
  'phonto 94.JPG',
  'phonto 95.JPG',
  'phonto 96.JPG',
  'phonto 97.JPG',
  'phonto 98.JPG',
  'phonto 99.JPG',
  'phonto 100.JPG',
  'phonto 101.JPG',
  'phonto 102.JPG',
  'phonto 103.JPG',
  'phonto 104.JPG',
  'phonto 105.JPG',
  'phonto 106.JPG',
  'phonto 107.JPG',
  'phonto 108.JPG',
  'phonto 109.JPG',
  'phonto 110.JPG',
  'phonto 111.JPG',
  'phonto 112.JPG',
  'phonto 113.JPG',
  'phonto 114.JPG',
  'phonto 115.JPG',
  'phonto 116.JPG',
  'phonto 117.JPG',
  'phonto 118.JPG',
  'phonto 119.JPG',
  'phonto 120.JPG',
  'phonto 121.JPG',
  'phonto 122.JPG',
  'phonto 123.JPG',
  'phonto 124.JPG',
  'phonto 125.JPG',
  'phonto 126.JPG',
  'phonto 127.JPG',
  'phonto 128.JPG',
  'phonto 129.JPG',
  'phonto 130.JPG',
  'phonto 131.JPG',
  'phonto 132.JPG',
  'phonto 133.JPG',
  'phonto 134.JPG',
  'phonto 135.JPG',
  'phonto 136.JPG',
  'phonto 137.JPG',
  'phonto 138.JPG',
  'phonto 139.JPG',
  'phonto 140.JPG',
  'phonto 141.JPG',
  'phonto 142.JPG',
  'phonto 143.JPG',
  'phonto 144.JPG',
  'phonto 145.JPG',
  'phonto 146.JPG',
  'phonto 147.JPG',
  'phonto 148.JPG',
  'phonto 149.JPG',
  'phonto 150.JPG',
  'phonto 151.JPG',
  'phonto 152.JPG',
  'phonto 153.JPG',
  'phonto 154.JPG',
  'phonto 155.JPG',
  'phonto 156.JPG',
  'phonto 157.JPG',
  'phonto 158.JPG',
  'phonto 159.JPG',
  'phonto 160.JPG',
  'phonto 161.JPG',
  'phonto 162.JPG',
  'phonto 163.JPG',
  'phonto 164.JPG',
  'phonto 165.JPG',
  'phonto 166.JPG',
  'phonto 167.JPG',
  'phonto 168.JPG',
  'phonto 169.JPG',
  'phonto 170.JPG',
  'phonto 171.JPG',
  'phonto 172.JPG',
  'phonto 173.JPG',
  'phonto 174.JPG',
  'phonto 175.JPG',
  'phonto 176.JPG'
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
    if(displayedImageNames.length <= 9 && !displayedImageNames.includes(imageName)){
      displayedImageNames.push(imageName);
      const imageListItem = document.createElement("li");
      imageListItem.innerHTML = `<img src="./images/${imageName}">`;
      imageList.appendChild(imageListItem);
    }
  }
  
  function resetImageList() {
    // 既に表示した画像一覧をクリア
    displayedImageNames = [];
    imageList.innerHTML = "";
}
    
    