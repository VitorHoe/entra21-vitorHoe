let links = document.querySelectorAll('ul a');

for (let link of links) {
    let href = link.getAttribute("href")

    if (!href.includes("://")) continue
    if (href.startsWith("http://internal.com"))

    link.style.color = 'orange'
}
