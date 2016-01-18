/**
 * Module Dependencies
 */

import $ from 'jquery'
import $tvShowsContainer from 'src/client/tv-shows-container'

var template = `<article data-id=:id: class="tv-show">
          <div class="left img-container">
            <img src=":img:" alt=":img alt:">
          </div>
          <div class="right info">
            <h1>:name:</h1>
            <p>:summary:</p>
            <button class="like">💖</button>
            <span class="count">:count:</span>
          </div>
        </article>`

export default function renderShows(shows) {
  $tvShowsContainer.find('.loader').remove();
  shows.forEach(function (show) {
    var article = template
      .replace(':name:', show.name)
      .replace(':img:', show.image ? show.image.medium : '')
      .replace(':summary:', show.summary)
      .replace(':img alt:', show.name + " Logo")
      .replace(':id:', show.id)
      .replace(':count:', show.count)

    var $article = $(article)
    $tvShowsContainer.append($article.fadeIn(1500));
  })
}