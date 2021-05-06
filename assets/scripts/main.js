window.onload = () => {

  // Variáveis Principais
  const head = document.querySelector('head'),
    body = document.querySelector('body'),
    formTypes = ['input', 'select', 'textarea']

  // elementCreator - função que cria elementos para a gente
  const elementCreator = (typeOfElement, attributes, text, options = false) => {
    const el = document.createElement(typeOfElement)
    for (let attribute in attributes) {
      el.setAttribute(attribute, attributes[attribute])
    }
    if (formTypes.indexOf(typeOfElement) >= 0) {
      const label = document.createElement('label'),
        labelText = document.createTextNode(text)
      label.appendChild(labelText)
      if (options) {
        for (let option of options) {
          let optionTag = document.createElement('option')
          optionTag.setAttribute('name', option.replace(/ /g, '').toLowerCase())
          optionTag.setAttribute('value', option)
          const optionText = document.createTextNode(option)
          optionTag.appendChild(optionText)
          el.appendChild(optionTag)
        }
      }
      const elContainer = document.createElement('div')
      elContainer.classList.add('input-container')
      elContainer.appendChild(label)
      elContainer.appendChild(el)
      return elContainer
    } else {
      const elText = document.createTextNode(text)
      el.appendChild(elText)
      return el
    }
  }

  // createContactForm - cria formulário de contato
  const createContactForm = () => {
    const form = document.createElement('form')
    form.setAttribute('action', '')
    form.setAttribute('method', 'POST')
    // TODO
  }





}