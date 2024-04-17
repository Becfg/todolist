import{mount} from "@vue/test-utils"

import app from "../App.vue"

let todoItems
let App

test("add a todo", async () => {
    App = mount(app)

    const txtInput = App.get('.todo-input')
    const addBtn = App.get('.add')

    for(let i=0;i<10;i++){
        txtInput.setValue("1234")
        await addBtn.trigger("click")
    }

    todoItems = App.findAll('.todo-item')

    expect(todoItems).toHaveLength(10)
})

test("delete a todo"),async ()=>{
    const delBtn = App.findAll('.del')
    
}

