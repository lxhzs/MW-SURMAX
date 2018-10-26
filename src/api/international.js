import http from '../services/http'

const international = {
  // 国际业务 - 客户管理 - 客户列表
  getCustomerList: params => {
    return http.get('international/customer/customerList', params)
  },
  // 国际业务 - 属性管理 - 获取退税率列表
  getDrawbackRateList: params => {
    return http.get('international/drawbackRate/drawbackRateList', params)
  },
  // 国际业务 - 属性管理 - 获取交易条件列表
  getTransactionTermList: params => {
    return http.get(
      'international/transactionTerm/transactionTermList',
      params
    )
  },
  // 国际业务 - 属性管理 - 获取付款方式列表
  getPaymentMethodList: params => {
    return http.get('international/paymentMethod/paymentMethodList', params)
  },
  // 国际业务 - 属性管理 - 获取费用类别列表
  getCostCategoryList: params => {
    return http.get('international/costCategory/costCategoryList', params)
  },
  // 国际业务 - 属性管理 - 获取增值税税率列表
  getVatRateList: params => {
    return http.get('international/vatRate/vatRateList', params)
  },
  // 国际业务 - 属性管理 - 获取消费税税率列表
  getConsumptionRateList: params => {
    return http.get(
      'international/consumptionRate/consumptionRateList',
      params
    )
  },
  // 国际业务 - 属性管理 - 获取出口关税列表
  getExportTariffsList: params => {
    return http.get('international/exportTariffs/exportTariffsList', params)
  },
  // 国际业务 - 属性管理 - 获取进口关税列表
  getImportTariffsList: params => {
    return http.get('international/importTariffs/importTariffsList', params)
  }
}

export default international
