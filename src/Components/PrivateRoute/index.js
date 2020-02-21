export default function newAddressList(adressList) {
  const objAddressesList = [];
  for (let [, value] of Object.entries({ ...adressList })) {
    objAddressesList.push({ value: value, label: value });
  }
  return objAddressesList;
}
