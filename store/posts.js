export const state = () => ({
  selectedTag: 'all'
});

export const mutations = {
  selectTag(state, i) {
    const tag = state.selectedTag;
    if (tag === i.tag && i.reset) {
      state.selectedTag = 'all';
      return;
    } else {
      state.selectedTag = i.tag;
      return;
    }
  }
};
