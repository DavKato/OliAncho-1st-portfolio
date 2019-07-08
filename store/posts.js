export const state = () => ({
  selectedTag: 'all'
});

export const mutations = {
  selectTag(state, i) {
    const tag = state.selectedTag;
    if (tag === i) {
      state.selectedTag = 'all';
    } else {
      state.selectedTag = i;
    }
  }
};
