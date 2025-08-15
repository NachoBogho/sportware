import React from 'react';

interface CardProps {
    title: string;
    content: React.ReactNode;
    footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, footer }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
            <h2 className="text-white text-xl font-semibold mb-2">{title}</h2>
            <div className="text-white mb-4">{content}</div>
            {footer && <div className="border-t border-gray-700 pt-2">{footer}</div>}
        </div>
    );
};

export default Card;