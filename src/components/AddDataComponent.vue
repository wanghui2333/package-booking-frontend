<template>
  <div>
    <a-button @click="showModal">新增</a-button>
    <a-modal
      title="添加快递单"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <div>
        运单号：
        <a-input placeholder="请输入运单号" v-model="id" class="inputInfo">
          <a-icon slot="prefix" type="bars" />
          <a-icon v-if="id" slot="suffix" type="close-circle" @click="idEmpty" />
        </a-input>
        <br />收件人：
        <a-input placeholder="请输入收件人" v-model="name" class="inputInfo">
          <a-icon slot="prefix" type="user" />
          <a-icon v-if="name" slot="suffix" type="close-circle" @click="nameEmpty" />
        </a-input>
        <br />电话号：
        <a-input placeholder="请输入电话" v-model="phone" class="inputInfo">
          <a-icon slot="prefix" type="phone" />
          <a-icon v-if="phone" slot="suffix" type="close-circle" @click="phoneEmpty" />
        </a-input>
        <br />快递状态：
        <a-select defaultValue="未取件" style="width: 120px" @change="statusChange">
          <a-select-option value="未取件">未取件</a-select-option>
          <a-select-option value="已取件">已取件</a-select-option>
          <a-select-option value="已预约">已预约</a-select-option>
        </a-select>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "AddData",
  data: function() {
    return {
      id: null,
      name: null,
      phone: null,
      status: null,
      visible: false,
      confirmLoading: false
    };
  },
  methods: {
    idEmpty: function() {
      this.id = null;
    },
    nameEmpty: function() {
      this.name = null;
    },
    phoneEmpty: function() {
      this.phone = null;
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.confirmLoading = true;
      //模拟异步
      setTimeout(() => {
        this.$store.dispatch("addData", {
          id: this.id,
          name: this.name,
          phone: this.phone,
          status: this.status
        });
        //清空本地数据
        this.clearLocalData();
        this.visible = false;
        this.confirmLoading = false;
      }, 1000);
    },
    handleCancel(e) {
      this.clearLocalData();
      this.visible = false;
    },
    statusChange: function (status) {
      this.status = status;
    },
    clearLocalData: function() {
      this.id = null;
      this.name = null;
      this.phone = null;
    }
  }
};
</script>


<style scoped>
.inputInfo {
  width: 50%;
}
</style>