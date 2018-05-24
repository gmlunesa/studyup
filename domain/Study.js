function Study() {
	var users = [];
	this.length = 0;

	var User = function(name, email) {
        var files = [];
        return {
            name: name,
            email: email,
            files: files
        };
    }

    var File = function(filename) {
        return {
            filename: filename
        };
    }

    this.addUser = function(name, email) {
    	var newUser = new User(name, email);
    	users[users.length] = newUser;
    	this.length += 1;
    }

    this.addFile = function(email, filename) {
    	var newFile = new File(filename);
    	if (this.getUser(email).files){
    		var newFileSize = this.getUser(email).files.length;
    	} else {
    		var newFileSize = 0;
    	}
    	
    	this.getUser(email).files[newFileSize] = newFile;
    	//this.getUser(email).albums.length++;
    }

    this.getUser = function(email) {
    	 for (var i = 0; i < users.length; i++) {
    	 	if ((users[i].email) === email) {
                return users[i];
            }

    	 }
    }

    this.getFile = function(username, filename) {
    	email = this.getUser(username);

    	for (var i = 0; i <= email.files.length; i++) {
    		if (email.files[i].filename === filename) {
    			return email.files[i];
    		}
    	}
    	return -1;
    }
}

module.exports = Study;
