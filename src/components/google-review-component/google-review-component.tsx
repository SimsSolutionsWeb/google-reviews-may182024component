import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'google-review-component',
  styleUrl: 'google-review-component.css',
  shadow: true,
})
export class GoogleReviewComponent {

   componentWillLoad(){
    const placeId = 'ChIJI2Sc04JhToYRd3zWtNigBBk';
    const apiKey = 'AIzaSyDa8yAPOTsMeJLbWAw23igyf9T7E0BmlRE';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Cformatted_phone_number&place_id=${placeId}&key=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Do something with the response data
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  render() {
    return (
      <Host>
        Google Reviews!
        <slot></slot>
      </Host>
    );
  }

}
