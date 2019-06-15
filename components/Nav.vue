<template>
  <ul class="nav">
    <li>
      <a href="#">HOME</a>
      <ul class="nav__sub">
        <li>
          <a href="#">SUB</a>
        </li>
        <li>
          <a href="#">SUB</a>
        </li>
        <li>
          <a href="#">SUB</a>
        </li>
        <li>
          <a href="#">SUB</a>
        </li>
      </ul>
    </li>
    <li><a href="#">ABOUT</a></li>
    <li><a href="#">MENU</a></li>
    <li><a href="#">CONCEPT</a></li>
    <li><a href="#">INFO</a></li>
    <li><a href="#">CONTACT</a></li>
    <li><a href="#">GREETING</a></li>
  </ul>
</template>

<style lang="scss" scoped>
.nav{
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  ul{
    padding: 0;
  }
  a{
    padding: 0 1em;
    text-align: center;
  }
  li{
    position: relative;
    list-style: none;
    &:hover{
      ul{
        height: 100px;
      }
    }
  }
  &__sub{
    position: absolute;
    transition: all 0.3s ease-in-out;
    left: 0;
    height: 0;
    width: 100%;
    overflow: hidden;
  }
}
</style>
