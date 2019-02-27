<template>
  <div class="home">
    <div class="header">Erni Todo App</div>
    <ListAdder @new="addTodoList" />
    <ListViewer title="Lists" :items="getTodoLists" link="/todo/"/>
  </div>
</template>scoped

<script src="./Home.js"></script>

<style lang="less" src="./Home.less" scoped></style>
