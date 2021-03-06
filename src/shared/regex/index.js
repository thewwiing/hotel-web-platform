export const REGS = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    first_name: /^[A-Za-zА-Яа-яәғқңөұүhіӘҒҚҢӨҰҮҺІ ]{4,}$/,
    second_name: /^[A-Za-zА-Яа-яәғқңөұүhіӘҒҚҢӨҰҮҺІ ]{4,}$/,
    address: /^.{4,}$/,
    phone_number: /^[0-9]{10}$/
};
