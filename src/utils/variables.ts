const BASE_URL = "https://ya-praktikum.tech/api/v2";
const baseOptions = {
  mode: "cors", // Работаем с CORS
  headers: {
    "content-type": "application/json", // Данные отправляем в формате JSON
  },
};

export { BASE_URL, baseOptions };
