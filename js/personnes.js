var lastid = 0;

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
            var div2 = document.createElement('div'); 
            li.setAttribute('data-id', character.char_id);
            var img = document.createElement('img');
            li.append(img);
            img.src = character.img;
            img.setAttribute('data-id', character.char_id);
            li.append(div2); 
        }              
    });  
})


var numbermin = 0; 
var numbermax = 10;
var increment = 1;
var button2 = document.createElement('button');
document.querySelector('main').append(button2);
button2.classList.add('previous');
button2.setAttribute('data-id', 'previous')
document.querySelector('.previous').innerHTML = 'précédent';

var decrement = 1;
document.querySelector('.previous').addEventListener('click' , (el) => {
    el = el.target;

    if(el.dataset.id){

        var idref = document.querySelector('li').dataset.id;

        if(idref>1){
            document.querySelector('aside').innerHTML = '';
            document.querySelector('#essai').classList.add('none'); 
            numbermin -=10;
            numbermax -=10;
            
            var ul = document.createElement('ul');
            var div1 = document.createElement('div');
            div1.classList.add(decrement);
            decrement++;
            div1.append(ul);
            document.querySelector('aside').append(div1);
        
        characters.forEach(character =>{

            if(character.char_id>numbermin && character.char_id<numbermax){
                var li = document.createElement('li');
                li.innerHTML = character.name;
                ul.append(li);
                var div2 = document.createElement('div'); 
                li.setAttribute('data-id', character.char_id);
                var img = document.createElement('img');
                li.append(img);
                img.src = character.img;
                img.setAttribute('data-id', character.char_id);
                li.append(div2);              
            }
        }) 
            
        }
                 
    }
})

var button = document.createElement('button');
document.querySelector('main').append(button);
button.classList.add('next');
button.setAttribute('data-id', 'next')
document.querySelector('.next').innerHTML = 'suivant';

document.querySelector('.next').addEventListener('click' , (el) => {
    
    
    el = el.target;
   

    if(el.dataset.id){
        
        var zzz = document.querySelector('ul');

        if (zzz.lastChild.dataset.id< 57){
            document.querySelector('aside').innerHTML = '';
            document.querySelector('#essai').classList.add('none');
            numbermin+=10;
            numbermax+=10;
            var ul = document.createElement('ul');
            var div1 = document.createElement('div');
            div1.classList.add(increment);
            increment++;
            div1.append(ul);
            document.querySelector('aside').append(div1);
            
            characters.forEach(character =>{

                if(character.char_id>numbermin && character.char_id<numbermax){
                    var li = document.createElement('li');
                    li.innerHTML = character.name;
                    ul.append(li);
                    var div2 = document.createElement('div'); 
                    li.setAttribute('data-id', character.char_id);
                    var img = document.createElement('img');
                    li.append(img);
                    img.src = character.img;
                    img.setAttribute('data-id', character.char_id);
                    li.append(div2);
                }
            })

        }
         
    }
})

document.querySelector('aside').addEventListener('click', (el) =>{
    el= el.target;
    if(el.dataset.id){
        fetch('https://www.breakingbadapi.com/api/characters/' + el.dataset.id)
        .then ((response) => {
            return response.json();
        })
        .then ((characters) =>{
            document.querySelector('#essai').classList.remove('none');

            characters.forEach(character =>{

                document.querySelector('#birthday').innerHTML = 'Date de naissance : ' + character.birthday;
                document.querySelector('#nickname').innerHTML = character.nickname;
                document.querySelector('#occupation').innerHTML = 'Métier : ' + character.occupation;
                document.querySelector('#appearance').innerHTML = 'A participé aux saisons : ' + character.appearance;
                document.querySelector('#status').innerHTML = 'Statut : ' + character.status;
                document.querySelector('#portrayed').innerHTML = 'Acteur : ' + character.portrayed;        
            })
            document.querySelector('#essai').scrollIntoView({
                block: 'start',
                behavior: 'smooth',
                inline: 'nearest'

            });
        })
        
    }
})

