class creEle {
  constructor(tag = "div") {
    this.el = document.createElement(tag);
  }
  setText(context = "") {
    const textNode = document.createTextNode(context);
    if (context === "") {
      this.el.innerText = "";
      return;
    }
    this.el.append(textNode);
  }
  setAttribute(attribute = {}) {
    if (typeof attribute !== "object") return;
    for (let attr in attribute) {
      if (attr === "style") {
        this.el.style.cssText += attribute[attr];
      } else {
        this.el.setAttribute(attr, attribute[attr]);
      }
    }
  }
}

class SweetAlert {
  constructor() {
    this.sw = new creEle("div");
    this.sw.setAttribute({ class: "sw_bg" });
    this.sw_mid = new creEle("div");
    this.sw_mid.setAttribute({ class: "sw_mid" });
    this.sw.el.appendChild(this.sw_mid.el);
    this.sw_content = new creEle("div");
    this.sw_content.setAttribute({ class: "sw_content" });
    this.sw_mid.el.appendChild(this.sw_content.el);
    this.p = new creEle("p");
    this.btn = new creEle("button");
    this.btn.setText("ok");
    this.sw_content.el.appendChild(this.p.el);
    this.sw_content.el.appendChild(this.btn.el);

    document.querySelector("body").appendChild(this.sw.el);
  }

  open(text) {
    this.sw.el.classList.add("open");
    this.p.setText(text);

    return new Promise((resolve, reject) => {
      this.btn.el.addEventListener("click", () => {
        this.close();
        resolve();
      });
    });
  }

  close() {
    this.sw.el.classList.remove("open");
    this.p.setText("");
  }
}

export default SweetAlert;
