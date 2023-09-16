import createAxios from '/@/utils/axios'

const controllerUrl = '/api/faq/'

export function getFAQs() {
    return createAxios({
        url: controllerUrl + 'index',
        method: 'get',
    })
}
