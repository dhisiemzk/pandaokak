// Используем require вместо import
const fs = require("fs");
const TonStorageSDK = require("@crustnetwork/tonbags-sdk");

// Получаем объект TonStorageClient из пакета
const TonStorageClient = TonStorageSDK.TonStorageClient;

// Создаём клиента
const client = new TonStorageClient();

// Читаем файл
const content = fs.readFileSync("index.html");

// Загружаем файл в TON Storage
async function upload() {
    try {
        const file = await client.uploadFile(content, {
            name: "index.html",
            contentType: "text/html"
        });
        console.log("Сайт загружен! Ссылка:", file.url);
    } catch (err) {
        console.error("Ошибка загрузки:", err);
    }
}

upload();
