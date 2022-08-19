const converToNoMark = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");

const filterOption = (input, value) => {
  const textToSearch = converToNoMark(input).toLowerCase();
  const children = converToNoMark(value).toLowerCase();
  const regex = new RegExp(textToSearch);
  return regex.test(children);
};
export { filterOption }