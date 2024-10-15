import goals_main from '../../assets/goals_main.png'
import goals_auth from '../../assets/goal_auth.png'
import add_goal from '../../assets/add_goal.png'
import todo from '../../assets/todo.png'
import goal_page from '../../assets/goal_page.png'
import plan_page from '../../assets/plan_page.png'
import notes from '../../assets/notes.png'
import goals_profile from '../../assets/profile_page.png'
import all_books from '../../assets/all_books.png'
import book_store_home from '../../assets/book_store_home.png'
import book_page from '../../assets/Без імені.png'
import book_cart from '../../assets/book_cart.png'
import checkout from '../../assets/final_checkout.png'
import portfolio from '../../assets/portfolio.png'

export const PROJECTS = [
    {
        title: 'Goals Tracker',
        stack: 'React, HTML, CSS, MongoDB, Node.js, Express.js',
        description: `The goal tracking project involves creating a system where users can set goals and track their progress. Each goal can have specific steps or a plan that the user follows to complete it. The app may also include general to-do tasks not tied to a particular goal, notes for organizing thoughts, and features to create an account. The goal-tracking system allows for categorization of goals (e.g., language learning, IT skills) and provides an overview of progress for each goal.`,
        git: 'https://github.com/YuliaProkipchuk/goal-tracker',
        live: '',
        images: [{ url: goals_main, alt: 'goal tracker main page' },
        { url: goals_auth, alt: 'goal tracker auth page' },
        { url: add_goal, alt: 'add goal form' },
        { url: todo, alt: 'todo page' },
        { url: goal_page, alt: 'goal page' },
        { url: plan_page, alt: 'goal tracker plan page' },
        { url: notes, alt: 'goal tracker notes page' },
        { url: goals_profile, alt: 'goal tracker user profile page' }
        ]
    },
    {
        title: 'Books Store',
        stack: 'React, HTML, CSS, Firebase, Node.js, Express.js, Stripe',
        description: 'The books e-commerce project is an online platform for purchasing books. It includes features such as a product catalog displaying available books, each with details like price, author, and rating. The project may also integrate payment gateways for transaction handling, user authentication for personalized experiences, and a favorites section for users to bookmark preferred books.',
        git: 'https://github.com/YuliaProkipchuk/bookStore',
        live: '',
        images: [{ url: book_store_home, alt: 'book store home page' },
        { url: all_books, alt: 'books page' },
        { url: book_page, alt: 'book page' },
        { url: book_cart, alt: 'cart' },
        { url: checkout, alt: 'checkout page' },

        ]
    },
    {
        title: 'Portfolio Website',
        stack: 'React, HTML, CSS',
        description: `The portfolio website is a personal project showcasing a developer's skills, projects, and experience. It typically includes sections such as an introduction or "About Me" page, a gallery of completed projects with detailed descriptions, and a resume or CV. The site may also feature contact information, links to social media, and GitHub profiles.`,
        git: 'https://github.com/YuliaProkipchuk/portfolio',
        live: '',
        images: [{ url: portfolio, alt: 'Personal portfolio website' }]
    }
] 