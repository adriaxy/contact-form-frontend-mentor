export function validateName(name) {
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿÑñ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿÑñ]+)*$/;
  if(!regex.test(name)) return false
  return true
}

export function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!regex.test(email)) return false
  return true
}

export function updateFormValues(formValues, inputKey, inputValue){
    formValues[inputKey] = inputValue;
}