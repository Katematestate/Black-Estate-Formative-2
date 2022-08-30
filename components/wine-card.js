// Very basic example of a native web component that represents the wine cards
// this gives you reusable code without all the boilerplate
(function () {
  class WineCard extends HTMLElement {
    constructor() {
      super();
      this.src = "";
      this.name = "";
      this.price = "";

      this.attachShadow({ mode: "open" });

      this.wrapper = document.createElement("div");

      this.shadowRoot.append(this.wrapper);
      this.render();
    }

    static get observedAttributes() {
      return ["src", "name", "price"];
    }

    attributeChangedCallback(prop, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[prop] = newValue;
      this.render();
    }

    render() {
      this.wrapper.innerHTML = `
        <div>
            <img
              src="${this.src}"
              alt="wine-bottle"
            />
            <img src="./resources/pink wine icon.svg" alt="wine-icon" />
        </div>
        <h3>${this.name}</h3>
        <h3>${this.price}</h3>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
            culpa?
        </p>
        <a href="#">Explore this Wine</a>
        <div>
            <input type="number" value="1" />
            <button>Add to Cart</button>
        </div>
        `;
    }
  }
  customElements.define("wine-card", WineCard);
})();
