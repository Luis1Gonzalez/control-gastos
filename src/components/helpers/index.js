
export const generateId = () => {
    const random = Math.random().toString(36).substr(2)
    const dateId = Date.now().toString(36)

    return random + dateId
}


export const formatDate= (dateNow) => {
    const newDateNow = new Date(dateNow);

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return newDateNow.toLocaleDateString('es-ES', opciones)
}

export const formatCurrency = (quantity) => {
    return quantity.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
    });
};
