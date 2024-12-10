<template>
  <div id="userLogin">
    <h3 class="title">登录</h3>
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="手机号" v-bind="validateInfos.phone">
        <a-input v-model:value="modelRef.phone" />
      </a-form-item>
      <a-form-item label="登录密码" v-bind="validateInfos.password">
        <a-input v-model:value="modelRef.password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click.prevent="onSubmit">登录</a-button>
        <a-button style="margin-left: 10px" @click="reset">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped>
#userLogin .title {
  text-align: center;
  /* margin: 0px auto; */
  margin-bottom: 20px;
}
</style>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { Form, message } from 'ant-design-vue';
import { userLogin } from '../../api/user';
import { useLoginUserStore } from '../../store/useLoginUserStore';
import { useRouter } from 'vue-router';
const useForm = Form.useForm;




export default defineComponent({
  setup() {
    const loginUserStore = useLoginUserStore();
    const router = useRouter();
    const modelRef = reactive({
      phone: '', // 修改为 phone
      password: '', // 修改为 password
    });

    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        phone: [
          // 修改为 phone
          {
            required: true,
            message: '请输入手机号',
          },
          {
            len: 11,
            message: '手机号长度为11位',
          },
        ],
        password: [
          // 修改为 password
          {
            required: true,
            message: '请输入密码',
          },
        ],
      })
    );

    const onSubmit = () => {
      validate()
        .then(async (req) => {
          const res = await userLogin(req);
          if (!res.data.success) {
            message.error(`登录失败：${res.data.message}`);
            return;
          }
          await loginUserStore.fetchLoginUser();
          message.success('登录成功');
          console.log('router:', router);
          router.push({
            path: '/',
            // 路由跳转后无法回退到登录页
            replace: true
          });
          console.log(res);
        })
        .catch((err) => {
          console.log('error', err);
        });
    };

    const reset = () => {
      resetFields();
    };

    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      reset,
      modelRef,
      onSubmit,
    };
  },
});
</script>

function fetchLoginUser() { throw new Error('Function not implemented.'); }
function fetchLoginUser() { throw new Error('Function not implemented.'); }
