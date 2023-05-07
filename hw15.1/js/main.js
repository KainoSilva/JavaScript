let kitchenProducts = [
  {
    type: 'grater',
    price: 10
  },
  {
    type: 'pastry-bag',
    price: 25
  },
  {
    type: 'scale',
    price: 5
  },
  {
    type: 'whisk',
    price: 15
  }
];

let devicesProducts = [
  {
    type: 'desktop',
    price: [100, 1000]
  },
  {
    type: 'laptop',
    price: [50, 1500]
  },
  {
    type: 'smartphone',
    price: [80, 2000]
  },
  {
    type: 'tablet',
    price: [20, 1300]
  }
];

let cosmeticsProducts = [
  {
    type: 'blush',
    price: 100
  },
  {
    type: 'eyeshadow',
    price: 50
  },
  {
    type: 'lipstick',
    price: 80
  },
  {
    type: 'nail-polish',
    price: 200
  },
  {
    type: 'perfume',
    price: 300,
  }
];


let Kitchen = {
  category: 'kitchen'
}

let Devices = {
  category: 'devices'
}

let Cosmetics = {
  category: 'cosmetics'
}


let modProducts = [];

let getProto = (arr, proto) => {
  modProducts = arr
    .map(products => {
      let sortProducts = Object.create(proto);
      for (let key in products) {
        sortProducts[key] = products[key];
      }
      return sortProducts;
    })
  return modProducts;
}

arr = [
  getProto(kitchenProducts, Kitchen),
  getProto(devicesProducts, Devices),
  getProto(cosmeticsProducts, Cosmetics)
]


let renderArr = [];


arr.forEach(element => {
  element.map(obj => {
    
    renderArr.push(`
        <div class="category__box">
        
          <div class="category__img">
            <img src="images/${obj.type}.svg" alt="${obj.type}">
          </div>
        
          <div class="category__info">
            <p class="info__name">Name:
              <span> ${obj.type}</span>
            </p>
        
            <p class="info__price">Price:
              <span> $${Array.isArray(obj.price) === true ? String(obj.price[0]) + - + String(obj.price[1]) : obj.price}</span>
            </p>
          </div>
        </div>
      `)
  })
  

  document.write(`
    <div class="category">
      <span>Category: ${element[0].category}</span>
      
      <div class="category__wraper">${renderArr.join('')}</div>
    </div>
  `);

  
  renderArr.splice(0);
});