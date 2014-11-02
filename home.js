RamenItems = new Mongo.Collection("ramenItems");

if (Meteor.isClient) {
  Template.home.helpers({
    ramenItems: function() {
      /*return [{ text: "This is ramen 1"},
      { text: "This is ramen 2"},
      { text: "This is ramen 3"}]*/
      return RamenItems.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.home.events({
    "submit .new-ramen-item": function (event) {
      console.log(event)
      var text = event.target.text.value;

      RamenItems.insert({
        text: text,
        createdAt: new Date() 
      });
      // Clear form
      event.target.text.value = "";
      // Prevent default form submit
      return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}