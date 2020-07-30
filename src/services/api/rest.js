// https://codeburst.io/how-to-call-api-in-a-smart-way-2ca572c6fe86
// https://github.com/FrancescoSaverioZuppichini/API-Class

const axios = require('axios')

function kebabCaseToCamel(str) {
  return str.replace(/(-\w)/g, (matches) => matches[1].toUpperCase())
  // return str.replace( /(\-\w)/g, (matches) => matches[1].toUpperCase())
}

class Rest {
  constructor({ url }) {
    this.url = url
    this.endpoints = {}
  }
  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity
   */
  createEntity(entity) {
    /**
     * If there is a - in the entity.name, then change it 
     * to camelCase. E.g 
     * ```
     * myApi.createEntity({ name : 'foo-bar'})
     * myApi.endpoints.fooBar.getAll(...)
     */

    const name = kebabCaseToCamel(entity.name)
    this.endpoints[name] = this.createBasicCRUDEndpoints(entity)
  }

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this))
  }
  /**
   * Create the basic endpoints handlers for CRUD operations
   * @param {A entity Object} entity
   */
  createBasicCRUDEndpoints({ path }) {
    var endpoints = {}

    const resourceURL = `${this.url}${path}`

    endpoints.getAll = (config = {}) => axios.get(resourceURL, config)

    endpoints.getOne = ({ id }, config = {}) => axios.get(`${resourceURL}/${id}`, config)

    endpoints.create = (toCreate, config = {}) => axios.post(resourceURL, toCreate, config)

    endpoints.update = (toUpdate, config = {}) => axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate, config)

    endpoints.patch = ({ id }, toPatch, config = {}) => axios.patch(`${resourceURL}/${id}`, toPatch, config)

    endpoints.delete = ({ id }, config = {}) => axios.delete(`${resourceURL}/${id}`, config)

    return endpoints

  }

}

export default Rest
