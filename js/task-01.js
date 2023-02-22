const categoriesList = (items) => {
    const itemsEl = document.querySelectorAll(items);
    console.log(`Number of categories: ${itemsEl.length}`);
    itemsEl.forEach((item) => {
      console.log(`Category: ${item.firstElementChild.textContent}`),
      console.log(`Elements: ${item.lastElementChild.children.length}`);
    });
  };
  categoriesList(".item");