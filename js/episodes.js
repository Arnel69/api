var lastid = 0;

fetch('https://www.breakingbadapi.com/api/episodes')
.then((response) => { 
    return response.json();
})
.then((data) => {
    episodes = data;
    var ul = document.createElement('ul');
    var div = document.createElement('div');
    div.append(ul);
    document.querySelector('aside').append(div);
    var numbermin = 0; 
    var numbermax = 10;
    episodes.forEach(episode => {
        
        
        if(episode.episode_id>numbermin && episode.episode_id<numbermax){
            var li = document.createElement('li');
            li.innerHTML = 's' + episode.season + ' ep' + episode.episode + ' : ' + episode.title;
            ul.append(li);
            var div2 = document.createElement('div'); 
            li.setAttribute('data-id', episode.episode_id);
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
        
        if (idref>1){
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
            
            episodes.forEach(episode =>{

                if(episode.episode_id>numbermin && episode.episode_id<numbermax){
                    var li = document.createElement('li');
                    li.innerHTML = 's' + episode.season + ' ep' + episode.episode + ' : ' + episode.title;
                    ul.append(li);
                    var div2 = document.createElement('div'); 
                    li.setAttribute('data-id', episode.episode_id);
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
        episodes.forEach(episode =>{
            lastid = episode.episode_id;
        })
        console.log(lastid)
        debugger
        var zzz = document.querySelector('ul');

        if (zzz.lastChild.dataset.id < lastid){
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
            
            episodes.forEach(episode =>{

                if(episode.episode_id>numbermin && episode.episode_id<numbermax){
                    var li = document.createElement('li');
                    li.innerHTML = 's' + episode.season + ' ep' + episode.episode + ' : ' + episode.title;
                    ul.append(li);
                    var div2 = document.createElement('div'); 
                    li.setAttribute('data-id', episode.episode_id);
                    li.append(div2);
                    
                }
            })
        }
    
       
         
        
    }
})


document.querySelector('aside').addEventListener('click', (el) =>{
    el= el.target;
    if(el.dataset.id){
        fetch('https://www.breakingbadapi.com/api/episodes/' + el.dataset.id)
        .then ((response) => {
            return response.json();
        })
        .then ((episodes) =>{
            document.querySelector('#essai').classList.remove('none');
            episodes.forEach(episode =>{

                document.querySelector('#title').innerHTML = 'Titre :' + episode.title;
                document.querySelector('#season').innerHTML = 'saison numéro :' + episode.season;
                document.querySelector('#air_date').innerHTML = 'date de sortie :' + episode.air_date;
                
                document.querySelector('#characters').innerHTML = "";
                episode.characters.forEach(name => {

                    var char = document.querySelector('#characters');
                    var p = document.createElement('p');
                    p.innerHTML = name;
                    char.append(p);
                    p.classList.add('name');
                
                })


                document.querySelector('#episode').innerHTML = 'épisode numéro :' + episode.episode;
                
            })
        })
        fetch('https://breakingbadapi.com/api/characters/')
        .then((response) => {
            return response.json();
        })
        .then ((characters) =>{
            
            characters.forEach(character => {
                var images = document.querySelector('#images');
                var li = document.createElement('li');
                li.setAttribute('data-id', character.char_id);
                images.append(li);
                img = document.createElement('img');
                img.src = character.img;
                li.append(img);
                var characs = document.querySelectorAll('.name');
                li.classList.add('none');           
                characs.forEach(charac => {
                    if(character.name === charac.innerHTML){
                        li.classList.remove('none');
                    }

                }) 
            })

        })
    }
    })



