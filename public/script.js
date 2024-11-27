import carnets from "./carnet.js";

// // Carnets

carnets.forEach(carnets => {
    const carnet = document.createRange().createContextualFragment(`
        <div class="carnet ${carnets.estado}">
                    <div class="carnet-img">
                           <div class="galeria">
                                <a href="${carnets.img}" data-fancybox="carnet" data-caption="Este empleado esta: ${carnets.estado}">
                                    <img src="${carnets.img}" alt="carnet">
                                </a>
                            </div>
                    </div>
                    <div class="carnet-info">
                        <p class="info">${carnets.estado}</p>
                    </div>
        </div>
    `);
    const carnets_grind = document.querySelector(".carnets");
    carnets_grind.append(carnet);
})

// Filtro

const filtro = document.querySelector("#filtro");
filtro.addEventListener("change", () => {    
    if (filtro.value === "todos") {
        const carnets_grind = document.querySelectorAll(".carnet");
        carnets_grind.forEach(carnet => {
            carnet.classList.remove("novisible");
        })
    } else if (filtro.value === "activos") {
        const carnets_grind = document.querySelectorAll(".carnet");
        carnets_grind.forEach(carnet => {
            if (carnet.classList.contains("INACTIVO")) {
                carnet.classList.add("novisible");
            } else {
                carnet.classList.remove("novisible");
            }
        })
    } else if (filtro.value === "inactivos") {
        const carnets_grind = document.querySelectorAll(".carnet");
        carnets_grind.forEach(carnet => {
            if (carnet.classList.contains("INACTIVO")) {
                carnet.classList.remove("novisible");
            } else {
                carnet.classList.add("novisible");
            }
        })
    }
})


// QR
// DESCARGAR QRS
// const qrs = [
//     "https://sadicu.netlify.app/#carnet-1",
//     "https://sadicu.netlify.app/#carnet-2",
//     "https://sadicu.netlify.app/#carnet-3",
//     "https://sadicu.netlify.app/#carnet-4",
//     "https://sadicu.netlify.app/#carnet-5",
// ] 

// qrs.forEach((url, index) => {
//     const qrContainer = document.createElement('div');
//     qrContainer.classList.add('qr');
//     document.querySelector('.qrs').appendChild(qrContainer);

//     // Genera el QR
//     const qrCode = new QRCode(qrContainer, {
//         text: url,
//         width: 100,
//         height: 100,
//         correctLevel: QRCode.CorrectLevel.H,
//     });

//     // Esperar a que el QR se genere y luego descargar
//     setTimeout(() => {
//         const qrCanvas = qrContainer.querySelector('canvas');
//         if (qrCanvas) {
//             const dataURL = qrCanvas.toDataURL("image/png");
//             downloadQRCode(dataURL, `qr_code_${index + 1}.png`);
//         }
//     }, 500); // Ajusta el tiempo según sea necesario
// });

// function downloadQRCode(dataURL, filename) {
//     const link = document.createElement('a');
//     link.href = dataURL;
//     link.download = filename;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }

// qrs.forEach((qr, index) => {
//     const qrmuesta = document.querySelector(".qr");
//     new QRCode(qrmuesta, {
//         text: qr,
//         width: 100,
//         height: 100,
//         callback: function (qr) {
//             const qrCanvas = qrContainer.querySelector("canvas")
//             if (qrCanvas) {
//                 const dataURL = qrCanvas.toDataURL("image/png")
//                 downloadQR(dataURL, "qr.png")
//             }
//         }
//     });
// });