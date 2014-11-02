var Images = new FS.Collection("images", {
	stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

if (Meteor.isClient) {
  //Template.upload.helpers({
	//}
	//});

  Template.upload.events({
    "change .myFileInput": function (event, template) {
    	var files = event.target.files;
    	FS.Utility.eachFile(event, function(file) {
    		Images.insert(file, function(err, fileObj) {
    			//Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
    		});
    	});
    }
  });
	
	Template.upload.rendered = function() {

		console.log("hello world: ");
		console.log(Images.findOne())
    var arrayOfImageIds = [];

    Dropzone.autoDiscover = false;

    // Adds file uploading and adds the imageID of the file uploaded
    // to the arrayOfImageIds object.

    var dropzone = new Dropzone("form#dropzone", {
	    accept: function(file, done) {
	      Images.insert(file, function(err, fileObj) {
	        if(err) {
	          alert("Error");
	        } else {
	          // gets the ID of the image that was uploaded
	          var imageId = fileObj._id;
	          // do something with this image ID, like save it somewhere
	          arrayOfImageIds.push(imageId);
	        };
	      });
	    }
    });

	};
}