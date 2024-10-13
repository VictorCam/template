
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

const getImg = (collectionName, id, imgName) => {
  let baseURL = 'https://ferret.pockethost.io/api/files/';
  return baseURL + collectionName + '/' + id + '/' + imgName
}

function handleImgError(event, placeHolder) {
  event.target.src = placeHolder;
}

const utils = {
  addItem,
  removeItemById,
  getImg,
  handleImgError
};

export default utils;
