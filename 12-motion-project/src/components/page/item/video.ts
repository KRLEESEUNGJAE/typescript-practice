import { BaseComponent } from './../../component.js';
export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player"><iframe class="video__iframe"></iframe></div>
            <h3 class="video__title"></h3>
          </section>`);

    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    console.log(url);

    iframe.src = 'https://www.youtube.com/embed/-ObdvMkCKws'; // url -> videoId -> embed

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

/* <iframe
  width="789"
  height="444"
  src="https://www.youtube.com/embed/-ObdvMkCKws"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>; */
