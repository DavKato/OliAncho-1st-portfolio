export const state = () => ({
  selectedTag: 'all'
});

export const mutations = {
  selectTag(state, i) {
    state.selectedTag = i;
  }
};
