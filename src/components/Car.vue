<template>
  <div class="car col-4">
    <router-link :to="{ name: 'CarDetails', params: { id: car.id } }">
      <div class="card row">
        <img class="card-img-top" :src="car.imgUrl" alt="" />
        <div class="card-body">
          <h4 class="card-title">
            {{ car.make }} | {{ car.model }}
          </h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'Car',
  props: {
    car: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    onMounted(() => {
      console.log(props.car)
    })
  }
}
</script>

<style lang="scss">
  .car {
    cursor: pointer;
  }
</style>
