angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'I wanted to adopt that dog?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'How old is he?',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'That\'s a good cat.',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Thanks for your help!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'We\'ll meet on wednesday.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Notifications', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var contacts = [{
    contact: 4,
    imgurl: 'img/bird.jpg',
    name: 'Ramesh',
    typebool: 'true',
    location: '39.774769+-74.86084',
    description : 'Healthy chick for adoption'
  },{
    contact: 1,
    imgurl: 'img/dog.jpg',
    name: 'Suresh',
    typebool: 'true',
    location: '39.774769+-74.86084',
    description : 'Rescued dog, available for adoption. Well behaved, possibly previously domesticated'
  },{
    contact: 2,
    imgurl: 'img/adopt.jpg',
    name: 'Nihal',
    typebool: 'true',
    location: '39.774769+-74.86084',
    description : 'Abandoned kitten, available for adoption in three weeks. Only survivor from litter :('
  },{
    contact: 3,
    imgurl: 'img/adopt2.jpg',
    name: 'Ajmal',
    typebool: 'true',
    location: '39.774769+-74.86084',
    description : 'Retired army dog, available for adoption. Needs a place to retire after service!!!'
  }];

  return {
    all: function() {
      return contacts;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    }
  };
}


);
