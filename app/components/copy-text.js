import Component from '@glimmer/component';
import {action} from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { later } from '@ember/runloop';

export default class CopyTextComponent extends Component {
  @tracked showTooltip = false;
  @tracked tooltipText = "false";

  @action
  copyToClipboard() {
    navigator.clipboard.writeText(this.args.text).then(() => {
      this.tooltipText = "Copié avec succès";
    }, () => {
      this.tooltipText = "Erreur";
    });
    this.showTooltip = true;
    later(this, function() {
      this.showTooltip = false;
    }, 1000);
  }
}
