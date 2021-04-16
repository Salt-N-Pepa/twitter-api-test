const T = require('../config/twit')

module.exports = {
  
  async search(request, res) {
    
    let { searchItem, searchDate } = request.body;
    
    T.get('search/tweets', { q: `${searchItem} since:${searchDate}`, count: 5 }, (err, data, response) => {

      return res.json(data)
      
    })
    
  }

}