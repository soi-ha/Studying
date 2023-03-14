export function asyncFn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Done!')
    }, 6000)
  })
}