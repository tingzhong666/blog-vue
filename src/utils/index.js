import anime from 'animejs'

export const animejs = function ({ easing, ...obj }) {
  return anime({
    easing: easing || 'easeInOutQuint',
    ...obj
  })
}

// 随机16进制 去掉淡色
export const hex = function () {
  const a = [4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  let b = []
  for (let i = 0; i < 6; i++) {
    b.push(a[Math.floor(Math.random() * 11 + 1)])
  }
  return `#${b[0]}${b[1]}${b[2]}${b[3]}${b[4]}${b[5]}`
}
