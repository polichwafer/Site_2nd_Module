const lot = [
    {
      image: "Images/Lot1.jpg",
      LotName: "Hello Kitty Бомба",
      price: 459,
      value: 2,
      placeholder: 1,
      unit: 2090
    },
    {
      image: "Images/Lot2.jpg",
      LotName: "Hello Kitty Бумбокс",
      price: 2999,
      value: 3,
      placeholder: "1",
      unit: 1012
    },
    {
      image: "Images/Lot3.jpg",
      LotName: "Hello Kitty Чехол для наушников",  
      value: 1,
      placeholder: 1,
      price: 399,
      unit: 6590
    },
    {
      image: "Images/Lot4.jpg",
      LotName: "Hello Kitty Звездный напиток",
      price: 89,
      value: 2,
      placeholder: 1,
      unit: 1012
    },
    {
      image: "Images/Lot5.jpg",
      LotName: "Hello Kitty Стаканы",
      price: 549,
      value: 6,
      placeholder: 1,
      unit: 4570
    },
    {
      image: "Images/Lot6.jpg",
      LotName: "Hello Kitty Чайник",
      price:1299,
      value: 1,
      placeholder: 1,
      unit: 4020
    }
  ];
  
  function createProductBlock(lot) {
    const block = document.createElement("div");
    block.classList.add("lot");
  
    const image = document.createElement("img");
    image.src = lot.image;
    block.appendChild(image);
  
    const LotName = document.createElement("LotName");
    LotName.textContent = lot.LotName;
    block.appendChild(LotName);
  
    const price = document.createElement("price");
    price.textContent = `${lot.price} руб.`;
    block.appendChild(price);

    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("value", lot.value)
    input.setAttribute("name", `number_${lot.value}`);
    input.setAttribute("placeholder", lot.placeholder);
    block.appendChild(input);

    const hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.setAttribute("name", `unit_${lot.unit}`)
    hiddenInput.setAttribute("value", lot.unit)
    block.appendChild(hiddenInput);

    return block;}
    const container = document.getElementById("product-container");


lot.forEach(lot => {
  const productBlock = createProductBlock(lot);
  container.appendChild(productBlock);
});