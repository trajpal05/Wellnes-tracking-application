const people = [
    { firstName: 'John', lastName: 'Doe', gender: 'Male', image: '/src/assets/Fitnessprofessionals/whereslugo-DMVD9RkZIwQ-unsplash.jpg' },
    { firstName: 'Jane', lastName: 'Smith', gender: 'Female' , image: '/src/assets/Fitnessprofessionals/istockphoto-1311051392-1024x1024.jpg' },
    { firstName: 'Michael', lastName: 'Brown', gender: 'Male', image: '/src/assets/Fitnessprofessionals/ramiro-pianarosa-xd4ao7ALxb0-unsplash.jpg' },
    { firstName: 'Emily', lastName: 'White', gender: 'Female' , image: '/src/assets/Fitnessprofessionals/istockphoto-1409220818-1024x1024.jpg' },
    { firstName: 'David', lastName: 'Wilson', gender: 'Male' ,image:'/src/assets/Fitnessprofessionals/istockphoto-182180568-1024x1024.jpg' },
    { firstName: 'Sarah', lastName: 'Johnson', gender: 'Female' , image: '/src/assets/Fitnessprofessionals/istockphoto-1297633362-1024x1024.jpg'},
    { firstName: 'Chris', lastName: 'Martinez', gender: 'Male' , image:'/src/assets/Fitnessprofessionals/istockphoto-596084560-1024x1024 copy.jpg' },
    { firstName: 'Lisa', lastName: 'Garcia', gender: 'Female', image: '/src/assets/Fitnessprofessionals/istockphoto-876959140-1024x1024.jpg' },
    { firstName: 'James', lastName: 'Rodriguez', gender: 'Male', image:'/src/assets/Fitnessprofessionals/istockphoto-931932458-1024x1024.jpg' },
    { firstName: 'Angela', lastName: 'Lee', gender: 'Female', image: '/src/assets/Fitnessprofessionals/istockphoto-1297273373-1024x1024.jpg' },
    { firstName: 'Robert', lastName: 'Harris', gender: 'Male', image:'/src/assets/Fitnessprofessionals/istockphoto-1254512681-1024x1024.jpg' },
    { firstName: 'Patricia', lastName: 'Clark', gender: 'Female' , image: '/src/assets/Fitnessprofessionals/istockphoto-1418153131-1024x1024.jpg' },
    { firstName: 'Daniel', lastName: 'Lewis', gender: 'Male' , image:'/src/assets/Fitnessprofessionals/istockphoto-1729429602-1024x1024.jpg' },
    { firstName: 'Jennifer', lastName: 'Walker', gender: 'Female' , image: '/src/assets/Fitnessprofessionals/istockphoto-1391905886-1024x1024.jpg'},
    { firstName: 'William', lastName: 'Hall', gender: 'Male' , image:'/src/assets/Fitnessprofessionals/istockphoto-1290256596-1024x1024.jpg'},
    { firstName: 'Linda', lastName: 'Young', gender: 'Female' , image: '/src/assets/Fitnessprofessionals/istockphoto-1417732998-1024x1024.jpg' },
    { firstName: 'Joseph', lastName: 'Allen', gender: 'Male' , image:'/src/assets/Fitnessprofessionals/istockphoto-1319224094-1024x1024.jpg'},
    { firstName: 'Barbara', lastName: 'Scott', gender: 'Female', image: '/src/assets/Fitnessprofessionals/istockphoto-1303970537-1024x1024.jpg' },
    { firstName: 'Thomas', lastName: 'King', gender: 'Male', image:'/src/assets/Fitnessprofessionals/istockphoto-1328407481-1024x1024.jpg' },
    { firstName: 'Susan', lastName: 'Wright', gender: 'Female', image: '/src/assets/Fitnessprofessionals/istockphoto-1457762874-1024x1024.jpg' },
    { firstName: 'Kevin', lastName: 'Lopez', gender: 'Male', image:'/src/assets/Fitnessprofessionals/istockphoto-1403846067-1024x1024.jpg' },
    { firstName: 'Karen', lastName: 'Hill', gender: 'Female' , image: '/src/assets/Fitnessprofessionals/istockphoto-1203295362-1024x1024.jpg'},
    { firstName: 'Richard', lastName: 'Green', gender: 'Male', image:'/src/assets/Fitnessprofessionals/istockphoto-1413752699-1024x1024.jpg' },
    { firstName: 'Jessica', lastName: 'Adams', gender: 'Female' ,image: '/src/assets/Fitnessprofessionals/istockphoto-1265032285-1024x1024.jpg'},
    { firstName: 'Brian', lastName: 'Nelson', gender: 'Male' ,image:'/src/assets/Fitnessprofessionals/istockphoto-1440701083-1024x1024.jpg'},
    { firstName: 'Nancy', lastName: 'Baker', gender: 'Female' ,image: '/src/assets/Fitnessprofessionals/istockphoto-482752404-1024x1024.jpg'},
    { firstName: 'Gary', lastName: 'Gonzalez', gender: 'Male' ,image:'/src/assets/Fitnessprofessionals/istockphoto-1483940790-1024x1024.jpg'},
    { firstName: 'Elizabeth', lastName: 'Carter', gender: 'Female',image: '/src/assets/Fitnessprofessionals/istockphoto-1314496116-1024x1024.jpg' },
    { firstName: 'Matthew', lastName: 'Mitchell', gender: 'Male',image:'/src/assets/Fitnessprofessionals/istockphoto-1489279261-1024x1024.jpg' },
    { firstName: 'Amanda', lastName: 'Turner', gender: 'Female',image: '/src/assets/Fitnessprofessionals/istockphoto-1194087257-1024x1024.jpg' }
];


const specialties = ["Yoga", "Weight Training", "Cardio", "Pilates", "Crossfit", "Dance", "Martial Arts"];
const locations = ["New York", "California", "Texas", "Florida", "Illinois", "Pennsylvania", "Ohio"];
const experiences = ["1 year", "2 years", "5 years", "10 years", "3 years", "4 years", "6 years", "7 years", "8 years", "9 years"];

export const professionalsData = people.map((person, index) => {
    return {
        ...person,
        id: index + 1,
        username: `${person.firstName.toLowerCase()}${person.lastName.toLowerCase()}`,
        specialty: specialties[index % specialties.length],
        location: locations[index % locations.length],
        experience: experiences[index % experiences.length],
        image: person.image ? person.image : `https://via.placeholder.com/150?text=${person.firstName}+${person.lastName}`,
        password: `${person.firstName.toLowerCase()}${person.lastName.toLowerCase()}@123`,
    };
});

console.log(professionalsData);
