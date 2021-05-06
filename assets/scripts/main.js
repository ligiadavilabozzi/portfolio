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
    const inputName = elementCreator('input', {
      type: 'text',
      name: 'nome',
      id: 'nome',
      placeholder: 'Fulano de Tal',
      required: true
    }, 'Nome')
    const inputCompany = elementCreator('input', {
      type: 'text',
      name: 'empresa',
      id: 'empresa',
      placeholder: 'Alphabet Inc.',
      required: true
    }, 'Empresa')
    const inputEmail = elementCreator('input', {
      type: 'email',
      name: 'email',
      id: 'email',
      placeholder: 'rh@google.com',
      required: true
    }, 'Email')
    const inputPhone = elementCreator('input', {
      type: 'number',
      name: 'telefone',
      id: 'telefone',
      placeholder: '1123456789',
      required: true
    }, 'Telefone')
  
const selectOpportunityType = elementCreator('select', {
      name: 'tipo',
      id: 'tipo',
      required: true
    }, 'Tipo de Vaga', ['Freelance', 'Estágio', 'CLT', 'PJ'])
    const inputZipcode = elementCreator('input', {
      type: 'text',
      name: 'cep',
      id: 'cep',
      placeholder: '05089001',
      required: true
    }, 'CEP')
    const inputState = elementCreator('input', {
      type: 'text',
      name: 'uf',
      id: 'uf',
      placeholder: 'SP',
      required: true
    }, 'UF')
    const inputCity = elementCreator('input', {
      type: 'text',
      name: 'cidade',
      id: 'cidade',
      placeholder: 'São Paulo',
      required: true
    }, 'Cidade')
    const inputNeighborhood = elementCreator('input', {
      type: 'text',
      name: 'bairro',
      id: 'bairro',
      placeholder: 'Centro',
      required: true
    }, 'Bairro')
    const inputStreet = elementCreator('input', {
      type: 'text',
      name: 'rua',
      id: 'rua',
      placeholder: 'Av. Brasil',
      required: true
    }, 'Rua')
    const inputNumber = elementCreator('input', {
      type: 'text',
      name: 'numero',
      id: 'numero',
      placeholder: '123',
      required: true
    }, 'Número')
    const inputComp = elementCreator('input', {
      type: 'text',
      name: 'complemento',
      id: 'complemento',
      placeholder: 'Bloco A - Apto. 51',
      required: true
    }, 'Complemento')
    const textArea = elementCreator('textarea',{
      name: 'mensagem', 
      id: 'mensagem',
      placeholder: 'Quero te contratar!',
      rows: '4', 
      cols: '50',
      maxlength: '200', 
      style: 'resize: vertical; overflow: auto; border-radius:16px; padding: 8px',
      required: false
    }, 'Detalhes')
    const submitButton = elementCreator('button', {
      type: 'submit'
    }, 'Enviar')
    form.appendChild(inputName)
    form.appendChild(inputCompany)
    form.appendChild(selectOpportunityType)
    form.appendChild(inputEmail)
    form.appendChild(inputPhone)
    form.appendChild(inputZipcode)
    form.appendChild(inputState)
    form.appendChild(inputCity)
    form.appendChild(inputNeighborhood)
    form.appendChild(inputStreet)
    form.appendChild(inputNumber)
    form.appendChild(inputComp)
    form.appendChild(textArea)
    form.appendChild(submitButton)
    return form
  }
}

//implementação do formulário de contato
const makeContactForm = () =>{
const contactSection = document.querySelector('.section.contact')
const form = createContactForm()
contactSection.appendChild(form)
}
