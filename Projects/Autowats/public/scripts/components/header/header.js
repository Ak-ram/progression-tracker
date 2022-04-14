// here we will not attach shadow
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="navbar z-2">
           <div class="container p-1 m-auto">

               <img class="logo" src="./svg/logo.svg" alt="logo" />
               
               <nav>
                 <a class='clr-dull fs-3 capitalize pointer' href="#">features</a>
                 <a class='clr-dull fs-3 capitalize pointer' href="#">services</a>
                 <a class='clr-dull fs-3 capitalize pointer' href="#">about</a>
                 <a class='clr-dull fs-3 capitalize pointer' href="#">pricing</a>
                 <a class='clr-dull fs-3 capitalize pointer' href="#">contact us</a>
               </nav>

               <form class="gap-10" action="" method="post">
                 <label aria-label="Language">
                   <img class='lang-icon' src="./svg/lang.svg" alt="" />
                   <select name="lang" id="lang" class="pointer fs-3">
                     <option value="Turkish">Turkish</option>
                     <option value="Arabic">Arabic</option>
                     <option value="English">English</option>
                   </select>
                 </label>
                 <button type="button" class="capitalize fs-3 login radius-4 bg-white clr-shadowCyan pointer">log in</button>
                 <button type="button" class="capitalize fs-3 signup radius-4 bg-shadowCyan pointer">sign up</button>
               </form>
               
             </div>
           </header>
      `;
  }
}

customElements.define("header-component", Header);
