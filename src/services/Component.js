const saveChildData = (childrensData, data, key) => {
  const child = childrensData.filter(x => x.key === key)[0];
  const childIndex = childrensData.indexOf(child);
  const result = childrensData.map((element, index) => {
    if (childIndex === index) {
      return {
        ...child, ...{
          question: data.question,
          inputType: data.inputType,
          answer: data.answer,
          condition: data.condition,
          childrensData: data.childrensData
        }
      }
    } else {
      return element;
    }
  })
  return {
    result
  }
}

export {
  saveChildData
}