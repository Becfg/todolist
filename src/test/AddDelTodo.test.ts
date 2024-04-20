import { mount } from "@vue/test-utils"

import app from "../App.vue"

//挂载app
let App = mount(app)

let todoItems

let checkBox

let loop = 5

test("add a todo", async () => {
  //获取输入
  const txtInput = App.get('.todo-input')

  //获取添加todo
  const addBtn = App.get('.add')

  //添加10个todo
  for (let i = 0; i < loop; i++) {
    await txtInput.setValue(i)
    await addBtn.trigger("click")
  }
  todoItems = App.findAll('.todo-item')

  //检测todo数
  expect(todoItems).toHaveLength(loop)
})

test("delete a todo", async () => {

  //获取删除todo按钮
  const delBtn = App.findAll('.del')[0]

  //点击删除todo
  await delBtn.trigger("click")

  todoItems = App.findAll('.todo-item')

  //检测todo数
  expect(todoItems).toHaveLength(loop - 1)
})

test("edit todo", async () => {

  //获取勾选框
  let checkBox = App.findAll('.todo-item > input')

  //勾选完成第3个todo
  await checkBox[2].setChecked()

  //检查勾选
  expect(checkBox[2].element.checked).toBe(true)

})


test("delete all todo", async () => {
  //勾选全部todo
  checkBox = App.findAll(' . todo - item > input :not( :checked)')
  checkBox.forEach((todo) => {
    todo.setChecked()
  })

  //获取被勾选todo数
  expect(App.findAll(" . todo-item > input[type='checkbox' ]: checked").length).toBe(loop - 1)

  //获取删除已完成按钮
  const delAllBtn = App.find(' . clearAllDone ')
  expect(delAllBtn.exists()).toBe(true)
  await delAllBtn.trigger("click")
  todoItems = App.findAll(' . todo- item')

  //检测todo数
  expect(todoItems).toHaveLength(0)
})

