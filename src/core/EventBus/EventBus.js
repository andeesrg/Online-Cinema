export class EventBus {
  constructor(description = 'event-bus') {
    this.eventTarget = document.appendChild(document.createComment(description));
  }

  on(type, listener) {
    this.eventTarget.addEventListener(type, listener);
  }

  once(type, listener) {
    this.eventTarget.addEventListener(type, listener, { once: true });
  }

  off(type, listener) {
    this.eventTarget.removeEventListener(type, listener);
  }

  emit(type, detail) {
    return this.eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
  }
}

export const eventBus = new EventBus();
