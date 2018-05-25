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
    	var comments =[]
        return {
            filename: filename,
            comments: comments
        
        };
    }
    
    var Comment = function(username, comment){
    	return{
    		username: username,
    		comment:comment
    	}

    }

    this.addComment = function (email, comment, filename){
    	var newComment = new Comment(email, comment);
    	if (this.getFile(email,filename).comments){
    		var newCommentSize = this.getFile(email,filename).comments.length;
    	} else {
    		var newCommentSize = 0;
    	}
    	
    	this.getFile(email,filename).comments[newCommentSize] = newComment;
    	//console.log(comments)
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

    this.getComment = function(username, filename, comment) {
    	file = this.getFile(username,filename);

    	for (var i = 0; i <= file.comments.length; i++) {
    		if (file.comments[i].comment === comment) {
    			return file.comments[i];
    		}
    	}
    	return -1;
    }
}

module.exports = Study;
