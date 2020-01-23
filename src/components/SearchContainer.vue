<template>
  <div class="container search">
    <h1>Search here</h1>
    <font-awesome-icon class="search_icon" icon="search"/>
    <div class="search_box">
      <input placeholder="Search...">
      <button type="button">&#10132;</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  display: inline-block;
  padding: 3rem 0 1rem 0;
  text-transform: uppercase;
}

input {
  width: 50%;
  border: 2px solid rgb(18, 168, 106);
  border-radius: 4px;
  height: 45px;
  font-size: 1.2rem;
  color:#2c3e50;
  padding-left: 15px;
  padding-right: 3rem;
  outline: none;

  &:focus {
  border: 3px solid rgb(0, 255, 149);
  }
}

button {
  background-color: transparent;
  border-color: transparent;
  font-size: 2rem;
  position: relative;
  color: #2c3e50;
  right: 3rem;
  top: 0.4rem;
  cursor: pointer;
}

.search {
  align-items: center;
  background-color: rgb(243, 239, 234);
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 2.5rem;

  &_box {
    position: relative;
  }

  &_icon {
    display: inline-block;
    font-size: 2.5rem;
    margin-left: 1rem;
    color:  rgb(0, 255, 149);
  }
}
</style>
