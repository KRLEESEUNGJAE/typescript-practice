import { VideoComponent } from './components/page/item/video.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent } from './components/page/page.js';
import { Component } from './components/component.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    // image.attachTo(appRoot, 'beforeend');
    this.page.addChild(image);

    const video = new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=-ObdvMkCKws');
    // video.attachTo(appRoot, 'beforeend');
    this.page.addChild(video);

    const note = new NoteComponent('Note Title', 'Note Body');
    // note.attachTo(appRoot, 'beforeend');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo list');
    /* todo.attachTo(appRoot, 'beforeend'); */
    this.page.addChild(todo);
  }
}

new App(document.querySelector('.document')! as HTMLElement);
