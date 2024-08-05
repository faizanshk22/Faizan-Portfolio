import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for route detection

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 50,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

function Links() {
  const location = useLocation(); // Get the current route location
  const isAboutPage = location.pathname === '/about'; // Check if the current route is '/about'

  const items = [
    { name: 'Homepage', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Services', id: 'Services' },
    { name: 'Portfolio', id: 'Portfolio' },
    { name: 'Contact', id: 'Contact' },
  ];

  return (
    <motion.div className='links' variants={variants}>
      {items.map(item => {
        if (isAboutPage && item.name !== 'Homepage') {
          return null; // Hide all links except 'Homepage' when on the '/about' page
        }

        return (
          <motion.div
            key={item.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.path ? (
              <Link to={item.path} className='link'>
                {item.name}
              </Link>
            ) : (
              <a href={`#${item.id}`} className='link'>
                {item.name}
              </a>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default Links;
