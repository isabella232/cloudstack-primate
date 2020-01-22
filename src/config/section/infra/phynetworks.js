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
  name: 'physicalnetwork',
  title: 'Physical Networks',
  icon: 'api',
  hidden: true,
  permission: ['listPhysicalNetworks'],
  columns: ['name', 'state', 'isolationmethods', 'vlan', 'broadcastdomainrange', 'zoneid'],
  details: ['name', 'state', 'isolationmethods', 'vlan', 'broadcastdomainrange', 'zoneid'],
  tabs: [{
    name: 'details',
    component: () => import('@/components/view/DetailsTab.vue')
  }, {
    name: 'Network Service Providers',
    component: () => import('@/views/infra/traffic/NspTab.vue')
  }, {
    name: 'Dedicated VLAN/VNI Ranges',
    component: () => import('@/views/infra/traffic/DedicatedVLANTab.vue')
  }],
  related: [{
    name: 'traffictype',
    title: 'Traffic Types',
    param: 'physicalnetworkid'
  }, {
    name: 'guestnetwork',
    title: 'Networks',
    param: 'physicalnetworkid'
  }],
  actions: [
    {
      api: 'updatePhysicalNetwork',
      icon: 'edit',
      label: 'Update Physical Network',
      dataView: true,
      args: ['vlan', 'tags']
    }
  ]
}
