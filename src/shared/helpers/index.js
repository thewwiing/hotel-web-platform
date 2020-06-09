import moment from "moment";

export const hotelSelectStyles = {
    control: (provided, { isFocused, selectProps: { width }}) => ({
        borderRadius: isFocused ? '4px' : '4px',
        cursor: 'pointer',
        display: 'flex',
        height: '45px',
        backgroundColor: '#F8F9FB',
        fontSize: isFocused ? '15px' : '15px',
        fontWeight: '600',
        border: '1px solid #EEEEEE'
    }),
    menu: (provided) => ({
        ...provided,
        width: '100%',
        zIndex: 99
    }),
    option: (provided) => ({
        ...provided,
        cursor: 'pointer',
        fontSize: '15px',
    }),
    singleValue: (provided, {isFocused}) => ({
        ...provided,
        fontSize: isFocused ? '15px' : '15px',
        color: "#666666"
    }),

    indicatorSeparator: () => ({ display: 'none'}),
    valueContainer: (provided) => ({...provided, paddingLeft: "10px"}),
};

export const parseDate = (date) => {
    if (!date) return '';
    const splitted = moment(date).format('L').split('/');
    return splitted[1] + "-" + splitted[0] + "-" + splitted[2];
};

// export const parseTwoDatesArray = (dateArray) => {
//     if (!dateArray) return '';
//     const from = moment(dateArray[0]).format('L').split('/');
//     const to = moment(dateArray[1]).format('L').split('/');
//     return from + " - " + to;
// };

export const isAllValid = (state) => !Object.values(state).find(field => !field['isValid']);

export const getPrice = (price) => {
    if (isNaN(price)) return '???';
    return Math.floor(price) * 400; // there must be currency transfer !!!
};

export const getRating = (rating) => {
    if (isNaN(rating) || !rating) return 0;
    return Number(rating.toFixed(1));
};

export const getRatingDescr = (rating) => {
    if (isNaN(rating)) return 'Не известно';
    rating = +rating;
    if (rating >= 0 && rating < 2) return 'Удовлетворительно';
    if (rating >= 2 && rating < 3.5) return 'Хорошо';
    if (rating >= 3.5 && rating < 4.5) return 'Очень хорошо';
    if (rating >= 4.5 && rating <= 5) return 'Превосходно';
    return 'Что-то не так!!!'
};
