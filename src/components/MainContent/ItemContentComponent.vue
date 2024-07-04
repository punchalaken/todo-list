<script setup lang="ts">
import { useToDoStore } from '@/stores/ToDoStore';

defineProps<{
  name: string
  content: string
  deadLine: string
  index: number
}>()

</script>

<template>
    <div class="mainConteiner-item">
        <div class="item-header">
        {{ name }}
        <div class="item-check">
            <img 
                width="45px"
                height="35px"
                src="/src/assets/images/check-mark.png" 
                alt="Задача выполнена" 
                @click="useToDoStore().delToDo(index)">
            <img 
                src="/src/assets/images/сross.png" 
                alt="Удалить задачу" 
                @click="useToDoStore().delToDo(index)">
            </div>
        </div>
        <div class="item-content">
            {{ content }}
            <div class="item-deadLine">
                Сделать до: <strong>{{ deadLine }}</strong>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

.mainConteiner-item{
    border: 2px solid black;
    border-radius: 10px;
    margin-bottom: 20px;
}

.item-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    min-height: 40px;
    padding: 10px;
    font-size: 28px;
    hyphens: auto;
    @media screen and (width < 850px) {
        font-size: 22px;
    }
}

.item-check{
    display: flex;
    justify-content: space-between;
    width: 100px;
}

img:hover{
    cursor: pointer;
}

.item-content{
    position: relative;
    padding: 20px 20px 40px;
    font-size: 20px;
    @media screen and (width < 850px) {
        font-size: 18px;
    }
}

.item-deadLine{
    position: absolute;
    bottom: 15px;
    right: 15px;
    font-size: 15px;
}

</style>
