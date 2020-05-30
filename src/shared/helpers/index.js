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
    return 'Не сделано еще'
};
