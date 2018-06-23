<template>
<mu-appbar class="story-search">
  <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
  <mu-flat-button color="white" label="Search" slot="right"/>
</mu-appbar>
</template>

<style lang="less">
.story-search {
  position: fixed;
  top: 0;
}
.story-search:after {
  clear: both;
  display: table;
  content: "";
}
.appbar-search-field{
  // width: 100%;
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
</style>