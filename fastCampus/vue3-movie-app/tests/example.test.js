import { mount } from '@vue/test-utils';
import Example from './Example.vue';

test('메세지를 변경합니다',async () => {
  const wrapper = mount(Example)
  // wrapper.vm == this
  expect(wrapper.vm.msg).toBe('Hello Vue Test Utils!')
  // wrapper.vm.msg = 'Hello Soha!'
  await wrapper.setData({
    msg: 'Hello Soha!'
  })
  expect(wrapper.vm.msg).toBe('Hello Soha!')
  expect(wrapper.find('div').text()).toBe('Hello Soha!')
} )