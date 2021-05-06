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
    const textArea = elementCreator('textarea', {
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
const makeContactForm = () => {
  const contactSection = document.querySelector('.section.contact')
  const form = createContactForm()
  contactSection.appendChild(form)
}
/*
 * ADICIONANDO ESTILO INICIAL AO FORM
 */
// Add Contact Form Style Through Style Tag
const addContactFormStyle = () => {
  const style = `
      form {
        align-items: center;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }
      .input-container,
      .input-container ~ button {
        align-items: stretch;
        display: flex;
        flex: 1 1 40%;
        flex-flow: column nowrap;
        justify-content: flex-start;
      }
      .input-container:nth-child(odd) {
        margin-right: 8px;
      }
      .input-container:nth-child(even) {
        margin-left: 8px;
      }
      .input-container:last-of-type {
        flex: 1 0 100% !important;
      }
    `
  const styleTag = document.createElement('style')
  styleTag.innerHTML = style
  head.appendChild(styleTag)
}

//updateInputStyle - atualiza o estilo dos inputs
const updateInputStyle = () => {
  const inputs = document.querySelectorAll('input')
  for (let input of inputs) {
    input.style = 'border: 1px solid black; border-radius:16px; height: 32px; outline:none; padding:4px 8px';
    input.classList.add('mb16', 'mt8')
  }
}

//updateSelectTag- atualiza o estilo dos select
const updateSelectTag = () => {
  const selects = document.querySelectorAll('select')
  for (let select of selects) {
    select.style = 'border: 1px solid black; border-radius:16px; height: 32px; outline:none; padding:4px 8px';
    select.classList.add('mb16', 'mt8')
  }


//updateSubmitButtonStyle
const updateSubmitButtonStyle = () => {
  const button = document.querySelector('button[type="submit"]')
  const normalStyle = 'border: 1px solid white;background-color:var(--secondary-color);border-radius:16px;color:#fff;font-weight:bold;height:32px;margin: 24px auto 8px;outline:none;padding:8px;'
  const hoverStyle = 'border: 1px solid black;background-color:var(--tertiary-color);border-radius:16px;color:#000;font-weight:bold;height:32px;margin: 24px auto 8px;outline:none;padding:8px;cursor:pointer;'
  button.style = normalStyle
  button.onmouseover = () => { button.style = hoverStyle }
  button.onmouseout = () => { button.style = normalStyle }
}

//updatePortfolioLogo 
const updatePortfolioLogo = () =>{
  const portfolio = document.querySelector('.portfolio_link_container')
  return portfolio.style.backgroundAttachment = 'fixed'
}

const init = () => {
  makeContactForm()
  addContactFormStyle()
  updateInputStyle()
  updateSelectTag()
  updateSubmitButtonStyle()
  updatePortfolioLogo()
}

init()

}
