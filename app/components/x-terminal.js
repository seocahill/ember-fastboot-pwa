import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['terminal'],

  didInsertElement() {
    this._loadTerminal();
  },

  _loadTerminal() {
    const signature =
      ['                                                     __     ',
        ' .-----. .-----. .-----. .-----. .---.-. .--------. |  |--. ',
        ' |__ --| |  -__| |  _  | |__ --| |  _  | |        | |     | ',
        ' |_____| |_____| |_____| |_____| |___._| |__|__|__| |__|__| ',
        '                                                            ',
        '                 __      __   __   __     ',
        ' .----. .---.-. |  |--. |__| |  | |  |    ',
        ' |  __| |  _  | |     | |  | |  | |  |    ',
        ' |____| |___._| |__|__| |__| |__| |__|    ',
        '                                          ',
        '', '', 'Ruby + JS web development', '',
        'Enter a command or type help', ''
      ];

    this.$().terminal((command, term) => {
      if (command == 'help') {
        term.echo("cmds [ about | work | other | contact ]");
      } else if (['work', 'other', 'about'].includes(command)) {
        this.get('navigateTo')(command);
      } else if (command == 'contact') {
        term.echo("Email me at seo.cahill@gmail.com");
      } else {
        term.echo("cmds [ help | about | work | other | contact ]");
      }
    }, { prompt: '>', name: 'seocahill', outputLimit: -1, greetings: signature.join("\n"), echoCommand: false });
  }
});
