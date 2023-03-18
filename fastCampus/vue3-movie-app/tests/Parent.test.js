import { shallowMount } from '@vue/test-utils';
import Parent from './Parent'

test('Mount', () => {
  const wrapper = shallowMount(Parent)
  expect(wrapper.html()).toBe('')
})