

function alphabetPosition(text) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let result = [];
    text = text.toLowerCase().split(' ').join('');
    text.split('').forEach((item) => {
      for (let i=0; i<alphabet.length; i++) {
        if (item == alphabet[i]) {
          result.push(i+1);
        }
      }
    })
    return result.join(' ');
  }

  console.log(alphabetPosition('Text and text'));

