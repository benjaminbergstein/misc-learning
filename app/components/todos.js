import Component from '@glimmer/component';
import { set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default class TodosComponent extends Component {
  @tracked items = {}

  get todos() {
    return Object.values(this.items)
  }

  @action
  toggleComplete(id) {
    const { items } = this
    const item = items[id]
    const { isComplete } = item
    const newItem = { ...item, isComplete: !isComplete }
    items[id] = newItem
    this.items = items
  }

  @action
  create(e) {
    e.preventDefault()
    const { items } = this
    const form = e.target
    const formData = new FormData(form)
    const body = formData.get('body')
    const id = uuidv4()
    this.items = {
      ...items,
      [id]: { id, body, isComplete: false }
    }
    form.reset()
  }
}
