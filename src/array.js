var items = [];

const addItem = (item) => {
  if(items.length==0) {
    items.push(item);
  } else {
    const indexOf = hasItem(item.id);
    if(indexOf==0) {
      items.push(item);
    } else {
      console.log('item já adicionado!');
    }
  }
}

const hasItem = (id) => {
  var indexOf = 0;
  items.forEach((_item,index)=> {
    if(_item.id==id) {
      indexOf = index;
    }
  });
  return indexOf;
}

const removeItem = (id) => {
  const indexOf = hasItem(id);
  items.splice(indexOf,1);
  items.sort();
}

addItem({ id: 1, nome: 'Produto 1'});
addItem({ id: 2, nome: 'Produto 2'});
addItem({ id: 3, nome: 'Produto 3'});
addItem({ id: 4, nome: 'Produto 4'});

removeItem(4);

console.log(items);
