<script>
export default {
  data() {
    return {
      tagsValue: '',
      form: [
        {
          name: 'Contact',
          type: 'select',
          value: 'Ashiq Zaman',
          data: [{ value: 'Ashiq Zaman', label: 'Ashiq Zaman' }],
        },

        {
          name: 'Type',
          type: 'select',
          value: 'None',
          data: [
            {
              value: 'None',
              label: 'None',
            },
            {
              value: 'Question',
              label: 'Question',
            },
            {
              value: 'Problem',
              label: 'Problem',
            },
            {
              value: 'Feature request',
              label: 'Feature request',
            },
            {
              value: 'Refund',
              label: 'Refund',
            },
          ],
        },
        {
          name: 'Source',
          type: 'select',
          value: 'Phone',
          data: [
            {
              value: 'Phone',
              label: 'Phone',
            },
            {
              value: 'Email',
              label: 'Email',
            },
            {
              value: 'Messenger',
              label: 'Messenger',
            },
            {
              value: 'Facebook',
              label: 'Facebook',
            },
            {
              value: 'Whatsapp',
              label: 'Whatsapp',
            },
          ],
        },
        {
          name: 'Status',
          type: 'select',
          value: 'Open',
          data: [
            {
              value: 'Open',
              label: 'Open',
            },
            {
              value: 'Pending',
              label: 'Pending',
            },
            {
              value: 'Resolved',
              label: 'Resolved',
            },
            {
              value: 'Waiting on customer',
              label: 'Waiting on customer',
            },
            {
              value: 'Waiting on third party',
              label: 'Waiting on third party',
            },
          ],
        },
        {
          name: 'Priority',
          type: 'select',
          value: 'Low',
          data: [
            {
              value: 'Low',
              label: 'Low',
            },
            {
              value: 'Medium',
              label: 'Medium',
            },
            {
              value: 'High',
              label: 'High',
            },
            {
              value: 'Urgent',
              label: 'Urgent',
            },
          ],
        },
        {
          name: 'Group',
          type: 'select',
          value: 'None',
          data: [
            {
              value: 'None',
              label: 'None',
            },
            {
              value: 'Billing',
              label: 'Billing',
            },
            {
              value: 'Customer Support',
              label: 'Customer Support',
            },
            {
              value: 'Escalations',
              label: 'Escalations',
            },
            {
              value: 'Refund',
              label: 'Refund',
            },
          ],
        },
        {
          name: 'Agent',
          type: 'select',
          value: '--',
          data: [
            {
              value: '--',
              label: '--',
            },
            {
              value: 'Ashiq Zaman',
              label: 'Ashiq Zaman',
            },
            {
              value: 'Saad',
              label: 'Saad',
            },
            {
              value: 'Ishfaq Ahmad',
              label: 'Ishfaq Ahmad',
            },
          ],
        },
      ],
    }
  },
}
</script>
<template>
  <div
    class="w-2/12 px-3 py-[6px] bg-white grid gap-3 shadow filters max-h-[32rem] overflow-y-auto"
  >
    <div class="flex justify-between w-full items-center">
      <span class="text-[13px] font-[500] uppercase">Filters</span>
      <div class="border border-gray-300 p-2 shadow rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
    <div class="grid gap-2" v-for="elem in form" :key="elem.name">
      <label for="contact" class="text-gray-400 text-xs font-bold">
        {{ elem.name }} <span class="text-red-300">*</span>
      </label>
      <!--select elem-->
      <el-select
        v-if="elem.type === 'select'"
        v-model="elem.value"
        placeholder="Select"
        filterable
      >
        <el-option
          v-for="item in elem.data"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <!--select element-->
      <!--input elem-->
      <el-input
        placeholder=""
        v-model="elem.value"
        v-if="elem.type === 'input'"
      ></el-input>
      <!--input elem-->
    </div>
  </div>
</template>
