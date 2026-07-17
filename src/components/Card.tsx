import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'glass-strong';
  hover?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  variant = 'glass',
  hover = true,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-card border border-border',
    glass: 'glass',
    'glass-strong': 'glass-strong',
  };
  
  return (
    <motion.div
      className={`${variants[variant]} rounded-2xl p-6 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}
