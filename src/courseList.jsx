import Course from './course'
import react from './assets/react.svg';
import ang from './assets/angular.svg';
import nxt from './assets/next.svg';
import vue from './assets/vue.svg';
import svelte from './assets/svelte.svg';   
import ember from './assets/ember.svg';
import backbone from './assets/backbone.svg';
import meteor from './assets/meteor.svg';
import preact from './assets/preact.svg';
import lit from './assets/lit.svg';

function CourseList() {
    
    const Courselist = [
        {
            id: 1,
            name: "React",
            price: "$100",
            img: react
        },
        {
            id: 2,
            name: "Angular",
            price: "$100",
            img: ang
        },
        {
            id: 3,
            name: "Next",
            price: "$100",
            img: nxt
        },
        {
            id: 4,
            name: "Vue",
            price: "$100",
            img: vue
        },
        {
            id: 5,
            name: "Svelte",
            price: "$100",
            img: svelte
        },
        {
            id: 6,
            name: "Ember",
            price: "$100",
            img: ember
        },
        {
            id: 7,
            name: "Backbone",
            price: "$100",
            img: backbone
        },
        {
            id: 8,
            name: "Meteor",
            price: "$100",
            img: meteor
        },
        {
            id: 9,
            name: "Preact",
            price: "$100",
            img: preact
        },
        {
            id: 10,
            name: "Lit",
            price: "$100",
            img: lit
        },
    ];
    return (
        <div className='course-list'>
            {Courselist.map((course) => {
                return (
                    <Course key={course.id} name={course.name} price={course.price} img={course.img} />
                );
            })}
        </div>
    );
}

export default CourseList