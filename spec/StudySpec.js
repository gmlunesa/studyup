var Study = require('../domain/Study');

describe("Adding Users", function() {
	var Study = require('../domain/Study');
	var study;

	study = new Study();

	it("should increase number of users", function() {
		study.addUser('Goldy Mariz Lunesa', 'gclunesa@up.edu.ph');
		expect(study.length).toEqual(1);
		study.addUser('Brettny Onez', 'bc@up.edu.ph');
		expect(study.length).toEqual(2);
	});
});



describe("Adding Files", function() {
	var study;

  	study = new Study();
	it("should add a file for a user", function() {
		study.addUser('Ileana Denise Dignos', 'im@up.edu.ph');
		study.addFile('im@up.edu.ph', 'ab.pdf');
 	 	expect(study.getUser('im@up.edu.ph').files).toEqual( [ Object({ filename: 'ab.pdf', comments: []}) ]);
		
	});
});

describe("Adding Comments", function() {
	var study;

  	study = new Study();
	it("should add a comment for a user", function() {
		study.addUser('Kim Zaldua', 'kz@up.edu.ph');
		study.addFile('kz@up.edu.ph', 'cd.pdf');
		study.addComment('kz@up.edu.ph', 'How Nice!','cd.pdf');
 	 	expect(study.getFile('kz@up.edu.ph','cd.pdf').comments).toEqual( [ Object({ username: 'kz@up.edu.ph', comment: 'How Nice!' }) ]);
		
	});
});

describe("Retrieving Elements", function() {
	var study;

  	study = new Study();
	study.addUser('Ileana Denise Dignos', 'im@up.edu.ph');
	study.addFile('im@up.edu.ph', 'ab.pdf');
	study.addFile('im@up.edu.ph', 'abc.pdf');
	
	it("should get a user", function() {
 	 	expect(study.getUser('im@up.edu.ph')).toEqual(Object({ name: 'Ileana Denise Dignos', email: 'im@up.edu.ph', files: [ Object({ filename: 'ab.pdf', comments: [  ] }), Object({ filename: 'abc.pdf', comments: [  ] }) ] }));
	});
	
	it("should get a file", function() {
 	 	expect(study.getFile('im@up.edu.ph','abc.pdf')).toEqual(Object({ filename: 'abc.pdf' ,comments: []}));
	});
});
