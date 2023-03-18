import { mount } from '@vue/test-utils';
import router from '~/routes'
import store from '~/store'
import Header from '~/components/Header'

describe('components/Header.vue', () => {
  let wrapper
  beforeEach(async () => {
    window.scrollTo = jest.fn()
    router.push('/movie/tt1234567')
    await router.isReady()
    wrapper = mount(Header, {
      global: {
        plugins: [
          router,
          store
        ]
      }
    })
  })
  test('경로 정규표현식이 없는 경우 일치하지 않습니다', () => {
    const regExp = undefined
    expect(wrapper.vm.isMatch(regExp)).toBe(false)
  })

  test('경로 정규표현식과 일치해야 합니다', () => {
    const regExp = /^\/movie/
    expect(wrapper.vm.isMatch(regExp)).toBe(true)
  })

  test('경로 정규표현식과 일치하지 않아야 합니다', () => {
    const regExp = /^\/soha/
    expect(wrapper.vm.isMatch(regExp)).toBe(false)
  })
})