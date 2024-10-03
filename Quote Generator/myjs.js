let Quotes = ["If you don't take risk, you can't create a future. --> Monkey D. Luffy",
    "No matter how deep the night, it always turns to day eventually. --> Brook",
    "The thing call 'Justice' changes its shape...depending on where you stand. --> Kuzan ",
    "Life is like a pencil that will surely run out, but left behind the beautiful writings in the life. --> Nami",
    "If you're too afraid of making mistakes you won't be able to do anything. --> Sanji P ",
    "No matter what happens. Don't be sorry you were born even though nobody praises us. Don't forget to smile in any situation as long as you're alive here. There will be better things later and there will be many. --> Bellmere",
    "There is no such thing as being born into the world alone! --> Jaguar D. Saul ",
    "Forgetting is like a wound. The wound may heal, but it has already left a scar. --> Monkey D. Luffy",
    "When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom?! No! It's when...they are forgotten. --> Dr. Hiluluk",
    "It's wrong to resent a child for the sins of his father. --> Edward Newgate ",
    "I don't want to live for a thousand years. If I just live through today, that'll be enough. --> Portgas D. Ace",
    "What keeps me alive in this world is neither bodily organs nor muscles. It's my soul. --> Brook ",
    "Being alone hurts worse than pain. --> Monkey D. Luffy ",
    "No matter what kind of weapons you may hold, just being alive isn't a sin! There's no crime in living! --> Franky",
    "When the world shoves you around, you've just got to stand up and shove back. It's not like somebody's gonna save you if you start babbling excuses! --> Roronoa Zoro"
]


document.getElementById('generateBtn').addEventListener('click',function(){
    let q = Math.trunc(Math.random()*(Quotes.length)) ;
    let [quote,auth] = Quotes[q].split('-->');
    document.getElementById('quote').textContent = quote;
    document.getElementById('author').textContent = '-'+ auth;
});
