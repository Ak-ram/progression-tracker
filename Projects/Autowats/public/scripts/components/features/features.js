// here we will not attach shadow
class Feature extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
      <div class="feat feat1 bg-white">
      <img src="./svg/feat1.svg" alt="" class="icon" />
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod.
      </p>
    </div>
        `;
    }
  }
  
  customElements.define("feature-component", Feature);
  