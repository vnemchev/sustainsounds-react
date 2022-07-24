export const formatDate = (date, option) => {
    const [year, month, day] = date.split('-');

    if (option === 'display') {
        return `${day}.${month}.${year}`;
    } else if (option === 'edit') {
        return `${day}/${month}/${year}`;
    }
};
