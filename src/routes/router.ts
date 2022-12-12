import { ExpressType } from '../types'
import CitiesRoutes from './Cities.routes'
import TypesRoutes from './Types.routes'
import RestrictionsRoutes from './Restrictions.routes'
import EmailRoutes from './Email.routes'

export function router (app: ExpressType): void {
  app.get('/', (_, res) => {
    res.json({
      name: app.get('pkg').name,
      author: app.get('pkg').author,
      description: app.get('pkg').description,
      version: app.get('pkg').version
    })
  })

  app.use('/api/cities', CitiesRoutes())
  app.use('/api/types', TypesRoutes())
  app.use('/api/restrictions', RestrictionsRoutes())
  app.use('/api/email', EmailRoutes())
}