const projects = [
    {
        'id': 1,
        'slug': 'risor-klatreklubb',
        'name': 'Risør Klatreklubb',
        'description': "Risør klatreklubb is an indoor Climbing Club located in Risør, Norway. They are an all inclusive Club with focus on sports enjoyment, community and good health. I've previously created their logo which they are currently using.",
        'thumbnail': 'https://www.tonnessen.com/assets/risorklatreklubb.png',
        'link': 'https://www.tonnessen.com/projects/risor-klatreklubb/',
        'github': 'https://github.com/Emizzari/risor-klatreklubb',
        'school': null,
        'functionalities' : [
            'Animations',
            'Static page which holds relevant information',
            'Responsive website'
        ],
        'languages': [
            {name: 'HTML'}, 
            {name: 'SASS'}, 
            {name: 'JavaScript'}, 
            {name: 'PHP'}
        ]
    },
    {
        'id': 2,
        'slug': 'varus-cosmetics',
        'name': 'Varus Cosmetics',
        'description': 'Varus Cosmetics is a fictional makeup store created to showcase my abilities during the Semester Project 2, that took place in late autumn 2020.',
        'thumbnail': 'https://www.tonnessen.com/assets/varus.jpg',
        'link': 'https://www.tonnessen.com/noroff/feu/semester-project-2/',
        'github': 'https://github.com/Emizzari/emilie-tonnessen_semester-project-2',
        'school': {
            'course': 'Semester Project 2',
            'grade': 'A',
            'brief': "The goal with Semester Project 2 was to create an e-commerce website that has both customer-facing and admin sections, that is populated by a Strapi API supplied by Noroff. We could choose our own theme as long as it followed the brief. I chose a makeup brand that I called Varus Cosmetics. Its target audience was teenage girls and young women with an ambition to find their own style."
        },
        'functionalities' : [
            'Public API powered by Strapi and deployed with Heroku',
            'Admin page',
            'Login with JWT tokens',
            'Saving items in LocalStorage',
            'Calculating total sum',
            'Displaying featured products',
            'Search Function'
        ],
        'languages': [
            {name: 'HTML'}, 
            {name: 'SASS'}, 
            {name: 'JavaScript'},
            {name: 'Strapi API'}
        ]
    },
    {
        'id': 3,
        'slug': 'natours',
        'name': 'Natours',
        'description': 'This is a project created to follow the course "Advanced CSS and SASS: Flexbox, Grid, Animations and More!".',
        'thumbnail': 'https://www.tonnessen.com/assets/natours.png',
        'link': 'https://www.tonnessen.com/projects/natours/',
        'github': 'https://github.com/Emizzari/natours',
        'school': null,
        'functionalities' : [
            'Animations',
            'Responsive website',
            'Advanced Sass',
            'BEM and 7-1 pattern',
            'Custom Grid System'
        ],
        'languages': [
            {name: 'HTML'}, 
            {name: 'SASS'}
        ]
    },
    {
        'id': 4,
        'slug': 'trillo',
        'name': 'Trillo',
        'description': 'Trillo was created to follow the course "Advanced CSS and Sass", and specially learning advanced form of using Flexbox.',
        'thumbnail': 'https://www.tonnessen.com/assets/trillo.png',
        'link': 'https://www.tonnessen.com/projects/trillo/',
        'github': 'https://github.com/Emizzari/trillo',
        'school': null,
        'functionalities' : [
            'Flexbox',
            'Responsive Layout',
            'Beautiful Design!'
        ],
        'languages': [
            {name: 'HTML'}, 
            {name: 'SASS'}
        ]
    },
    {
        'id': 5,
        'slug': 'nexter',
        'name': 'Nexter',
        'description': 'This project was made to following along the course on Udemy called "Advanced CSS and Sass". In this particular design we are focusing on learning CSS Grid and push it limits to create a beautiful 2-dimensional layout.',
        'thumbnail': 'https://www.tonnessen.com/assets/nexter.png',
        'link': 'https://www.tonnessen.com/projects/nexter/',
        'github': 'https://github.com/Emizzari/nexter',
        'school': null,
        'functionalities' : [
            'CSS Grid',
            'Responsive layout',
            'Advanced use of CSS Grid - pushing it to the limit!'
        ],
        'languages': [
            {name: 'HTML'}, 
            {name: 'SASS'}
        ]
    },
    {
        'id': 6,
        'slug': 'spacex',
        'name': 'Space X Microsite',
        'description': 'This project was created to showcase my abilities during the Project Exam 1, that took place in spring of 2020.',
        'thumbnail': 'https://www.tonnessen.com/assets/spacex.jpg',
        'link': 'https://www.tonnessen.com/noroff/feu/project-exam-1/',
        'github': 'https://github.com/Emizzari/24-05-2020_project-exam-1_emilie-tonnessen',
        'school': {
            'course': 'Project Exam 1',
            'grade': 'B',
            'brief': 'The goal was to create a microsite for SpaceX/NASA to raise awareness about space program activity around the world. I chose to focus on SpaceX and display information about their launches.'
        },
        'functionalities' : [
            'SpaceX API',
            'Countdown to next launch',
            'Responsive layout',
            'Dynamic Data powered by the SpaceX API!',
            'Contact Form with validation',
            'Rockets, Launch Information and Launch Sites!'
        ],
        'languages':  [
            {name: 'HTML'}, 
            {name: 'SASS'}, 
            {name: 'JavaScript'}
        ]
    },
    {
        'id': 7,
        'slug': 'recycle',
        'name': 'Re-Cycle',
        'description': 'Re-Cycle is a fictional tourist group in Risør, Norway that offer eco-friendly, guided cycling tours. The project was created to display what I have learned during the "HTML & CSS" course early in my studies. The project has been reworked in the spring of 2020.',
        'thumbnail': 'https://www.tonnessen.com/assets/recycle.jpg',
        'link': 'https://www.tonnessen.com/noroff/feu/html-css/',
        'github': 'https://github.com/Emizzari/emilie-tonnessen_html-css',
        'school': {
            'course': 'HTML & CSS',
            'grade': '10/10',
            'brief': 'The goal of this project was to get used to coding for mobile first with only using HTML and CSS.'
        },
        'functionalities' : [
            'Responsive layout',
            'Displaying different tours',
            'Booking of different tours',
            'Hardcoded content'
        ],
        'languages':  [
            {name: 'HTML'}, 
            {name: 'CSS'}
        ]
    },
    {
        'id': 8,
        'slug': 'holidaze',
        'name': 'Holidaze',
        'description': 'Holidaze is a fictional local tourism agency that displays all accommodations in Bergen, Norway. The project was created to showcase my abilities during the Project Exam 2, that took place in the spring of 2021. This was final exam of my studies as a Frontend Developer.',
        'thumbnail': 'https://www.tonnessen.com/assets/holidaze.png',
        'link': 'https://holidaze-theta.vercel.app/',
        'github': 'https://github.com/emilietonnessen/Holidaze',
        'school': {
            'course': 'Project Exam 2',
            'grade': '..waiting for grading',
            'brief': 'The goal for this assignment was to take all the skills learned over the past two years and take on an extensive project where the finished product should reflect my general development capabilities, in addition to visual and technical  skills.'
        },
        'functionalities' : [
            'Public API powered by Strapi and deployed with Heroku',
            'Featured Products',
            'Search bar with auto dropdown',
            'Hotel specific page with details about the establishment',
            'Booking Form connected to the admin page',
            'Contact Form connected to the admin page',
            'Admin page where you can manage all booking, contact, and add/edit establishments',
            'Filter based on categories',
            'Login with JWT tokens'
        ],
        'languages': [
            {name: 'React'}, 
            {name: 'Next'},
            {name: 'TypeScript'},
            {name: 'Strapi API'},
            {name: 'SASS'},
        ]
    },
]

export default projects;