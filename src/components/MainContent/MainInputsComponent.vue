<script setup lang="ts">
import { useToDoStore } from '@/stores/ToDoStore';
import { ref } from 'vue';

const name = ref('');
const content = ref('');
const deadLine = ref('');
const nameError = ref(false);
const contentError = ref(false);
const deadLineError = ref(false);
const nowDate = ():string => {
            let nowDate = new Date();
            let year = nowDate.getFullYear();
            let month = (nowDate.getMonth() + 1).toString().padStart(2, '0');
            let day = nowDate.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        };

function addToDo():void {
    if (!name.value.trim()) {
        nameError.value = true;
    } else {
        nameError.value = false;
    }
    if (!content.value.trim()) {
        contentError.value = true;
    } else {
        contentError.value = false;
    }
    if (!deadLine.value) {
        deadLineError.value = true;
    } else {
        deadLineError.value = false;
    }
    if (!nameError.value && !contentError.value && !deadLineError.value) {
        useToDoStore().addToDo(name.value, content.value, deadLine.value);
        name.value = '';
        content.value = '';
        deadLine.value = '';
    }
}
</script>

<template>
    <form>
        <div class="form-inputs">
            <div>
                <label for="name">Название задачи:</label>
                <div v-if="nameError" class="error">Обязательное поле</div>
                <input type="text" id="name" v-model="name">
            </div>

            <div>
                <label for="deadLine">Дед Лайн:</label>
                <div v-if="deadLineError" class="error">Обязательное поле</div>
                <input 
                    type="date" 
                    :min='nowDate()'
                    id="deadLine" 
                    v-model="deadLine">
            </div>
        </div>

        <div class="form-textarea">
            <label for="content">Описание задачи</label>
            <div v-if="contentError" class="error">Обязательное поле</div>
            <textarea name="content" id="content" maxlength="800" v-model="content"></textarea>
        </div>
    </form>

    <button type="button" class="addButton" @click="addToDo">Добавить задачу</button>
</template>

<style lang="scss" scoped>
form{
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
        label{
            font-size: 20px;
        }
    
        .form-inputs{
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            @media screen and (width < 850px) {
            gap: 20px;
                }

            div{
                display: flex;
                flex-direction: column;
            }
        }

        .form-textarea{
            display: flex;
            flex-direction: column;
            textarea{
                width: 500px;
                height: 200px;
                @media screen and (width < 550px) {
                    width: 320px;
                }
            }
        }

        @media screen and (width < 850px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
        }
}

label{
    margin-bottom: 10px;
}

input{
    border: 2px solid rgb(0, 0, 0);
    width: 320px;
    height: 40px
}

textarea{
    border: 2px solid rgb(0, 0, 0);
    resize: none;
}

.addButton{
    width: 300px;
    height: 50px;
    background-color: rgb(0, 0, 0);
    border: none;
    border-radius: 20px;
    font-size: 25px;
    color: white;
}

.error{
    font-size: 14px;
    color: red;
}
</style>
