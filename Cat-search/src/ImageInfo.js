class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);
    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;
      console.log(this.data.image);
      this.$imageInfo.innerHTML = `
          <div class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <div class="close">x</div>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </div>
          </div>`;
      this.$imageInfo.style.display = "block";
      const closeBtn = this.$imageInfo.querySelector(".close");
      const modal = this.$imageInfo.querySelector(".content-wrapper");

      this.$imageInfo.addEventListener("click", (e) => {
        if (e.target === this.$imageInfo || e.target === closeBtn) {
          this.$imageInfo.style.display = "none";
          this.data.visible = false;
        }
      });

      window.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          this.$imageInfo.style.display = "none";
          this.data.visible = false;
        }
      });
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
