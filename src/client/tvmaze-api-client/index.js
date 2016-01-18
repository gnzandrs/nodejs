/**
 * Module Dependencies
 */

import $ from 'jquery'

export function getShows(fn) {
  $.ajax('http://api.tvmaze.com/shows', {
    success: function (shows, textStatus, xhr) {
      $.get('/api/votes', function (votes) {
        shows = shows.map(show => {
          var vote = votes.filter(vote => vote.showId === show.id)[0]
          show.count = vote ? vote.count : 0
          return show
        })

        fn(shows)
      })
    }
  })
}

export function searchShows(busqueda, fn) {
  $.ajax('http://api.tvmaze.com/search/shows', {
    data: busqueda,
    success: function (res, textStatus, xhr) {
      fn(res)
    }
  })
}
