<template>
  <div class="home-bg-money-wrapper">
    <div v-for="(items,index) in moneyDivs" :key="index" class="home-bg-money"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FallingMoney",
  setup() {
    let maxMoneyAmount = 0
    const width = document.body.clientWidth
    width <= 500 ? maxMoneyAmount = 100 : maxMoneyAmount = 200
    const moneyDivs = []
    for (let i = 0; i < maxMoneyAmount; i++) {
      moneyDivs.push(i)
    }
    return {moneyDivs}
  }
}
</script>

<style lang="scss" scoped>

//random
@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min)+1));
  @return $random_range;
}

.home-bg-money {
  $total: 200;
  position: absolute;
  width: 30px;
  height: 30px;
  background-size: cover;

  @for $i from 1 through $total {
    $random-x: random(1000000) * 0.00009vw;
    $random-scale: random(1000) * 0.001;
    $fall-duration: random_range(5, 15) * 1s;
    $fall-delay: random(30) * -1s;
    $rotate: random(360) * 1deg;

    $random-img: ceil(random(3));

    &:nth-child(#{$i}) {
      background-image: url(https://img.bald3r.wang/img/rich-ui-falling-money-#{$random-img}.svg);
      opacity: random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      80% {
        transform: translate($random-x, 85vh) scale($random-scale) rotate($rotate);
        opacity: random(10000) * 0.0001;
      }
      100% {
        transform: translate($random-x, 95vh) scale($random-scale) rotate($rotate);
        opacity: 0;
      }
    }
  }
}

</style>