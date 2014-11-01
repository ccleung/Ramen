RamenItems = new Mongo.Collection("ramenItems");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Template.body.helpers({
    ramenItems: function() {
      /*{ ramenItem: "This is ramen 1"},
      { ramenItem: "This is ramen 2"},
      { ramenItem: "This is ramen 3"}*/
      return RamenItems.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
