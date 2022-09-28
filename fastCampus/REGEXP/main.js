const str = `
010-1234-5678
thesoha@gmail.com
https://soi-ha.github.io/
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the','gi')
const regexp = /the/gi
console.log(str.match(regexp))