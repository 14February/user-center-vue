<template>
  <a-table :columns="columns" :data-source="data">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #customTitle>
      <span>
        <SmileOutlined />
        Name
      </span>
    </template>
    <template #tags="{ text: tags }">
      <span>
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
    <template #action="{ record }">
      <span>
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link">
          More actions
          <DownOutlined />
        </a>
      </span>
    </template>
  </a-table>
</template>

<script lang="ts">
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue/es';
import { defineComponent, onMounted, ref } from 'vue';
import { searchUsers } from '../../api/user';

export default defineComponent({
  name: 'UserManagePage',
  setup() {
    const columns = [
      {
        title: '手机号',
        dataIndex: 'phone',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
    ];

    const data = ref([]);

    const fetchData = async () => {
      const res = await searchUsers('');
      if (!res.data.success) {
        message.error('获取用户列表失败');
      } else {
        data.value = res.data.data;
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      columns,
      data,
      SmileOutlined,
      DownOutlined,
    };
  },
});
</script>
