interface IItemsType {
  key?: string;
  value?: string;
}

export const setItems = ({ key, value }: IItemsType) => {
  if (!key) return;
  localStorage.setItem(key, value ?? '');
};

export const removeItems = ({ key }: IItemsType) => {
  if (!key) return;
  localStorage.removeItem(key);
};

export const getItems = ({ key }: IItemsType) => {
  if (!key) return;
  localStorage.getItem(key);
};
