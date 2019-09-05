<template>
  <a-table :columns="columns" :dataSource="data" :rowKey="data => data.id">
    <span slot="subscribe" slot-scope="text, data">
      <a-popconfirm
        title="确定预约吗?"
        @confirm="confirmSubscribe(data)"
        @cancel="cancelSubscribe"
        okText="Yes"
        cancelText="No"
      >
      <a v-show="data.status === '未取件'">预约</a>
      <p v-show="data.status === '已预约'">{{ data.date }}</p>
      </a-popconfirm>
    </span>
    <span slot="action" slot-scope="text, data">
      <a-popconfirm
        title="确定收货吗?"
        @confirm="confirmGoods(data)"
        @cancel="cancelGoods"
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
    dataIndex: "date",
    scopedSlots: { customRender: "subscribe" }
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
    confirmSubscribe: function(data) {
      this.$message.success('预约成功');
      data.status = "已预约";
      // this.$store.dispatch("patchDataStatus", data);
    },
    cancelGoods (e) {
      this.$message.error('取消确认收货');
    },
    cancelSubscribe (e) {
      this.$message.error('取消预约');
    }
  }
};
</script>
