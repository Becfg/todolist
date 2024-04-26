import {defineStore} from "pinia";
import {computed, onMounted, ref, watch} from "vue";
import {Todo} from "../type/type";

export const todoStore = defineStore("todo", () => {
//默认不隐藏
    const hideCompleted = ref(false)

    const todos = ref<Todo[]>([])


    onMounted(() => {
        // 从缓存载入数据
        todos.value = JSON.parse(localStorage.getItem("todos") || "[]")

    })

    // 更新数据
    watch(todos, saveData, {deep: true})//深度监听
// 保存数据方法
    function saveData() {
        localStorage.setItem("todos", JSON.stringify(todos.value))
        console.log("save")
    }


// 隐藏已完成
    const filteredTodos = computed(() =>
        hideCompleted.value ?
            todos.value.filter((t) => !t.done) :
            todos.value
    )

// 删除todo
    function deleteTodo(id: number) {
        todos.value = todos.value.filter((item) => item.id !== id)
        console.log("del")
    }

// 清除已完成
    function clearAllDone() {
        todos.value = todos.value.filter((t) => !t.done)
    }

// 响应添加todo
    function handleAddTodo(title: string) {
        if (!title.trim()) {
            return alert("输入不能为空")
        }
        todos.value.unshift({
            id: Date.now(),
            title: title,
            done: false
        })
    }


    return {todos, hideCompleted, filteredTodos, deleteTodo, clearAllDone, handleAddTodo}

})