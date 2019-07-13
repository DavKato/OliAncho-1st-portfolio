export const state = () => ({
  toBagus: false,
  toContact: false
});
export const mutations = {
  toBagus(state) {
    state.toBagus = !state.toBagus;
  },
  toContact(state) {
    state.toContact = !state.toContact;
  }
};
