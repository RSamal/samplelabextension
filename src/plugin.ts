
import {
  JupyterLabPlugin, JupyterLab
} from 'jupyterlab/lib/application';

import {
  ICommandPalette
} from 'jupyterlab/lib/commandpalette';

import {
  Widget
} from 'phosphor/lib/ui/widget';


import {
  html
} from './html';

/**
 * The sample page extension.
 */
const sampleExtension: JupyterLabPlugin<void> = {
  id: 'jupyter.extensions.sample',
  activate: activateSample,
  autoStart: true,
  requires: [ICommandPalette]
};

export default sampleExtension;

function activateSample(app: JupyterLab, palette: ICommandPalette): void {
  let widget = new Widget();
  widget.id = 'sample-jupyterlab';
  widget.title.label = 'Sample';
  widget.title.closable = true;
  widget.node.innerHTML = html;
  widget.node.style.overflowY = 'auto';

  let command = 'sample-jupyterlab:show';
  app.commands.addCommand(command, {
    label: 'Sample JupyterLab',
    execute: () => {
      if (!widget.isAttached) {
        app.shell.addToMainArea(widget);
      } else {
        app.shell.activateMain(widget.id);
      }
    }
  });
  palette.addItem({ command, category: 'Extension' });
}