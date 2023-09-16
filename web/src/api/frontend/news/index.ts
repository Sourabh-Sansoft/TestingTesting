import createAxios from '/@/utils/axios'

const controllerUrl = '/api/news/'

export function getNews() {
    return createAxios({
        url: controllerUrl + 'index',
        method: 'get',
    })
}
