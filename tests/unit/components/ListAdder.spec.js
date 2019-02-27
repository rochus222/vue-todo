// https://vue-test-utils.vuejs.org/

import { shallowMount } from "@vue/test-utils";
import ListAdder from "@/components/ListAdder.vue";

describe("ListAdder.vue", () => {
  it("emmits input", () => {
    const item = "some title";
    const wrapper = shallowMount(ListAdder);
    wrapper.find('input').element.value = item
    wrapper.find('input').trigger('input')
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('new')[0]).toEqual([item]);    
  });
});
