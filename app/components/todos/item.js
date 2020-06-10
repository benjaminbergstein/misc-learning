import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ItemComponent extends Component {
  @action
  toggleComplete() {
    const { item, toggleComplete } = this.args
    const { id } = item
    toggleComplete(id)
  }
}
