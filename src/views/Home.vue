<template>
  <a-table :columns="columns" :dataSource="data" ></a-table>
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
      return this.$store.state.data;
    }
  }
};
</script>
