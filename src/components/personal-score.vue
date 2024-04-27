<script lang="ts" setup>
import {ref} from "vue"

const value = ref()

const selectCourse = [
  {text: '前端框架应用项目开发', value: 0},
  {text: '专业技能综合实践(2024春季)', value: 1},
  {text: '24春季进销存系统设计与实现', value: 2},
  {text: '后端技术与项目开发', value: 3},
  {text: '软件测试技术', value: 4},
];


const taskType = [
  {text: '全部', value: 'a'},
  {text: '刷题', value: 'b'},
  {text: '作品', value: 'c'},
];

interface Courses {
  id: number
  taskName: string
  score: number | undefined
  isCompleted: boolean
}

const Courses: Courses[] = [
  {
    id: 1,
    taskName: 'Vue3开发初体验',
    score: 95,
    isCompleted: true
  },
  {
    id: 2,
    taskName: 'Vue3组件化开发',
    score: 85,
    isCompleted: true
  },
  {
    id: 3,
    taskName: 'Vue前端基础刷题',
    score: 75,
    isCompleted: true
  },
  {
    id: 4,
    taskName: 'Vue3路由的使用',
    score: 65,
    isCompleted: true
  },
  {
    id: 5,
    taskName: '电影列表项目',
    score: 55,
    isCompleted: true
  },
  {
    id: 6,
    taskName: 'Vue自动化测试',
    score: undefined,
    isCompleted: false
  },
  {
    id: 7,
    taskName: '状态管理Pinia',
    score: 85,
    isCompleted: true
  },
  {
    id: 8,
    taskName: '使用UI组件库',
    score: undefined,
    isCompleted: false
  },
  {
    id: 9,
    taskName: '状态管理Pinia',
    score: 85,
    isCompleted: true
  },
  {
    id: 10,
    taskName: '状态管理Pinia',
    score: 85,
    isCompleted: true
  },
  {
    id: 11,
    taskName: '状态管理Pinia',
    score: 85,
    isCompleted: true
  },
  {
    id: 12,
    taskName: '状态管理Pinia',
    score: 85,
    isCompleted: true
  }
]
</script>

<template>
  <van-search v-model="value" placeholder="搜索"/>
  <van-dropdown-menu>
    <van-dropdown-item :options="selectCourse" title="选择课程"></van-dropdown-item>
    <van-dropdown-item :options="taskType" title="任务类型"></van-dropdown-item>
  </van-dropdown-menu>
  <van-divider>测试 testtest</van-divider>
  <van-cell-group v-for="item in Courses" class="item">
    <van-cell :title="item.taskName" :value="item.isCompleted?item.score:'未评分'"/>
    <van-cell title="完成情况:">
      <template #value>
        <van-button v-if="item.isCompleted" size="small
">浏览作品
        </van-button>
        <div v-else style="color: red">未提交</div>
      </template>
    </van-cell>
  </van-cell-group>

</template>

<style scoped>
.item {
  margin-top: 10px;
}
</style>