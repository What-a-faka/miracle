import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

export default {
  install(Vue, { host }) {
    if (process.env.NODE_ENV !== 'development') {
      Raven.config(host)
        .addPlugin(RavenVue, Vue)
        .install()

      // eslint-disable-next-line
      Vue.config.errorHandler = (err) => {
        Raven.captureException(err)
      }
    }
  },
}
