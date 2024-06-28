import { BalconyIcon, DishesIcon, DishwasherIcon, FlatironIcon, FridgeIcon, FurnitureForInfantsIcon, HairdryerIcon, KitchenIcon, MicrowaveIcon, NoSmokingIcon, ParkingIcon, PatioIcon, PierIcon, PlateIcon, ShowerIcon, TVIcon, TerraceIcon, WashingMachineIcon, WifiIcon, СonditionerIcon } from "../assets/features_icons";
import { GrillIcon } from "../assets/features_icons/GrillIcon";

export const FIRST_NAME_REG = /^[A-Za-z]+(-[A-Za-z]+)?$|^[А-ЯЁа-яё]+(-[А-ЯЁа-яё]+)?$/;
export const SECOND_NAME_REG = /^([A-Za-z]+)$|^([А-ЯЁа-яё]+)$/;
export const EMAIL_REG = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
// export const TELEGRAM_REG = /^(https:\/\/t\.me\/[a-zA-Z0-9_]{5,32}|@[a-zA-Z0-9_]{5,32})$/;
// export const TELEGRAM_REG = /^(https:\/\/t\.me\/[\S]{5,32}|@[\S]{5,32})$/;
export const TELEGRAM_REG = /^(https:\/\/t\.me\/[A-Za-z0-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{5,32}|@[A-Za-z0-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{5,32})$/

export const ANIMAL_INFO_REG = {
    isLetter: /[A-Za-zА-ЯЁа-яё]/,
    length: /^[A-Za-zА-ЯЁа-яё0-9\s!\?@#\$%\^&\*\(\)\[\]{}<>,\._'\+=\|\/"-]{0,100}$/,
};

//ERRORS
const getFieldError = (fieldName: string) => {
    return `${fieldName} не соответствует рекомендациям, указанным в подсказке`;
};

export const REQUIRED_FIELD_ERROR = "Поле обязательно для заполнения";

export const FIRST_NAME_ERROR = getFieldError("Имя");
export const LAST_NAME_ERROR = getFieldError("Фамилия");
export const SECOND_NAME_ERROR = getFieldError("Отчество");
export const TELEGRAM_ERROR = getFieldError("Telegram");
export const TELEPHONE_ERROR = "Не соответствует формату мобильного телефона";

export const EMAIL_ERROR = "Не соответствует формату электронной почты";
export const ANIMALS_ERROR = " Максимальное число символов - 100";


// REQUIREMENTS
export const FIRST_NAME_REQ = [
    "Имя должно содержать русские или латинские буквы и состоять из одного слова.",
    "Если у вас двойное имя, допускается использование «-» без пробелов, например Анна-Мария.",
];
export const LAST_NAME_REQ = [
    "Фамилия должна содержать русские или латинские буквы и состоять из одного слова.",
    "Если у вас двойная фамилия, допускается использование «-» без пробелов, например Римский-Корсаков.",
];
export const SECOND_NAME_REQ = ["Отчество должно содержать русские или латинские буквы."];

export const TELEGRAM_REQ = [
    "Латинские буквы в верхнем и нижнем регистре",
    "Цифры допускаются",
    "Спецсимволы допускаются",
    "Nickname должен содержать от 5 до 32 символов",
    "Пример заполнения поля: https://t.me/nickname или @nickname"
];

export const optionsNationality = [
    { value: "by", label: "Республика Беларусь" },
    { value: "ru", label: "Российская Федерация" },
    { value: "ua", label: "Украина" },
    { value: "kz", label: "Республика Казахстан" },
    { value: "am", label: "Республика Армения" },
    { value: "az", label: "Азербайджанская Республика" },
    { value: "ge", label: "Грузия" },
    { value: "kg", label: "Кыргызская Республика" },
    { value: "md", label: "Республика Молдова" },
    { value: "tj", label: "Республика Таджикистан" },
    { value: "uz", label: "Республика Узбекистан" },
    { value: "lv", label: "Латвийская Республика" },
    { value: "lt", label: "Литовская Республика" },
    { value: "ee", label: "Эстонская Республика" },
    { value: "pl", label: "Республика Польша" },
];

export const FEATURES_OPTIONS = [
    { value: "kitchen", label: <KitchenIcon />, title: "Кухня" },
    { value: "dishes", label: <DishesIcon />, title: "Блюда" },
    { value: "plate", label: <PlateIcon />, title: "Тарелки" },
    { value: "fridge", label: <FridgeIcon />, title: "Холодильник" },
    { value: "microwave", label: <MicrowaveIcon />, title: "Микроволновая печь" },
    { value: "dishwasher", label: <DishwasherIcon />, title: "Посудомоечная машина" },
    { value: "wifi", label: <WifiIcon />, title: "Wi-Fi" },
    { value: "conditioner", label: <СonditionerIcon />, title: "Кондиционер" },
    { value: "balcony", label: <BalconyIcon />, title: "Балкон" },
    { value: "parking", label: <ParkingIcon />, title: "Стоянка" },
    { value: "flatiron", label: <FlatironIcon />, title: "Утюг" },
    { value: "furnitureForInfants", label: <FurnitureForInfantsIcon />, title: "Детская кроватка" },
    { value: "grill", label: <GrillIcon />, title: "Мангал" },
    { value: "hairdryer", label: <HairdryerIcon />, title: "Фен" },
    { value: "noSmoking", label: <NoSmokingIcon />, title: "Не курить" },
    { value: "patio", label: <PatioIcon />, title: "Внутренний дворик" },
    { value: "pier", label: <PierIcon />, title: "Пирс" },
    { value: "shower", label: <ShowerIcon />, title: "Душ" },
    { value: "terrace", label: <TerraceIcon />, title: "Терраса" },
    { value: "tv", label: <TVIcon />, title: "TV" },
    { value: "washingMachine", label: <WashingMachineIcon />, title: "Cтиральная машина" },
];

