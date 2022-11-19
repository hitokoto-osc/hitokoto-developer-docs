/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChevronUp  } from '@fortawesome/free-solid-svg-icons'
import { EnhanceAppContext } from 'vitepress'

export function addFontAwesome(ctx: EnhanceAppContext): void {
  library.add(faChevronUp)
  ctx.app.component('FontAwesomeIcon', FontAwesomeIcon)
  ctx.app.component('font-awesome-icon', FontAwesomeIcon)
}
