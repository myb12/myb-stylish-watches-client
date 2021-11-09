import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaQuoteRight } from 'react-icons/fa';
import './ReviewCard.css'

const ReviewCard = () => {
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState(2);

    const people = [
        {
            id: 1,
            name: "susan smith",
            rating: 3,
            image:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
            text:
                "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
        },
        {
            id: 2,
            name: "anna johnson",
            rating: 4.5,
            image:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
            text:
                "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin review-iconhion axe.photo booth jean shorts artisan narwhal."
        },
        {
            id: 3,
            name: "peter jones",
            rating: 2.9,
            image:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
            text:
                "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
        },
        {
            id: 4,
            name: "bill anderson",
            rating: 4.5,
            image:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
            text:
                "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom review-iconhion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
        }
    ];
    const { name, rating, image, text } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const randomPerson = () => {
        let rng = Math.floor(Math.random() * people.length);
        if (rng === index) {
            rng = index + 1;
        }
        setIndex(checkNumber(rng));
    };
    return (
        <section className="Card">
            <div className="img-container">
                <img src={image} alt="" />
                <div className="quote">
                    <FaQuoteRight className="review-icon quote-right" />
                    {/* <i className="review-icon fa-quote-right"></i> */}
                </div>
                <div className="circle"></div>
            </div>
            <p className="name">{name}</p>
            {/* <p className="position">{job}</p> */}
            <Rating name="read-only" value={rating} readOnly precision={0.5} />
            <p className="text">{text}</p>
            <div className="button-container">
                <div>
                    <AiOutlineArrowLeft onClick={prevPerson} className="review-icon" />
                    <AiOutlineArrowRight onClick={nextPerson} className="review-icon" />
                </div>
                {/* <button onClick={randomPerson}>Random Person</button> */}
            </div>
        </section>
    );
};

export default ReviewCard;