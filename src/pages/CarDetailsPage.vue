<template>
  <div class="car-details">
    <h1>Welcome to car details</h1>
    <div class="row">
      <div class="col-6 ">
        <div class=" row mb-3 justify-content-between">
          <div class="col">
            <h1>{{ car.make }} | {{ car.model }}</h1>
            <h3>{{ car.year }}</h3>
          </div>
        </div>
        <div class="row mt-5">
          <div class=" ml-5 text-left col border-left">
            <p>{{ car.description }}</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <h3>
              ${{ car.price }}
            </h3>
          </div>
          <button @click="remove">
            Buy Car
          </button>
        </div>
      </div>
      <div class="col-6">
        <img v-if="state.loaded" :src="car.imgUrl" alt="" />
        <h1 v-else>
          Loading...
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
// IMPORTANT REVIEW
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      loaded: false
    })
    onMounted(async() => {
      try {
        await carsService.getOne(route.params.id)
      } catch (error) {
        console.error(error)
      } finally {
        state.loaded = true
      }
    })
    return {
      state,
      car: computed(() => AppState.activeCar),
      remove(id) {
        console.log('hey')
        carsService.delete(this.car.id)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.car-details {
 height: 70vh;
}
img {
  max-width:100%;
  max-height:100%;
}

</style>
