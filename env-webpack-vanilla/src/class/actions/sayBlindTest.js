const sayBlindTest = {
  name: 'Blind test',
  words: ['blind'],
  arg: [],
  response: () => {
    const video = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/tOOmnelMf18?si=p-yREILqM4RV4_2S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'];
    const rand = Math.floor(Math.random() * video.length);
    const rValue = video[rand];
    return (rValue);
  }
};

export default sayBlindTest;
