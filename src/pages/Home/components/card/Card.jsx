import React, { memo } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ post }) => {

    const { slug, coverImage, coverImageAlt, title, datePretty, content } = post;

    return (
        <section className="card">
            <img src={coverImage} alt={coverImageAlt} />
            <div className="card__content">
                <h2>
                    {title} &mdash;{" "}
                <span style={{ color: "#5e5e5e" }}>{datePretty}</span>
                </h2>
                <p
                dangerouslySetInnerHTML={{
                    __html: `${content.substring(0, 200)}...`
                }}
                ></p>
                <div className='card__content--button-read-more'>
                    <Link to={`/post/${slug}`} className='card__content--link'> + Leer </Link>
                </div>
            </div>
        </section>
    )
};

export default Card;
