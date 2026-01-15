var theranos = {

	firstname: "Elizabeth Holmes",
	lastname: "Holmes",
	age: 40,


education: [
		"St. John University", "Stanford University"
	],
	img: "https://startupi.com.br/wp-content/uploads/2023/08/20160711elizabeth-holmes.jpg",
    wiki: "https://en.wikipedia.org/wiki/Elizabeth_Holmes"
};

var elonMusk = {
	firstName: "Elon",
	middleName: "Reeve",
	lastName: "Musk",
    age: 53,
	education: [
	 "Queens College",
	 "Stanford University",
	 "Wharton School of the University of Pennslvaina"
	],
	img:
	"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
	wiki: "https://en.wikipedia.org/wiki/Elon_Musk"
};

var MichealJordan = {
	firstName: "micheal",
	middleName: "jeffrey",
	lastName: "jordan",
	age: 63,
	education: [
		"Emsley A. Laney High School",
		"University of North Carolina at Chapel Hill"

	],
	occupaction: "basketball player",
	awards: ["6x NBA champion", "5x NBA most valuable player", "14x NBA All-star"],
	hometown: "Brooklyn, New York City",
	img:
	"https://people.com/thmb/fBzOWOOX7IoYdaQePshE8109tlg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/Michael-Jordan-attends-the-13th-annual-Michael-Jordan-Celebrity-Invitational-gala-051225-d72a742c85c34985b8e731d39ebe5717.jpg",
	wiki: "https://en.wikipedia.org/wiki/micheal_jordan"
};

var profiles = [theranos, elonMusk, MichealJordan];

function getYearBorn(age) {
	var currentYear = new Date().getFullYear();
	return currentYear - age;
}

function displayProfiles() {
	var container = document.getElementById("profile-container");
	container.innerHTML = "";

	profiles.forEach(function (profile) {
		var fullName = profile.lastName + "," + profile.firstName;
		var yearBorn = getYearBorn(profile.age);

		var educationHTML = "";
		profile.education.forEach(function(school, index) {
			var schoolNumber = index + 1;
			educationHTML += "<p class='small mb-2'>College " + schoolNumber + ": " + school + "</p>";
		});

var additionalHTML = "";
       if(profile.occupation) {
           additionalHTML += "<p class='small mb-2'><strong>Occupation:</strong> " + person.occupation + "</p>";
       }
       if(profile.awards) {
           additionalHTML += "<p class='small mb-2'><strong>Awards:</strong> " + person.awards.join(", ") + "</p>";
       }
       if(profile.hometown) {
           additionalHTML += "<p class='small mb-2'><strong>Hometown:</strong> " + person.hometown + "</p>";
       }
      
       var cardHTML = `
       <article class="col-12 col-sm-6 col-md-4 col-lg-3">
           <div class="card h-100 shadow-sm text-center">
               <img
                   src="${profile.img}"
                   class="card-img-top"
                   alt="${fullName}"
               />
               <div class="card-body">
                   <h5 class="card-title">${fullName}</h5>
                   <p class="card-text text-muted">Age: ${profile.age}</p>
                   <p class="card-text text-muted">Year Born: ${yearBorn}</p>
                   <p class="small">- Education -</p>
                   ${educationHTML}
                   ${additionalHTML}
               </div>
               <div class="card-footer bg-white">
                   <a href="${profile.wiki}" class="btn btn-outline-primary btn-sm" target="_blank">View Profile</a>
               </div>
           </div>
       </article>
       `;
      
       container.innerHTML += cardHTML;
   });
}


