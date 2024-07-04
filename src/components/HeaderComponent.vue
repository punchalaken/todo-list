<script setup lang="ts">
import { ref } from 'vue';

let easterOn = ref('')

function easterTurnOn(){
    easterOn.value = 'On'
    setTimeout(() => {
        easterOn.value = ''
    }, 2000)
}

</script>

<template>
    <header>
        <div class="header-easter">
            <img 
                src="../assets/images/headerImage.png" 
                alt='Мотивационная картинка' 
                @click="easterTurnOn">
            <div class="header-description" v-if="easterOn">
                ЗА РАБОТУ!
            </div>
        </div>
        <h1>
            Что я должен сделать:
        </h1>
    </header>
</template>

<style lang="scss" scoped>

header{
    min-width: 360px;
    height: 80px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center; 
}

img{
    margin-right: 20px;
    position: relative;
}

h1{
    font-size: 60px;
        @media screen and (width < 850px) {
            font-size: 40px;
        }

        @media screen and (width < 500px) {
            font-size: 25px;
        }
}

.header-description {
    position: absolute;
    box-sizing: border-box;
    border: 2px solid black;
    border-radius: 10px;
    width: 140px;
    top: 70px;
    padding: 10px;
    font-size: 20px;
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
}

</style>
