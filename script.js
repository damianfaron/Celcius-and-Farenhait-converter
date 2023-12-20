const convert = document.querySelector('#converter')
const convertButton = document.querySelector('.conv')
const resetButton = document.querySelector('.reset')
const changeButton = document.querySelector('.change')
const result =  document.querySelector('.result')
const cel = document.querySelector('.one')
const farh= document.querySelector('.two')

/* T(°F) = T(°C) x 1.8 + 32 
T(°C) = (T(°F) - 32) / 1.8 */



const swap = () => {
    if (cel.textContent === '°C') {
        cel.textContent = '°F'
        farh.textContent = '°C'
        result.textContent = ''
    } else {
        cel.textContent = '°C'
        farh.textContent = '°F'
        result.textContent = ''
    }
}

const farToCel = () => {
   const fahrenheit = convert.value * 1.8 + 32
   result.textContent = `${convert.value}°C to ${fahrenheit.toFixed(1)} °F`
   convert.value = ''
}

const celToFar = () => {
    const celcius = (convert.value - 32) / 1.8
    result.textContent = `${convert.value}°F to ${celcius.toFixed(1)} °C`
    convert.value = ''
}

const conversion = () => {
    if (convert.value !== '') {
      if (cel.textContent === '°C') {
        farToCel ()
      } else {
        celToFar()
      }
    } else {
        result.textContent = 'Musisz podać jakąś wartość'
        result.style.color = 'red'
    }
}

const resetF = () => {
    convert.value = ''
    result.textContent = ''
}

changeButton.addEventListener('click', swap)
convertButton.addEventListener('click', conversion)
resetButton.addEventListener('click', resetF)
