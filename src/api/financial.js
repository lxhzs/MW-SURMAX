import http from '../services/http'

// 财务管理

const financial = {
  // 收付款管理 - 收款管理 - 应收款 - 列表
  getShouldCollectList: params => {
    return http.post('recpay/getRecPayInfo', params)
  },
  // 应交税金 - 增值税 - 进项税额 - 单据号
  getInTaxBillNo: () => {
    return http.get('addedTax/getInTaxBillNo', {})
  },
  // 应交税金 - 增值税 - 进项税额 - 列表
  getInTaxList: params => {
    return http.get('addedTax/getInTaxList', params)
  },
  // 应交税金 - 增值税 - 销项税额 - 单据号
  getSaleTaxBillNo: () => {
    return http.get('saleTax/getSaleTaxBillNo', {})
  },
  // 应交税金 - 增值税 - 销项税额 - 列表
  getSaleTaxList: params => {
    return http.get('saleTax/getSaleTaxList', params)
  },
  // 应交税金 - 增值税 - 减免税款 - 列表
  getDerateTaxList: params => {
    return http.get('derateTax/getDerateTaxList', params)
  },
  // 应交税金 - 增值税 - 减免税款 - 新增
  insertDerateTaxMoney: params => {
    return http.post('derateTax/insertDerateTaxMoney', params)
  },
  // 应交税金 - 增值税 - 出口抵减内销应纳税额 - 单据号
  getBill: () => {
    return http.get('outTaxDeductMoney/getBill', {})
  },
  // 应交税金 - 增值税 - 出口抵减内销应纳税额 - 列表
  getOutTaxDeductMoneyList: params => {
    return http.get('outTaxDeductMoney/getOutTaxDeductMoneyList', params)
  },
  // 应交税金 - 增值税 - 出口抵减内销应纳税额 - 新增
  insertOutTaxDeductMoney: params => {
    return http.post('outTaxDeductMoney/insertOutTaxDeductMoney', params)
  }
}

export default financial
