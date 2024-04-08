import axios from 'axios';

const sayValo = {
  name: 'Agent Valo',
  words: ['valo', 'agents'],
  arg: [],
  response: async () => (
    new Promise(async (resolve, reject) => {
      const Uuid = [
        'e370fa57-4757-3604-3648-499e1f642d3f',
        'dade69b4-4f5a-8528-247b-219e5a1facd6',
        '5f8d3a7f-467b-97f3-062c-13acf203c006',
        'cc8b64c8-4b25-4ff9-6e7f-37b4da43d235',
        'f94c3b30-42be-e959-889c-5aa313dba261',
        '22697a3d-45bf-8dd7-4fec-84a9e28c69d7',
        '601dbbe7-43ce-be57-2a40-4abd24953621',
        '6f2a04ca-43e0-be17-7f36-b3908627744d',
        '117ed9e3-49f3-6512-3ccf-0cada7e3823b',
        '320b2a48-4d9b-a075-30f1-1f93a9b638fa',
        '1e58de9c-4950-5125-93e9-a0aee9f98746',
        '95b78ed7-4637-86d9-7e41-71ba8c293152',
        '707eab51-4836-f488-046a-cda6bf494859',
        'eb93336a-449b-9c1b-0a54-a891f7921d69',
        '41fb69c1-4189-7b37-f117-bcaf1e96f1bf',
        '9f0d8ba9-4140-b941-57d3-a7ad57c6b417',
        '0e38b510-41a8-5780-5e8f-568b2a4f2d6c',
        '1dbf2edd-4729-0984-3115-daa5eed44993',
        'bb2a4828-46eb-8cd1-e765-15848195d751',
        '7f94d92c-4234-0a36-9646-3a87eb8b5c89',
        '569fdd95-4d10-43ab-ca70-79becc718b46',
        'a3bfb853-43b2-7238-a4f1-ad90e9e46bcc',
        '8e253930-4c05-31dd-1b6c-968525494517',
        'add6443a-41bd-e414-f6ad-e58d267f4e95'
      ];
      const rand = Math.floor(Math.random() * Uuid.length);
      const rValue = Uuid[rand];
      const res = await axios.get(`https://valorant-api.com/v1/agents/${rValue}`);
      const abilities = res.data.data.abilities.map((ability) => `- <img class="img-ability "src="${ability.displayIcon} "></img>   Ability's name : <b> ${ability.displayName} </b><br>`).join('');
      console.log(res.data);
      resolve(`
        <img class="img-valo "src="${res.data.data.displayIconSmall} "></img><br><br>
        Agent's name is <b>${res.data.data.displayName}</b>.<br>
        His role is <b>${res.data.data.role.displayName}</b>.<br>
        <b>${res.data.data.description}</b>.<br>
        ${res.data.data.displayName} has ${res.data.data.abilities.length} abilities :<br>
        ${abilities}
      `);
      reject(new Error("Désolé mais je n'ai pas trouvé la météo."));
    })
  )
};

export default sayValo;
