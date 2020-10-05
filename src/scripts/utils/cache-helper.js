const cacheHelper = {
  async cachingAppShell (requests) {
    const cache = await this._openCache()
    cache.addAll(requests)
  },

  async deleteOldCache () {
    const cacheNames = await caches.keys()
    cacheNames
      .filter((name) => name !== 'Foodstyle-V1')
      .map((filteredName) => caches.delete(filteredName))
  },

  async revalidateCache (request) {

  },

  async _openCache () {
    return caches.open('Foodstyle-V1')
  },

  async _fetchRequest (request) {
    const response = await fetch(request)

    // jika error
    if (!response || response.status !== 200) {
      return response
    }

    await this._addCache(request)
    return response
  },

  async _addCache (request) {
    const cache = await this._openCache()
    cache.add(request)
  }

}

export default cacheHelper
