class Draw {
  constructor() {
    this.options = ["seven.png", "watermelone.png", "apple.png"];
    let _result = this.drawResult();
    this.getDrawResult = () => _result;
  }
  drawResult() {
    let images = [];
    for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length);
      const image = this.options[index];
      images.push(image);
    }
    return images;
  }
}
