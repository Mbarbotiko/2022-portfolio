(function () {
    const projects = [
        {
            title: 'Margarita Barbotiko',
            image: './images/profile.jpg',
            alt: 'Margarita Barbotiko',
            summary: 'Analytics & Front End Developer',
            stack: 'Javascript|CSS|Adobe Analytics',
            year: '2018 - Present',
            repo: 'https://github.com/Mbarbotiko',
            href: 'http://www.margarita.design',
            active: false
        },
        {
            title: 'Pokemon Battle',
            image: './images/pokebattle.jpg',
            alt: 'Pokemon Battle App',
            summary: 'Front End Development',
            stack: 'Javascript|ES6|OOP',
            year: 'Aug 2020',
            repo: 'https://github.com/Mbarbotiko/pokebattle',
            href: 'http://www.margarita.design/pokebattle',
            active: false
        },
        {
            title: 'To Do List',
            image: './images/todolist.jpg',
            alt: 'To Do List Application',
            summary: 'Front End Development',
            stack: 'SASS|REACT',
            year: 'May 2020',
            repo: 'https://github.com/Mbarbotiko/new-to-do-list',
            href: 'http://www.margarita.design/new-to-do-list/',
            active: false
        },
        {
            title: 'Raku Sushi Lounge',
            image: './images/raku.jpg',
            alt: 'Raku Sushi and Lounge Minnesota',
            summary: 'Front End Development',
            stack: 'HTML|CSS|SASS|Javascript|JQuery',
            year: 'January 2020',
            repo: 'https://github.com/Mbarbotiko/Raku',
            href: 'http://rakusushi.herokuapp.com',
            active: false
        },
        {
            title: 'Citizenship Test',
            image: './images/citizen.jpg',
            alt: 'Citizenship test app',
            summary: 'Front End Development',
            stack: 'HTML|CSS|Javascript',
            year: 'December 2018',
            repo: 'https://github.com/Mbarbotiko/citizenship',
            href: 'http://mbarbotiko.github.io/citizenship',
            active: false
        },
        {
            title: 'Cava Manager App',
            image: './images/cava-manager.jpg',
            alt: 'Cava Restaurant Website Manager',
            summary: 'Full Stack Development',
            stack: 'React|Express|MongoDB|Mongoose|CSS|Bootstrap',
            year: 'October 2018',
            repo: 'https://github.com/Mbarbotiko/cavamanager',
            href: 'https://cava-manager.herokuapp.com',
            active: false
        },
        {
            title: 'Cava',
            image: './images/cava.jpg',
            alt: 'Cava Restaurant Website',
            summary: 'Front End Development',
            stack: 'HTML|CSS|SASS|JQuery|Bootstrap',
            year: 'August 2018',
            repo: 'https://github.com/Mbarbotiko/cava',
            href: 'https://mbarbotiko.github.io/cava',
            active: false
        },
        {
            title: 'Neighborly|Group Project',
            image: './images/neighborly.jpg',
            alt: 'Social Website',
            summary: 'Back End Development',
            stack: 'MongoDB|Mongoose|Express|React',
            year: 'August 2018',
            repo: 'https://github.com/robynocraig/neighborly',
            href: 'https://app-neighborly.herokuapp.com',
            active: false
        },
        {
            title: 'Poke-Switch',
            image: './images/pokemonswitch.jpg',
            alt: 'Poke Switch Game',
            summary: 'Front End Development',
            stack: 'React|CSS|Bootstrap',
            year: 'August 2018',
            repo: 'https://github.com/Mbarbotiko/pokeswitch',
            href: 'https://morning-mesa-94984.herokuapp.com',
            active: false
        },
        {
            title: 'SwapMee+Up|Group Project',
            image: './images/swapmeetup.jpg',
            alt: 'SwapMeetup Website',
            summary: 'Back End Development',
            stack: 'MySQL|Sequelize|Express|Node',
            year: 'June 2018',
            repo: 'https://github.com/Mbarbotiko/swapmeetup',
            href: 'https://swapmeetup.herokuapp.com',
            active: false
        },
        {
            title: 'Friend Finder',
            image: './images/friendfinder.jpg',
            alt: 'Friend Finder App',
            summary: 'Front & Back End Development',
            stack: 'HTML|CSS|JQuery|Express|Node',
            year: 'June 2018',
            repo: 'https://github.com/Mbarbotiko/FriendFinder',
            href: 'https://your-bestfriend-finder.herokuapp.com',
            active: false
        },
        {
            title: 'Train Schedule',
            image: './images/trainschedule.jpg',
            alt: 'Train Schedule App',
            summary: 'Front End Development',
            stack: 'HTML|CSS|JQuery|Firebase',
            year: 'May 2018',
            repo: 'https://github.com/Mbarbotiko/Train-Schedule',
            href: 'https://mbarbotiko.github.io/Train-Schedule',
            active: false
        },
        {
            title: 'Travel with Donna|Group Project',
            image: './images/donna.jpg',
            alt: 'Travel with Donna App',
            summary: 'Front End Development',
            stack: 'HTML|CSS|JQuery',
            year: 'May 2018',
            repo: 'https://github.com/dbarthell/GroupProject1',
            href: 'https://dbarthell.github.io/GroupProject1',
            active: false
        },
        {
            title: 'Bamazon',
            image: './images/bamazon.jpg',
            alt: 'Bamazon Store App',
            summary: 'Back End Development',
            stack: 'Node JS',
            year: 'May 2018',
            repo: 'https://github.com/Mbarbotiko/bamazon',
            href: 'https://drive.google.com/file/d/1dRfkBjcGQ7oKHhpowLm6AbaoYvssZapD/view',
            active: false
        },
        {
            title: 'LiriBot',
            image: './images/liri.JPG',
            alt: 'LiriBot App',
            summary: 'Back End Development',
            stack: 'Node JS',
            year: 'May 2018',
            repo: 'https://github.com/Mbarbotiko/liri-node-app',
            href: 'https://drive.google.com/file/d/1EparZQQIjtx0XB9PTWqC_IH6sS07MWPJ/view',
            active: false
        },
        {
            title: 'Cartoon GIPHY',
            image: './images/api.jpg',
            alt: 'Cartoon Gif App',
            summary: 'Front End Development',
            stack: 'HTML|CSS|JQuery',
            year: 'April 2018',
            repo: 'https://github.com/Mbarbotiko/API',
            href: 'https://mbarbotiko.github.io/API',
            active: false
        },

        {
            title: 'Got Game Trivia',
            image: './images/triviagame.jpg',
            alt: 'Got Game Trivia App',
            summary: 'Front End Development',
            stack: 'HTML|CSS|JQuery',
            year: 'April 2018',
            repo: 'https://github.com/Mbarbotiko/TriviaGame',
            href: 'https://mbarbotiko.github.io/TriviaGame',
            active: false
        },
        {
            title: 'Crystal Game',
            image: './images/crystalsgame.jpg',
            alt: 'Crystal Game',
            summary: 'Front End Development',
            stack: 'HTML|CSS|Javascript|JQuery',
            year: 'March 2018',
            repo: 'https://github.com/Mbarbotiko/Week-4-Game',
            href: 'https://mbarbotiko.github.io/Week-4-Game',
            active: false
        },
    ]



})();