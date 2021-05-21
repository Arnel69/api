fetch('https://www.breakingbadapi.com/api/characters')
.then((response) => { 
    return response.json();
})
.then((data) => {
    /* créer des div contenant 10 persos
    donner automatiquement un id a chacune
    changer de display a chaque appui sur le bouton
    */
    console.log('étape 2')
    characters = data;
    var ul = document.createElement('ul');
    var div = document.createElement('div');
    div.append(ul);
    document.querySelector('aside').append(div);
    var numbermin = 0;  
    var numbermax = 10;
    characters.forEach(character => {
        
        
        if(character.char_id>numbermin && character.char_id<numbermax ){
            var li = document.createElement('li');
            li.innerHTML = character.name;
            ul.append(li); 
            li.setAttribute('data-id', character.char_id);
            
        }
                    
    });
    
    
})


console.log('étape 1')
var button = document.createElement('button');
document.querySelector('main').append(button);
button.setAttribute('data-cacahuete', 'banane');
document.querySelector('button').innerHTML = 'bonjour';
var numbermin = 0; 
var numbermax = 10;

document.querySelector('button').addEventListener('click' , (el) => {
    el = el.target;    
    
    if(el.dataset.cacahuete){
        numbermin+=10;
        numbermax+=10;
        var ul = document.createElement('ul');
        var div1 = document.createElement('div');
        div1.append(ul);
        document.querySelector('aside').append(div1);
        
        characters.forEach(character =>{

            if(character.char_id>numbermin && character.char_id<numbermax){
                var li = document.createElement('li');
                li.innerHTML = character.name;
                ul.append(li);
                li.setAttribute('data-id', character.char_id);
            }
        })
        
        
    }
})
