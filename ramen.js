

/*if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.count.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.count.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Template.body.helpers({
    ramenItems: function() {
      //return [{ text: "This is ramen 1"},
      //{ text: "This is ramen 2"},
      //{ text: "This is ramen 3"}]
      return RamenItems.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
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
}*/
