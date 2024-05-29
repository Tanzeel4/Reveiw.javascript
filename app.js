
const user = [
    {
        imgurl: 'suyfiyan.png.jpg',
        name: 'Muhammad Sufiyan',
        designation: 'Mern Stack Developer',
        description: 'Sir Sufiyan is a very good teacher. He teaches us web development and works very hard with all the students He teaches everyone with great effort and immediately helps whenever there is a problem',
    },
    {
        imgurl: 'tanzeel.png.jpg',
        name: 'Tanzeel Haq Khan',
        designation: 'Student',
        description: 'Tanzeel is a good student; he completes all projects on time and is a regular attendee in class.',
    },
    {
        imgurl: 'aqib.png.jpg',
        name: 'Aqib Yousuf',
        designation: 'Student',
        description: 'Aqib is a good student; he arrives on time, clears all tests, and regularly attends class.',
    },
    {
        imgurl: 'rashid.png.jpg',
        name:'Rashid Khan',
        designation: 'Student',
        description: 'Rashid is a front-bencher in class; he gives the most answers, always attends regularly, and completes his projects on time.',
    },
    {
        imgurl: 'usman.png.jpg',
        name: 'Usman Ameer',
        designation: 'Student',
        description: 'Usman is younger in age, but he is the best student. He is very good at development, practices well, clears all tests, arrives on time, and is regular in class.',
    },
]

var usercounter = 0

const previoushandler = () => {

    if(usercounter > 0){
    usercounter--;
    console.log(usercounter, '===>>> usercounter');
    document.querySelector('#image').src = user[usercounter].imgurl
    document.querySelector('#anyname').textContent = user[usercounter].name
    document.querySelector('#designation').textContent = user[usercounter].designation
    document.querySelector('#description').textContent = user[usercounter].description
    } else {
        usercounter = user.length - 1
        console.log(usercounter, '===>>> usercounter');
        document.querySelector('#image').src = user[usercounter].imgurl
        document.querySelector('#anyname').textContent = user[usercounter].name
        document.querySelector('#designation').textContent = user[usercounter].designation
        document.querySelector('#description').textContent = user[usercounter].description
    }
} 


const nexthandler = () => {
    if(usercounter > user.length - 1){
        usercounter = 0;
    console.log(usercounter, '===>>> usercounter');
    document.querySelector('#image').src = user[usercounter].imgurl
    document.querySelector('#anyname').textContent = user[usercounter].name
    document.querySelector('#designation').textContent = user[usercounter].designation
    document.querySelector('#description').textContent = user[usercounter].description
    } else {
        usercounter++;
        console.log(usercounter, '===>>> usercounter');
        document.querySelector('#image').src = user[usercounter].imgurl
        document.querySelector('#anyname').textContent = user[usercounter].name
        document.querySelector('#designation').textContent = user[usercounter].designation
        document.querySelector('#description').textContent = user[usercounter].description
    }
} 


