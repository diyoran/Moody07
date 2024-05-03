import axios from "axios"
const tokent = `7074852663:AAHvdOvos49_LQUoFRFWLS82NJETEp7iKp0`
const API = `https://api.telegram.org/bot${tokent}`


export const TelegramGetChatId = async () => {

    const response = await axios.get(API + "/getUpdates")
    return (response.data.result[0]?.message.chat.id);
}

export const TelegramPostChat = async (data = "empty") => {
await axios.post(API, {
    chat_id: TelegramGetChatId(), 
    text: data,
})
}