

window.addEventListener("mouseover", () => {
  let hint = document.querySelector(".hint"),
    ele = document.querySelectorAll(".showHint");
  for (let i = 0; i < ele.length; i++) {
    ele[i].onmousemove = (e) => {
      hint.classList.remove("d-none");
      hint.style.left = `${e.pageX - (hint.getBoundingClientRect().width / 2)}px`;
      hint.style.top = `${e.pageY + 20}px`;
      hint.children[0].textContent = e.currentTarget.getAttribute("data-name");
      hint.children[1].textContent = e.currentTarget.getAttribute("data-word");
      hint.children[2].textContent = e.currentTarget.getAttribute("data-stars");
    };
    ele[i].onmouseleave = () => {
      hint.classList.add("d-none");
    };
  }
});

window.addEventListener('scroll',()=>{
 let feats = document.getElementsByClassName('feat');
 if (window.scrollY >=150){
 for(let i=0; i<feats.length; i++){
   feats[i].classList.add('melt-enter-active')
 }
 }

})



class Testimonials extends HTMLElement {
    constructor() {
      super();
    }



    connectedCallback() {
      this.innerHTML = `
      <section class="testemonal">
        <header>
          <h2 class='h1 text-center'>Testimonials</h2>
          <p class='text-center text-dark text-paragraph'>Read hear What our clients around the world say about us and our service.</p>
        </header>

        <div class="map">
        <svg class='image' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 624 319">
          <image class='custom-cursor' width="624" height="319" href="https://i.ibb.co/59YY1xN/testemonail.png"></image> 
            <rect data-name='David' data-stars='⭐⭐⭐⭐' data-word="This service helped me with my bussiness." class="showHint custom-cursor" x="83" y="57" fill="#fff" opacity="0" width="38" height="38"></rect>
            <rect data-name='Akram' data-stars='⭐⭐⭐⭐' data-word="This is another task" class="custom-cursor showHint" x="275" y="121" fill="#fff" opacity="0" width="38" height="38"></rect>
            <rect data-name='Sayed' data-stars='⭐⭐' data-word="Don't turn and keep going" class="custom-cursor showHint" x="127" y="187" fill="#fff" opacity="0" width="38" height="38"></rect>
            <rect data-name='Mohamed' data-stars='⭐⭐⭐⭐⭐' data-word="Asked Allah for help, and don't disappoined" class="custom-cursor showHint" x="363" y="49" fill="#fff" opacity="0" width="38" height="38"></rect>
            <rect data-name='Ali' data-stars='⭐⭐⭐' data-word="I have no thing else to write" class="custom-cursor showHint" x="487" y="108" fill="#fff" opacity="0" width="38" height="38"></rect>
            <rect data-name='Salah' data-stars='⭐⭐⭐⭐' data-word="I still have no thing" class="custom-cursor showHint" x="534" y="230" fill="#fff" opacity="0" width="38" height="38"></rect>        </svg>
        </div>
      
      </section>
        `;
    }
  }
  
  customElements.define("testimonials-component", Testimonials);
  