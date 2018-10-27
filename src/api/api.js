import {wxRequest} from '@/utils/wxRequest'

/**
 *@param {string} params -argument
 */
const getGoodsList = (params) => wxRequest(params, 'https://easy-mock.com/mock/5bcef045f044657d2fe676d8/Richard/richard')// 获取所有商品列表

const getGoodCategory = (params) => wxRequest(params, 'https://easy-mock.com/mock/5bcef045f044657d2fe676d8/Richard/category')// 获取商品分类列表

export default {
  getGoodsList,
  getGoodCategory
}
