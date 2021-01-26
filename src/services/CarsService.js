import { AppState } from '../AppState'
import { api } from './AxiosService'

class CarsService {
  async getCars() {
    // fetch data
    const res = await api.get('cars')
    // add to AppState
    AppState.cars = res.data
  }

  async getOne(id) {
    const res = await api.get(`cars/${id}`)
    AppState.activeCar = res.data
  }

  async create(car) {
    console.log(car)
    const res = await api.post('cars', car)
    AppState.cars.push(res.data)
    return res.data.id
  }

  async delete(id) {
    await api.delete(`cars/${id}`)
    AppState.cars = AppState.cars.filter(c => c.id !== id)
  }
}

export const carsService = new CarsService()
