// Create elements
let header = document.createElement("header");
let nav = document.createElement("nav");
let link = document.createElement("a");
let ul = document.createElement("ul");
let li = document.createElement("li");
let div = document.createElement("div");
let footer = document.createElement("footer");

// Styles

// header
let h2 = document.createElement("h2");
h2.textContent = "Logo";
h2.style.cssText = "padding-left: 5px;";
link.setAttribute("href", "#");
link.textContent = "Home About Contact-Us ";
// styles header
header.style.cssText = "margin: 0; padding: 1px; width: 100%;";

// nav styles
nav.style.cssText = "width: 100%; background-color: green; color: white; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;";
ul.style.cssText = "list-style: none; margin: 0; padding: 0;"; // Added padding and margin reset
link.style.cssText = "text-decoration: none; color: white; padding-right: 5px;";

// Create and style 15 product divs
for (let i = 1; i <= 15; i++) {
    let div1 = document.createElement("div");
    div1.className = "product";
    div1.style.cssText = "background-color: white; text-align: center; width: 90%; margin: 10px;"; // Adjust width and margin

    let span = document.createElement("span");
    span.textContent = i;
    let p = document.createElement("p");
    p.textContent = "Product";

    div1.appendChild(span);
    div1.appendChild(p);
    div.appendChild(div1);
}

div.className = "content";
div.style.cssText = "background-color: green; width: 100%; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 10px;"; // Adjust grid styling

// footer
footer.className = "footer";
footer.textContent = "@copyRight BY : Ahmed Samir";
// styles footer
footer.style.cssText = "background-color: green; width: 100%; text-align: center; margin-top: 10px; padding: 2px; color: white;";

// Append elements
li.appendChild(link);
ul.appendChild(li);
nav.appendChild(h2);
nav.appendChild(ul);
header.appendChild(nav);
document.body.appendChild(header);
document.body.appendChild(div);
document.body.appendChild(footer);
