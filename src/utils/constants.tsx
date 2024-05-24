export const NAME_REG = /^[A-Za-z]+(-[A-Za-z]+)?$|^[А-ЯЁа-яё]+(-[А-ЯЁа-яё]+)?$/;
export const SURNAME_REG = /^([A-Za-z]+)$|^([А-ЯЁа-яё]+)$/;


//ERRORS
const getFieldError = (fieldName: string) => {
    return `${fieldName} не соответствует рекомендациям, указанным в подсказке`;
};

export const REQUIRED_FIELD_ERROR = "Поле обязательно для заполнения";

export const NAME_ERROR = getFieldError("Имя");
export const LAST_NAME_ERROR = getFieldError("Фамилия");
export const SURNAME_ERROR = getFieldError("Отчество");


// REQUIREMENTS
export const NAME_REQ = [
    "Имя должно содержать русские или латинские буквы и состоять из одного слова.",
    "Если у вас двойное имя, допускается использование «-» без пробелов, например Анна-Мария.",
];
export const LAST_NAME_REQ = [
    "Фамилия должна содержать русские или латинские буквы и состоять из одного слова.",
    "Если у вас двойная фамилия, допускается использование «-» без пробелов, например Римский-Корсаков.",
];
export const SURNAME_REQ = ["Отчество должно содержать русские или латинские буквы."]; 
