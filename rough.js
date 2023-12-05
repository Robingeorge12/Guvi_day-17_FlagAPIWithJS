
let mainFunction = async () => {
  try {
    let url = `https://restcountries.com/v3.1/all`;
    let collection = await fetch(url);
    let data = await collection.json();
    // console.log(data)
    return data;

  } catch (er) {
    console.log(er);
  }

};
//  mainFunction()

let display = async () => {
  let list = await mainFunction();
  //   console.log(list);
  append(list);
};

display();

const append = (data) => {
  document.querySelector("#cards").innerHTML = "";

  data.forEach((el, i) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card a1");

    let card2 = document.createElement("div");
    card2.setAttribute("class", "col-lg-4 col-md-6 mb-4 cardDiv");

    let img = document.createElement("img");
    img.setAttribute("src", el.flags.svg);
    img.setAttribute("class", "img-thumbnail img");

    let div2 = document.createElement("div");
    div2.setAttribute(
      "class",
      "text-center card-body align-items-start justify-content-center"
    );

    // div2 append fist
 
    let h5 = document.createElement("h5");
    h5.setAttribute(
      "class",
      "row align-items-start justify-content-center p-4 nameDiv"
    );
    h5.textContent = el.name.common;

    let p = document.createElement("p");
    p.textContent = el.capital;

    let rg = document.createElement("p");
    rg.textContent = el.region;

    let sub = document.createElement("p");
    sub.textContent = el.cca2;

    let btn = document.createElement("button");
    btn.innerText = "Click For Weather";
    btn.setAttribute("class", "btn btn-primary");
    btn.addEventListener("click", function () {
      GeoLoc(el, i);
    });

   
    div2.append(p, rg, sub, btn);
    card.append(h5, img, div2);
    card2.append(card);
    document.querySelector("#cards").append(card2);
  });
};

























// const weatherDisplay = async (data, el) => {

//   document.querySelector("#modal").innerHTML = "";

//   data.forEach((data) => {
//     let modalDiv = document.createElement("div");
//     modalDiv.setAttribute("class", "modal modal-fullscreen-sm-down mdl");

//     let mdDialog = document.createElement("div");
//     mdDialog.setAttribute("class","modal-dialog")

//     let mdContent = document.createElement("div");
//     mdContent.setAttribute("class","modal-content")

//     let mdHeader = document.createElement("div");
//     mdHeader.setAttribute("class","modal-header")

//     let mdTitle = document.createElement("p");
//     mdTitle.setAttribute("class","modal-title")
//     mdTitle.innerText = "Weather Report"

//     let closeIcon = document.createElement("button")
//     closeIcon.setAttribute("class","close")
//     closeIcon.setAttribute("aria-label","Close")
//     closeIcon.setAttribute("data-dismiss","modal")
//     closeIcon.textContent = "X"
//     // mdHeader.append(mdTitle,closeIcon)
//     // mdContent.append(mdHeader)
//     // mdDialog.append(mdContent) 


//     let sp = document.createElement("span")
//     sp.setAttribute("aria-hidden","true")
//     // sp.setAttribute("aria-label","Close")


//     let card = document.createElement("div");
//     card.setAttribute("class", "card");

//     let cardBody = document.createElement("div");
//     card.setAttribute("class", "card-body");

//     let img = document.createElement("img");
//     img.setAttribute("src", el.flags.svg);
//     img.setAttribute("class", "card-img-top");

//     let h5 = document.createElement("h5");
//     h5.setAttribute(
//       "class",
//       "row card-header align-items-start justify-content-center p-4"
//     );
//     h5.textContent = el.name.common;

//     let rn = document.createElement("p");
//     rn.setAttribute("class", "card-title");
//     rn.textContent = data.description;

//     let main = document.createElement("p");
//     main.setAttribute("class", "card-title");
//     main.textContent = data.description;

   
//     let btn = document.createElement("button");
//     btn.className = 'close'
//     btn.setAttribute("data-dismiss", "modal");
//     // btn.setAttribute("href", "window.location.reload()");
//     btn.innerText = "Close";
  
//     // mdHeader.append(mdTitle,closeIcon)
//     // mdContent.append(mdHeader)
//     // mdDialog.append(mdContent)


//     card.append(cardBody);
//     cardBody.append(img, h5, rn, main, btn);
//     document.querySelector("#modal").append(card);
//   });
// };
