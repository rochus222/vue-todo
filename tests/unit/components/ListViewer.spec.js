// https://vue-test-utils.vuejs.org/

import { mount } from "@vue/test-utils";
import ListViewer from "@/components/ListViewer.vue";

describe("ListViewer.vue", () => {
  it("sets title to header div", () => {
    const title = "some title";
    const wrapper = mount(ListViewer, {
      propsData: { title, items: [], link: false }
    });
    expect(wrapper.find('.header').element.innerHTML).toBe(title);    
  });

  it("renders items", () => {
    const title = "some title";
    const items = ["item1", "item2"];
    const wrapper = mount(ListViewer, {
      propsData: { title, items, link: false }
    });
    const elements = wrapper.findAll('.item');
    expect(elements.at(0).find('.col-10').element.innerHTML).toBe(items[0]);
    expect(elements.at(1).find('.col-10').element.innerHTML).toBe(items[1]);
  });
});
