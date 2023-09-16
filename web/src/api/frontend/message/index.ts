import createAxios from '/@/utils/axios'

const controllerUrl = '/api/message/'

export function sendMessage(name: string, email: string, message: string, phone: string, company: string) {
    return createAxios({
        url: controllerUrl + 'index',
        method: 'post',
        data:{
            name: name,
            email: email,
            message: message,
            phone: phone,
            company: company
        }
    })
}
