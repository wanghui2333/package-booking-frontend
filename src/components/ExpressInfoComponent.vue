<template>
  <a-table :columns="columns" :dataSource="data" :rowKey="record => record.id" >
    <span slot="action" slot-scope="text, record">
      <a v-show="record.status != '已取件'" @click="confirmGoods(record)">确认收货</a>
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "运单号",
    dataIndex: "id"
  },
  {
    title: "收件人",
    dataIndex: "name"
  },
  {
    title: "电话",
    dataIndex: "phone"
  },
  {
    title: "状态",
    dataIndex: "status"
  },
  {
    title: "预约时间",
    dataIndex: "date"
  },
  {
    scopedSlots: { customRender: 'action' }
  }
];

export default {
  data() {
    return {
      columns
    };
  },
  computed: {
    data: function() {
      return this.$store.getters.filterData;
    }
  },
  methods: {
    confirmGoods: function(record) {
      record.status = "已取件";
    }
  }
};
</script>
