// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

export default {
  name: 'storagepool',
  title: 'Primary Storage',
  icon: 'database',
  permission: ['listStoragePoolsMetrics', 'listStoragePools'],
  columns: ['name', 'state', 'ipaddress', 'type', 'path', 'scope', 'disksizeusedgb', 'disksizetotalgb', 'disksizeallocatedgb', 'disksizeunallocatedgb', 'clustername', 'zonename'],
  details: ['name', 'id', 'ipaddress', 'type', 'scope', 'tags', 'path', 'provider', 'hypervisor', 'overprovisionfactor', 'disksizetotal', 'disksizeallocated', 'disksizeused', 'clustername', 'podname', 'zonename', 'created'],
  related: [{
    name: 'volume',
    title: 'Volumes',
    param: 'storageid'
  }],
  tabs: [{
    name: 'details',
    component: () => import('@/components/view/DetailsTab.vue')
  }, {
    name: 'Settings',
    component: () => import('@/components/view/SettingsTab.vue')
  }],
  actions: [
    {
      api: 'createStoragePool',
      icon: 'plus',
      label: 'label.add.primary.storage',
      listView: true,
      popup: true,
      component: () => import('@/views/infra/AddPrimaryStorage.vue')
    },
    {
      api: 'updateStoragePool',
      icon: 'edit',
      label: 'label.edit',
      dataView: true,
      args: ['tags', 'capacitybytes', 'capacityiops']
    },
    {
      api: 'enableStorageMaintenance',
      icon: 'plus-square',
      label: 'label.action.enable.maintenance.mode',
      dataView: true,
      show: (record) => { return ['Up', 'Connecting', 'Down', 'ErrorInMaintenance'].includes(record.state) }
    },
    {
      api: 'cancelStorageMaintenance',
      icon: 'minus-square',
      label: 'label.action.cancel.maintenance.mode',
      dataView: true,
      show: (record) => { return ['Maintenance', 'PrepareForMaintenance', 'ErrorInMaintenance'].includes(record.state) }
    },
    {
      api: 'deleteStoragePool',
      icon: 'delete',
      label: 'label.action.delete.primary.storage',
      dataView: true,
      args: ['forced'],
      show: (record) => { return (record.state === 'Down' || record.state === 'Maintenance' || record.state === 'Disconnected') }
    }
  ]
}
