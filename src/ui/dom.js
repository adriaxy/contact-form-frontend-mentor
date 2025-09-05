export function showError(span, input){
    span.style.display = 'block';
    input.style.borderColor = 'var(--color-red)'
}

export function hideError(span, input){
    span.style.display = 'none';
    input.style.borderColor = 'var(--gray-border)'
}