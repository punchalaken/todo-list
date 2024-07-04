<script setup lang="ts">
import ItemContentComponent from './MainContent/ItemContentComponent.vue';
import { useToDoStore } from '@/stores/ToDoStore';
import MainInputsComponent from './MainContent/MainInputsComponent.vue';
</script>

<template>
   <main class="mainContent">

        <MainInputsComponent/>

        <div class="mainContent-items" v-if="useToDoStore().$state.ToDo.length">
            <ItemContentComponent v-for="(item, index) in useToDoStore().$state.ToDo" :key="index"
            :name="item.name"
            :content="item.content"
            :dead-line="item.deadLine"
            :index="index"/>
        </div>    
        <div class="else" v-else>
            введите задачу
        </div>
   </main>
</template>

<style lang="scss" scoped>

.mainContent{
    min-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding-inline: 20px;
    gap: 20px;
}

.mainContent-items{
    box-sizing: border-box;
    min-width: 360px;
    width: 100%;
    max-width: 1000px;
}

.else{
    box-sizing: border-box;
    border: 2px solid black;
    background-color: black;
    color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    padding: 30px;
    font-size: 50px;

        @media screen and (width < 850px) {
            font-size: 40px;
        }

        @media screen and (width < 500px) {
            font-size: 25px;
        }
}

</style>
