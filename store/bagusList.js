export const state = () => ({
  list: [
    {
      title: 'about',
      imgCol: 'about-pic-color',
      imgMono: 'about-pic-mono',
      glassL: 'glass-blue-gross',
      glassS: 'glass-blue-klein',
      hover: false,
      active: false
    },
    {
      title: 'works',
      imgCol: 'works-pic-color',
      imgMono: 'works-pic-mono',
      glassL: 'glass-green-gross',
      glassS: 'glass-green-klein',
      hover: false,
      active: false
    },
    {
      title: 'blog',
      imgCol: 'blog-pic-color',
      imgMono: 'blog-pic-mono',
      glassL: 'glass-red-gross',
      glassS: 'glass-red-klein',
      hover: false,
      active: false
    },
    {
      title: 'location',
      imgCol: 'location-pic-color',
      imgMono: 'location-pic-mono',
      glassL: 'glass-blue-gross',
      glassS: 'glass-blue-klein',
      hover: false,
      active: false
    }
  ]
});

export const mutations = {
  hovered(state, i) {
    state.list[i].hover = state.list[i].hover = true;
  },
  unHovered(state, i) {
    state.list[i].hover = state.list[i].hover = false;
  },
  activated(state, i) {
    state.list[i].active = state.list[i].active = true;
  },
  deActivated(state, i) {
    state.list[i].active = state.list[i].active = false;
  }
};
