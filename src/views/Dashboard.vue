<template>
        <div class="container">
            <h1 class="is-size-1 has-text-centered">My Tasks</h1>
            <ul>
                <li v-for="(task, index) in filteredTasks" :key="index">
                    <div class="columns">
                        <div class="column is-1">
                                <div class="checkbox-container circular-container">
                                    <label class="checkbox-label">
                                        <input v-model="task.completed" @click="editTask(task)" type="checkbox">
                                        <span class="checkbox-custom circular"></span>
                                    </label>
                                </div>
                        </div>
                        <div class="column is-10">
                            <p class="px-2" :class="[task.completed ? 'completed' : '']">{{task.description}}</p>
                        </div>
                        <div class="column is-1">
                        <b-button type="is-danger is-small" @click="deleteTask(task)" rounded>X</b-button>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="columns">
                <div class="column is-12">
                <b-field>
                    <b-input 
                        id="taskInput"
                        type="textarea" 
                        placeholder="What needs to be done?" 
                        v-model="newTask" 
                        @keyup.enter.native="addTask" 
                        rounded>
                    </b-input>
                </b-field>
                </div>

            </div>
            <div class="buttons">
                <b-button name="completeAll" @click="completeAll(tasks)">Complete All</b-button>
                <b-button @click="filterTasks('complete')">Completed</b-button>
                <b-button @click="filterTasks('incomplete')">Todo</b-button>
                <b-button @click="filterTasks('all')">All</b-button>
            </div>
        </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                newTask: '',
                editedTask: null,
                tasks: [],
                filteredTasks: [],
            }
        },
        methods: {
            addTask() {
                axios
                    .post('https://morishita-task-app.herokuapp.com/tasks', {
                        description: this.newTask
                    }).then((res) => {
                        this.tasks.push(res.data)
                        this.newTask = ''
                    }).catch((error) => {
                        console.log(error)
                    })

                        const input = document.querySelector('#taskInput')
                        input.textContent = 'asdads'
            },
            editTask(task) {
                task.completed = !task.completed
                axios
                    .patch('https://morishita-task-app.herokuapp.com/tasks/' + task._id, {
                        description: task.description,
                        completed: task.completed,
                    }).then((res) => {
                        task = res.data
                        task.completed = res.data.completed
                    }).catch((e) => {
                        console.log(e)
                    })
            },
            filterTasks(input) {
                if (input === 'complete') {
                    this.filteredTasks = this.tasks.filter((task) => {
                        return task.completed === true
                    })
                } else if (input === 'incomplete') {
                    return this.filteredTasks = this.tasks.filter((task) => {
                        return task.completed === false
                    })
                } else {
                    return this.filteredTasks = this.tasks
                }
            },
            deleteTask(task) {
                const taskIndex = this.tasks.indexOf(task)
                this.tasks.splice(taskIndex, 1)
                axios
                    .delete('https://morishita-task-app.herokuapp.com/tasks/' + task._id)
                    .then((res) => {
                    }).catch((e) => {
                        console.log(e)
                    })
            },
            completeAll(tasks) {
                let task = ''
                for (task of tasks) {
                    task.completed = true
                    axios
                        .patch('https://morishita-task-app.herokuapp.com/tasks/' + task._id, {
                            description: task.description,
                            completed: task.completed,
                        }).then((res) => {
                            task = res.data
                        }).catch((e) => {
                            console.log(e)
                        })
                }
            }
        },
        computed: {},
        watch: {
            tasks(newTasks) {
                this.tasks = newTasks
            }
        },
        created() {
            axios.get('https://morishita-task-app.herokuapp.com/tasks')
                .then((res) => {
                    this.filteredTasks = res.data
                    this.tasks = res.data
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }
</script>

<style lang="scss">
    p.completed{
        color: #d9d9d9;
        text-decoration: line-through;
    }

    .input-title {
        clear: both;
        padding: 22px 0px 0px 0px;
        font-size: 16px;
        color: rgba(255, 255, 255, .6);
        font-weight: 300;
    }

    /* Styling Checkbox Starts */
    .checkbox-label {
        display: block;
        position: relative;
        margin: auto;
        cursor: pointer;
        font-size: 22px;
        line-height: 24px;
        height: 24px;
        width: 24px;
        clear: both;
    }

    .checkbox-label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkbox-label .checkbox-custom {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 24px;
        width: 24px;
        background-color: transparent;
        border-radius: 5px;
        transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        border: 2px solid #FFFFFF;
    }

    .checkbox-label input:checked~.checkbox-custom {
        background-color: #FFFFFF;
        border-radius: 5px;
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
        opacity: 1;
        border: 2px solid #FFFFFF;
    }


    .checkbox-label .checkbox-custom::after {
        position: absolute;
        content: "";
        left: 12px;
        top: 12px;
        height: 0px;
        width: 0px;
        border-radius: 5px;
        border: solid #009BFF;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(0deg) scale(0);
        -ms-transform: rotate(0deg) scale(0);
        transform: rotate(0deg) scale(0);
        opacity: 1;
        transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
    }

    .checkbox-label input:checked~.checkbox-custom::after {
        -webkit-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
        opacity: 1;
        left: 8px;
        top: 3px;
        width: 6px;
        height: 12px;
        border: solid #009BFF;
        border-width: 0 2px 2px 0;
        background-color: transparent;
        border-radius: 0;
    }

    /* For Ripple Effect */
    .checkbox-label .checkbox-custom::before {
        position: absolute;
        content: "";
        left: 10px;
        top: 10px;
        width: 0px;
        height: 0px;
        border-radius: 5px;
        border: 2px solid #FFFFFF;
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
    }

    .checkbox-label input:checked~.checkbox-custom::before {
        left: -3px;
        top: -3px;
        width: 24px;
        height: 24px;
        border-radius: 5px;
        -webkit-transform: scale(3);
        -ms-transform: scale(3);
        transform: scale(3);
        opacity: 0;
        z-index: 999;
        transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
    }

    /* Style for Circular Checkbox */
    .checkbox-label .checkbox-custom.circular {
        border-radius: 50%;
        border: 2px solid #FFFFFF;
    }

    .checkbox-label input:checked~.checkbox-custom.circular {
        background-color: #FFFFFF;
        border-radius: 50%;
        border: 2px solid #FFFFFF;
    }

    .checkbox-label input:checked~.checkbox-custom.circular::after {
        border: solid #596e79;
        border-width: 0 2px 2px 0;
    }

    .checkbox-label .checkbox-custom.circular::after {
        border-radius: 50%;
    }

    .checkbox-label .checkbox-custom.circular::before {
        border-radius: 50%;
        border: 2px solid #FFFFFF;
    }

    .checkbox-label input:checked~.checkbox-custom.circular::before {
        border-radius: 50%;
    }
</style>