<script lang="ts" setup>

const selectCourse = [
  {text: '前端框架应用项目开发', value: 0},
  {text: '专业技能综合实践(2024春季)', value: 1},
  {text: '24春季进销存系统设计与实现', value: 2},
  {text: '后端技术与项目开发', value: 3},
  {text: '软件测试技术', value: 4},
];


const taskType = [
  {text: 'Vue3开发初体验', value: '1'},
  {text: 'Vue3组件化开发', value: '2'},
  {text: 'Vue3路由的使用', value: '3'},
  {text: '电影列表项目', value: '4'},
  {text: 'Vue单元测试', value: '5'},
  {text: 'Vue动画化测试', value: '6'},
  {text: '状态管理Pinia', value: '7'},
  {text: '使用UI组件库', value: '8'}
];

const Class = [
  {text: '全部', value: '1'},
  {text: '22软件技术3班', value: '2'},
  {text: '21软件技术1班', value: '3'},
  {text: '22软件技术1班', value: '4'},
  {text: '20软件技术2班', value: '5'}
]

interface student {
  id: number
  Name: string
  score: number | undefined
  isCompleted: boolean
}

const students: student[] = [
  {
    id: 1,
    Name: '学生X',
    score: 95,
    isCompleted: true
  },
  {
    id: 2,
    Name: '学生X',
    score: 85,
    isCompleted: true
  },
  {
    id: 3,
    Name: '学生X',
    score: 75,
    isCompleted: true
  },
  {
    id: 4,
    Name: '学生X',
    score: 65,
    isCompleted: true
  },
  {
    id: 5,
    Name: '学生X',
    score: 55,
    isCompleted: true
  },
  {
    id: 6,
    Name: '学生X',
    score: undefined,
    isCompleted: false
  },
  {
    id: 7,
    Name: '学生X',
    score: 85,
    isCompleted: true
  },
  {
    id: 8,
    Name: '学生X',
    score: undefined,
    isCompleted: false
  },
  {
    id: 9,
    Name: '学生X',
    score: 85,
    isCompleted: true
  },
  {
    id: 10,
    Name: '学生X',
    score: 85,
    isCompleted: true
  },
  {
    id: 11,
    Name: '学生X',
    score: 85,
    isCompleted: true
  },
  {
    id: 12,
    Name: '学生X',
    score: 85,
    isCompleted: true
  }
]
</script>

<template>
  <van-search v-model="value" placeholder="搜索"/>
  <van-dropdown-menu>
    <van-dropdown-item :options="selectCourse" title="筛选"></van-dropdown-item>
    <van-dropdown-item :options="taskType" title="选择任务"></van-dropdown-item>
    <van-dropdown-item :options="Class" title="班级"></van-dropdown-item>
  </van-dropdown-menu>
  <div>任务: <span style="color: red;font-weight: 700">vue3开发初体验</span></div>
  <van-cell-group v-for="item in students" class="item">
    <van-cell :title="item.Name" :value="item.isCompleted?item.score:'未评分'"/>
    <van-cell title="完成情况:">
      <template #value>
        <van-button v-if="item.isCompleted" size="small">
          浏览作品
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