export const toggleActive = (id) => {
    const el = document.getElementById(id)
    el.classList.contains('active') ? el.classList.remove('active') : el.classList.add('active')
}