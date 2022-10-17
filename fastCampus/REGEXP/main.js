const str = `
010-1234-5678
thesoha@gmail.com
https://soi-ha.github.io/
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`

console.log(
  str.match(/\b\w{2,3}\b/g)
)