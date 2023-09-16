import createAxios from '/@/utils/axios'

const controllerUrl = '/api/products/'

export function getProducts() {
    return createAxios({
        url: controllerUrl + 'index',
        method: 'get',
    })
}
