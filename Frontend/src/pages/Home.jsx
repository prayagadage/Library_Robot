import React from 'react';
import BookCard from '../components/BookCard';
import Section from '../components/Section';

const Home = () => {
    // Dummy Data for Design Verification
    const previousReading = [
        { id: 1, title: 'Clean Architecture', author: 'Robert C. Martin', cover: 'https://m.media-amazon.com/images/I/41-sN-m8xJL.jpg', progress: 75, department: 'Software' },
        { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', cover: 'https://m.media-amazon.com/images/I/51A8l+FxR+L.jpg', progress: 30, department: 'Computer Science' },
    ];

    const popularBooks = [
        { id: 3, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', cover: 'https://m.media-amazon.com/images/I/61Pgdn8Ys-L.jpg', rating: 4.9, department: 'CS' },
        { id: 4, title: 'Design Patterns', author: 'Erich Gamma', cover: 'https://m.media-amazon.com/images/I/81I9hM63iQL.jpg', rating: 4.8, department: 'Software' },
        { id: 5, title: 'Structure and Interpretation', author: 'Harold Abelson', cover: 'https://m.media-amazon.com/images/I/51+17a+G+xL.jpg', rating: 4.9, department: 'CS' },
        { id: 6, title: 'Artificial Intelligence', author: 'Stuart Russell', cover: 'https://m.media-amazon.com/images/I/81-Nq1+tXmL._AC_UF1000,1000_QL80_.jpg', rating: 4.7, department: 'AI/ML' },
        { id: 7, title: 'Deep Learning', author: 'Ian Goodfellow', cover: 'https://m.media-amazon.com/images/I/61qba55E5kL.jpg', rating: 4.6, department: 'AI/ML' },
    ];

    const newArrivals = [
        { id: 8, title: 'Modern Operating Systems', author: 'Andrew S. Tanenbaum', cover: 'https://m.media-amazon.com/images/I/715M-jJ9xLL.jpg', rating: 4.5, department: 'CS' },
        { id: 9, title: 'Computer Networks', author: 'Andrew S. Tanenbaum', cover: 'https://m.media-amazon.com/images/I/51n6XbKx6LL.jpg', rating: 4.4, department: 'Networking' },
        { id: 10, title: 'Database System Concepts', author: 'Abraham Silberschatz', cover: 'https://m.media-amazon.com/images/I/91M-Mxm+gAL.jpg', rating: 4.3, department: 'Databases' },
    ];

    return (
        <div className="pb-10">
            {/* Welcome Hero */}
            <div className="mb-12">
                <h1 className="text-4xl font-display font-bold text-white mb-2">
                    Welcome back, <span className="text-library-accent">Alex</span>
                </h1>
                <p className="text-library-textMuted text-lg">
                    Your digital library is ready. You have <span className="text-white font-semibold">2 books</span> due this week.
                </p>
            </div>

            {/* Previous Reading Section */}
            <Section title="Continue Reading">
                {previousReading.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        coverUrl={book.cover}
                        department={book.department}
                        isLarge={true}
                    />
                ))}
            </Section>

            {/* Popular Section */}
            <Section title="Popular in Computer Science" linkTo="/popular">
                {popularBooks.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        coverUrl={book.cover}
                        rating={book.rating}
                        department={book.department}
                    />
                ))}
            </Section>

            {/* New Arrivals Section */}
            <Section title="New Arrivals" linkTo="/new">
                {newArrivals.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        coverUrl={book.cover}
                        rating={book.rating}
                        department={book.department}
                    />
                ))}
            </Section>
        </div>
    );
};

export default Home;
