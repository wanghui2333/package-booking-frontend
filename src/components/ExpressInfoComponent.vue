<template>
  <a-table :columns="columns" :dataSource="data" :rowKey="data => data.id">
    <span slot="action" slot-scope="text, data">
      <a-popconfirm
        title="确定收货吗?"
        @confirm="confirmGoods(data)"
        @cancel="cancel"
        okText="Yes"
        cancelText="No"
      >
        <a v-show="data.status != '已取件'">确认收货</a>
      </a-popconfirm>
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
    scopedSlots: { customRender: "action" }
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
    confirmGoods: function(data) {
      this.$message.success('收货完成');
      data.status = "已取件";
      this.$store.dispatch("patchDataStatus", data);
    },
    cancel (e) {
      this.$message.error('取消确认收货');
    }
  }
};
</script>
