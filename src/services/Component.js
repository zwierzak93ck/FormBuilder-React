const saveChildData = (components, data, key) => {
  const child = components.filter(x => x.key === key)[0];
  const childIndex = components.indexOf(child);
  const result = components.map((element, index) => {
    if (childIndex === index) {
      return {
        ...child, ...{
          question: data.question,
          inputType: data.inputType,
          answer: data.answer,
          condition: data.condition,
          components: data.components
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