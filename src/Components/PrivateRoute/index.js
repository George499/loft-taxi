export default function newAddressList(list) {
  const adressArray = [];
  for (let [, value] of Object.entries({ ...list })) {
    adressArray.push({ value: value, label: value });
  }
  return adressArray;
}
