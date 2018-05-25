
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
 	 	expect(study.getUser('im@up.edu.ph').files).toEqual( [ Object({ filename: 'ab.pdf' }) ]);
		
	});
});

describe("Retrieving Elements", function() {
	var study;

  	study = new Study();
	study.addUser('Ileana Denise Dignos', 'im@up.edu.ph');
	study.addFile('im@up.edu.ph', 'ab.pdf');
	study.addFile('im@up.edu.ph', 'abc.pdf');
	
	it("should get a user", function() {
 	 	expect(study.getUser('im@up.edu.ph')).toEqual("Please insert correct answer here");
	});
	
	it("should get a file", function() {
 	 	expect(study.getfile('abc.pdf')).toEqual(Object({ filename: 'abc.pdf' }));
	});
});




