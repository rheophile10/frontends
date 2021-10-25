import { mapGetters } from 'vuex'

export const authComputed = {
  ...mapGetters(['loggedIn']),
}

export const authErrorComputed = {
  ...mapGetters(['authError']),
}
