import React from 'react';

const Button = ({
  id,
  title,
  onClick,
  className='',
  containerClass,
  leftIcon,
  rightIcon,
  children,          // ← accept children
}) => {
  return (
    <button
      id={id}
      onClick={onClick}               // ← forward onClick
      className={`group relative z-10 cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black bg-white ${containerClass} ${className}`}
    >
      {leftIcon}
      <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
            <div>{title}</div>
        </span>
      {children /* ← render them */}
      {rightIcon}
    </button>
  );
};

export default Button;
