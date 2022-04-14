// Layer Sliding effect

let $removeCls = (selector, cls) => {
  return Object.values(document.querySelectorAll(selector)).map((ele) =>
    ele.classList.remove(cls)
  );
};


slide = (indicator) => {
  let layers = document.querySelectorAll("[data-index]"),
    currentLayer =
      layers[[...indicator.parentElement.children].indexOf(indicator)],
    phoneScreen = indicator.parentElement.previousElementSibling,
    layerContent = indicator.parentElement.nextElementSibling;
  $removeCls("[data-index]", "flash");
  $removeCls(".phone-screen", "melt-enter-active");
  $removeCls(".indicator", "active");
  $removeCls(".layer-content", "spiral-enter-active");
  currentLayer.classList.add("flash");
  indicator.classList.add("active");
  phoneScreen.classList.add("melt-enter-active");
  layerContent.classList.add("spiral-enter-active");

};

// Carousel layers

class Layer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    layers_content.map((layer) => {
      this.innerHTML += `
        <section class="carousel_container" data-index=${layer.id}>
          <section class="layer">
            <img src="./svg/phone.svg" alt="" class="phone-layer" />
            <img src=${layer.phoneScreen} alt='' class='phone-screen'/>
            <div class="indexes showGuide">
              <span class='indicator bg-white' onmouseenter="slide(this)"></span>
              <span class='indicator bg-white' onmouseover="slide(this)"></span>
              <span class='indicator bg-white' onmouseover="slide(this)"></span>
              <span class='indicator bg-white' onmouseover="slide(this)"></span>
              <span class='indicator bg-white' onmouseover="slide(this)"></span>
            </div>
            <section class="layer-content p-3">
              <h2>
                ${layer.header}
              </h2>
              <p class="mt-10">
              ${layer.content}
              </p>
            </section>
          </section>
      </section> 
          `;
    });
  }
}

customElements.define("layer-component", Layer);
