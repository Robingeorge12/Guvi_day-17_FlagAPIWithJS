
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
      "align-items-start justify-content-center p-4 nameDiv"
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


// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={c469b4c97e0849506214adafaf1be7be}

const GeoLoc = async (el) => {
  // latlng

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${
    el.latlng[0]
  }&lon=${el.latlng[1]}&appid=${"19cf66774bb7e5dbe26348dab14cdeb1"}`;
  let data = await fetch(url);
  let res = await data.json();
  // console.log(res.weather)
  weatherDisplay(res.weather, el);
};
// .modal-fullscreen-lg-down

const weatherDisplay = async (data, el) => {
  console.log(data);
  document.querySelector("#modal").innerHTML = "";

  data.forEach((data) => {
    let modalDiv = document.createElement("div");
    modalDiv.setAttribute("class", "modal modal-fullscreen-lg-down mdl");

    let mdDialog = document.createElement("div");
    mdDialog.setAttribute("class","modal-dialog")

    let mdContent = document.createElement("div");
    mdContent.setAttribute("class","modal-content")

    let mdHeader = document.createElement("div");
    mdHeader.setAttribute("class","modal-header")

    let mdTitle = document.createElement("p");
    mdTitle.setAttribute("class","modal-title")
    mdTitle.innerText = "Weather Report"

    let closeIcon = document.createElement("button")
    closeIcon.setAttribute("class","close")
    closeIcon.setAttribute("aria-label","Close")
    closeIcon.setAttribute("data-dismiss","modal")
    closeIcon.textContent = "X"
    mdHeader.append(mdTitle,closeIcon)
    mdContent.append(mdHeader)
    mdDialog.append(mdContent) 

 
    // let sp = document.createElement("span")
    // sp.setAttribute("aria-hidden","true")
    // sp.setAttribute("aria-label","Close")


    let card = document.createElement("div");
    // d-flex flex-row
    card.setAttribute("class", "card col-lg-6 col-md-6 col-sm-6 cd");

    let cardBody = document.createElement("div");
    // d-flex flex-row flex-wrap
    // card.setAttribute("class", "card-body cbody");

    let img = document.createElement("img");
    img.setAttribute("src", el.flags.svg);
    // card-img 
    img.setAttribute("class", " img-fluid imgW");

    let h5 = document.createElement("h5");
    h5.setAttribute(
      "class",
      "card-header align-items-start justify-content-center"
    );
    h5.textContent = el.name.common;

    let rn = document.createElement("p");
    rn.setAttribute("class", "card-title");
    rn.textContent ="Description:"+" "+ data.description;

    let main = document.createElement("p");
    main.setAttribute("class", "card-title");
    main.textContent ="Main:"+" "+ data.main;

   
    let btn = document.createElement("button");
    // btn.className = 'close'
    // btn.setAttribute("data-dismiss", "modal");
  
    btn.innerText = "X";
    btn.addEventListener("click",function(){

      // btn.setAttribute("id", "modal");
      document.location.reload(true)

    })


    // card.append(cardBody);
    // cardBody.append(img, h5, rn, main, btn);
    card.append(img, h5, rn, main, btn);
    document.querySelector("#modal").append(card);
    // document.querySelector("#modal").append(cardBody);
  });
};




