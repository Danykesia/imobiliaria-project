<template>
  <div class="search">
    <h1>Search here</h1>
    <div class="search_box">
      <input placeholder="Search...">
      <button type="button">
        <font-awesome-icon class="search_icon" icon="search"/>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  display: inline-block;
  padding-top: 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
}

input {
  width: 50%;
  border: 2px solid rgb(18, 168, 106);
  border-radius: 4px;
  height: 45px;
  font-size: 1rem;
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
  font-size: 1.5rem;
  color: #2c3e50;
  right: 3rem;
  margin-top: .4rem;
  margin-left: .5rem;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #1567b4;
  }
}

.search {
  align-items: center;
  background-color: rgb(243, 239, 234);
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 60px;

  &_box {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 768px) {
  .search {
    padding: 60px;
  }
}
</style>
