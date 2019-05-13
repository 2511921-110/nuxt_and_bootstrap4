<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-120 col-120 mb-5">
        <div class="point point__number point__one">
          <h3 class="point__title" data-inverted="ここにポイントが入ります">
            ここにポイントが入ります
          </h3>
          <div class="point__description">
            ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。
          </div>
        </div>
      </div>

      <div class="col-md-120 col-120 mb-5">
        <div class="point point__number point__two">
          <h3 class="point__title" data-inverted="ここにポイントが入ります">
            ここにポイントが入ります
          </h3>
          <div class="point__description">
            ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。
          </div>
        </div>
      </div>

      <div class="col-md-120 col-120 mb-5">
        <div class="point point__number point__three">
          <h3 class="point__title" data-inverted="ここにポイントが入ります">
            ここにポイントが入ります
          </h3>
          <div class="point__description">
            ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。
          </div>
        </div>
      </div>

      <div class="col-md-120 col-120 mb-5">
        <div class="point point__number point__four">
          <h3 class="point__title" data-inverted="ここにポイントが入ります">
            ここにポイントが入ります
          </h3>
          <div class="point__description">
            ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。
          </div>
        </div>
      </div>

      <div class="col-md-120 col-120 mb-5">
        <div class="point point__number point__five">
          <h3 class="point__title" data-inverted="ここにポイントが入ります">
            ここにポイントが入ります
          </h3>
          <div class="point__description">
            ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。ここにポイントの内容が入ります。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.point{
  padding: 2em 1em;
  // background-color: #fff;
  box-shadow: 0px 0px 3px #ddd;
  position: relative;
  text-align: left;
  &:before{
    content:"";
    height: 150px;
    width: 150px;
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    background:
     linear-gradient(to bottom right,rgba(255,255,255,0) 50%, #f00 50.5%) no-repeat bottom left/100% 100%;
    z-index: -1;
  }
  &__title{
    font-size: 1vw;
    color: $main;
    margin-bottom: 0.5em;
    padding-bottom: 0.2em;
    border-bottom: solid 1px $purple;
    position: relative;
  }
  &__number{
    position: relative;
    &::after{
      color:#fff;
      font-size:85px;
      font-style: italic;
      position: absolute;
      right: 0;
      bottom: 5px;
      background: none;
      width: 100px;
      height: 100px;
      font-family: serif;
      text-align: center;
      z-index: -1;
    }
  }
  &__one{
    &::after{
      content:"1";
    }
  }
  &__two{
    &::after{
      content:"2";
    }
  }
  &__three{
    &::after{
      content:"3";
    }
  }
  &__four{
    &::after{
      content:"4";
    }
  }
  &__five{
    &::after{
      content:"5";
    }
  }
}
.col-40{
  border-left: solid 1px $grey;
  &:nth-child(1),
  &:nth-child(4){
    border: none;
  }
}
</style>
