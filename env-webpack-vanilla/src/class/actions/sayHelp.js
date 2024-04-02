import sayHello from './sayHello';
import sayWeather from './sayWeather';

const sayHelp = {
  name: 'Help',
  words: ['help', 'aide'],
  arg: [],
  response: () => {
    const availableCommands = [
      { command: [sayWeather.word], description: 'Afficher la météo selon la localisation' },
      { command: [sayHello.word], description: 'Dire bonjour' }
    ];

    const formattedCommands = availableCommands.map((cmd) => `<b>${cmd.description} : </b> ${cmd.command}`).join('<br>');
    return `Les commandes disponibles sont :<br>${formattedCommands}`;
  }
};

export default sayHelp;
