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
