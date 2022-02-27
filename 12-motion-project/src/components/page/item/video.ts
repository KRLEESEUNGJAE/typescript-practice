import { BaseComponent } from './../../component.js';
export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player"><ifram class="video__iframe"></ifram></div>
            <h3 class="video__title"></h3>
          </section>`);

    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    console.log(url);

    iframe.src = 'https://www.youtube.com/watch?v=NaFd8ucHLuo'; // url -> videoId -> embed

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

/* <iframe
  width="837"
  height="480"
  src="https://www.youtube.com/embed/xn0-IZZ6YO4?list=LL"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
 */
