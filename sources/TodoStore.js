import React, { Component, Fragment } from 'react'

class TodoStore {
    constructor() {
        this.todos = [];
        this.id_auto_increment = 0;
        this.channel = []
        console.log('111')
    }

    remainingTodosCount() {
        return this.todos.filter(
            todo => todo.status === false
        ).length;
    }

    toggle(id, status) {
        const found = this.todos.findIndex((todo) => todo.id == id)
        if(found >= 0) {
          this.todos[found].status = status;
          this.nofify()
        }
    }

    addTodo(task) {
        this.todos.push({
            name: task,
            status: false,
            id: ++this.id_auto_increment
        });
        this.nofify()
    }

    subcribe(callback) {
        this.channel.push(callback)
    }

    nofify() {
        this.channel.forEach((callback) => callback())
    }
}

export const todoStore = new TodoStore();

export function subscribe(component, dispatch) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.storeUpdate = this.storeUpdate.bind(this)
            todoStore.subcribe(() => this.storeUpdate())
            this.storeUpdate()
        }

        storeUpdate() {
            let state = {};
            Object.keys(dispatch).forEach((prop) => {
                state[prop] = dispatch[prop](todoStore)
            })
            this.setState(state)
        }

        render() {
          // Wraps the input component in a container, without mutating it. Good!
          return React.createElement(component, {...this.props, ...this.state});
        }
    }
}