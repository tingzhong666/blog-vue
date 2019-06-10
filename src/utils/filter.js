import Vue from 'vue'

Vue.filter('time', (value) => {
  const date = new Date(value)
  let y = date.getFullYear()
  let m = (date.getMonth() + 1 + '').padStart(2, '0')
  let d = (date.getDate() + '').padStart(2, '0')
  let h = (date.getHours() + '').padStart(2, '0')
  let min = (date.getMinutes() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${h}:${min}`
})
