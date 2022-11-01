
export const generateId = () => {
    const random = Math.random().toString(36).substr(2)
    const dateId = Date.now().toString(36)

    return random + dateId
}


export const formatDate= (fecha) => {
    const fechaNueva = new Date(fecha);

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones)
}