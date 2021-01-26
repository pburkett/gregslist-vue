<template>
  <div class="houses-page ">
    <div class="row">
      <div class="col text-center">
        <h1>Ho<img alt="Vue logo" src="../assets/logo.png" class="logo" />ses</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form @submit.prevent="createHouse">
          <div class="form-group-inline">
            <div class="row mt-3 justify-content-center">
              <div class="input-div mx-2">
                <input
                  type="text"
                  name="bedrooms"
                  id="bedrooms"
                  v-model="state.newHouse.bedrooms"
                  class="form-control"
                  placeholder="Bedrooms..."
                  aria-describedby="helpId"
                />
              </div>
              <div class="input-div mx-2">
                <input
                  type="text"
                  name="bathrooms"
                  id="bathrooms"
                  v-model="state.newHouse.bathrooms"
                  class="form-control"
                  placeholder="Bathrooms..."
                  aria-describedby="helpId"
                />
              </div>
              <div class="input-div mx-2">
                <input
                  type="text"
                  name="levels"
                  id="levels"
                  v-model="state.newHouse.levels"
                  class="form-control"
                  placeholder="Levels..."
                  aria-describedby="helpId"
                />
              </div>
              <div class="input-div mx-2">
                <input
                  type="text"
                  name="year"
                  id="year"
                  v-model="state.newHouse.year"
                  class="form-control"
                  placeholder="Year..."
                  aria-describedby="helpId"
                />
              </div>
              <div class="input-div mx-2">
                <input
                  type="text"
                  name="price"
                  id="price"
                  v-model="state.newHouse.price"
                  class="form-control"
                  placeholder="Price..."
                  aria-describedby="helpId"
                />
              </div>
            </div>
            <div class="row my-3 justify-content-center">
              <div class="textarea-div mx-2">
                <textarea

                  name="description"
                  id="description"
                  v-model="state.newHouse.description"
                  class="form-control"
                  placeholder="Description..."
                  aria-describedby="helpId"
                />
              </div>
              <div class="textarea-div mx-2">
                <textarea

                  name="imgUrl"
                  id="imgUrl"
                  v-model="state.newHouse.imgUrl"
                  class="form-control"
                  placeholder="Image URL..."
                  aria-describedby="helpId"
                />
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-success">
            Add House
          </button>
        </form>

        <div class="row">
          <House v-for="house in houses" :key="house.id" :house="house" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import House from '../components/House.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'HousesPage',
  setup() {
    const router = useRouter()
    const state = reactive({
      newHouse: {}
    })

    // NOTE on mounted gets called when the page is first mounted to the dom (similar to constructors)
    onMounted(() => {
      try {
        housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,
      // if data changes dynimcally in the appstate use a computed
      houses: computed(() => AppState.houses),

      async createHouse() {
        try {
          const id = await housesService.create(state.newHouse)
          state.newHouse = {}
          // change route in javascript using router.push()
          router.push({ name: 'HouseDetails', params: { id } })
        } catch (error) {
          console.error(error)
        }
      }

    }
  },
  components: {
    House
  }
}
</script>

<style lang="scss" scoped>
  .logo {
   height: 1em
  }
 .input-div {
    width: 150px;
  }
  .textarea-div {
    width: 300px;
  }
  textarea {
    height: 125px;
  }
  .houses-page {
    flex-grow: 1;
  }

</style>
