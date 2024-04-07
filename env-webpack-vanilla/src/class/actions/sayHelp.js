import sayHello from './sayHello';
import sayWeather from './sayWeather';
import sayJoke from './sayJoke';
import sayLastReleasedGames from './sayLastReleasedGames';

const sayHelp = {
  name: 'Help',
  words: ['help', 'aide'],
  arg: [],
  response: () => {
    const availableCommands = [
      { command: [sayWeather.words], description: 'Afficher la météo selon la localisation' },
      { command: [sayHello.words], description: 'Dire bonjour' },
      { command: [sayJoke.words], description: 'Raconte une blague' },
      { command: [sayLastReleasedGames.words], description: 'Affiche les derniers jeux sortis sur PC durant une période' }
    ];

    const formattedCommands = availableCommands.map((cmd) => `<b>${cmd.description} : </b> ${cmd.command}`).join('<br>');
    return `Les commandes disponibles sont :<br>${formattedCommands}`;
  }
};

export default sayHelp;
