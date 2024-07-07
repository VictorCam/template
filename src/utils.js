const getLastJsonId = (ref) => {
  return ref.length !== 0 ? parseInt(ref[ref.length - 1].id, 10) : 0;
}

const addItem = (ref, toast) => {
  toast.id = getLastJsonId(ref) + 1;
  ref.push(toast);
};

const removeItemById = (ref, id) => {
  const index = ref.findIndex((toast) => toast.id === id);
  if (index !== -1) {
    ref.splice(index, 1);
  }
};

const utils = {
  addItem,
  removeItemById
};

export default utils;
