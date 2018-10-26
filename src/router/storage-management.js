/* 储运管理=>物流管理 */
const LogisticsManage = () =>
  import('@/pages/index-system/storage-management/logistics-manage/LogisticsManage')

// 储运管理=>物流管理=>来货物流
const CargoFlow = () =>
  import('@/pages/index-system/storage-management/logistics-manage/CargoFlow')

// 储运管理=>物流管理=>去货物流
const GoodsFlow = () =>
  import('@/pages/index-system/storage-management/logistics-manage/GoodsFlow')

// 储运管理=>物流管理=>物流资料
const LogisticsInfo = () =>
  import('@/pages/index-system/storage-management/logistics-manage/LogisticsInfo')

// 储运管理=>物流管理=>收货地址管理
const AddressManage = () =>
  import('@/pages/index-system/storage-management/logistics-manage/AddressManage')

// 储运管理=>物流管理=>收货地址管理
const DeliveryAddressManage = () =>
  import('@/pages/index-system/storage-management/logistics-manage/DeliveryAddressManage')

/* 储运管理=>入库管理 */

const StorageManagement = [
  {
    path: '/storage-management/logistics-manage',
    name: 'logistics',
    title: '储运管理',
    component: LogisticsManage,
    children: [
      {
        path: 'cargoflow',
        name: 'cargoflow',
        title: '储运管理-物流管理-来货物流',
        component: CargoFlow
      },
      {
        path: 'goodsflow',
        name: 'goodsflow',
        title: '储运管理-物流管理-去货物流',
        component: GoodsFlow
      },
      {
        path: 'logisticsinfo',
        name: 'logisticsinfo',
        title: '储运管理-物流管理-物流资料',
        component: LogisticsInfo
      },
      {
        path: 'addressinfo',
        name: 'addressinfo',
        title: '储运管理-物流管理-收货地址管理',
        component: AddressManage
      },
      {
        path: 'deliveryaddressmanage',
        name: 'deliveryaddressmanage',
        title: '储运管理-物流管理-发货地址管理',
        component: DeliveryAddressManage
      }
    ]
  }
]

export default StorageManagement
