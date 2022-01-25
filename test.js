let canvas = document.getElementById('canvas');
let height = canvas.clientHeight;
let width = canvas.clientWidth;
const svgns = "http://www.w3.org/2000/svg";

for (let i = 0; i < width; i+=20) {
    for (let j = 0; j < height; j+=20) {
        let pth = document.createElementNS(svgns, 'path');
        pth.setAttribute('d', `m${i} ${j}, h20 v20 h-20 v0`)
        pth.setAttribute('fill', 'transparent');
        pth.setAttribute('stroke', 'black');
        pth.setAttribute('stroke-width', '.1');
        canvas.append(pth);
    }
    
}
let child = canvas.children;

for (const key in child) {
    if (Object.hasOwnProperty.call(child, key)) {
        const element = child[key];
        element.onclick = ()=>{
            element.setAttribute('fill', 'red');
        }
    }
}
