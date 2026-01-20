import React from 'react';
import Layout from '../layouts/Layout';
import BookCard from '../components/BookCard';
import SubjectCard from '../components/SubjectCard';
import Section from '../components/Section';
import { dummyBooks, subjects, authors } from '../data/dummyBooks';
import { FaStar } from 'react-icons/fa';

const Home = () => {
    // Filter data for sections
    const readingNow = dummyBooks.slice(0, 5);
    const popularBooks = dummyBooks.filter(b => b.type === 'popular');

    // Right Panel Content
    const RightPanel = (
        <div className="space-y-8">
            {/* Popular Books */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">Popular books</h3>
                    <button className="text-xs text-library-textMuted hover:text-white">Show all</button>
                </div>
                <div className="space-y-4">
                    {popularBooks.map(book => (
                        <div key={book.id} className="flex gap-3 group cursor-pointer hover:bg-library-card/50 p-2 rounded-lg transition-colors">
                            <img src={book.cover} alt={book.title} className="w-12 h-16 rounded object-cover" />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-white text-sm font-medium truncate group-hover:text-library-accent transition-colors">{book.title}</h4>
                                <p className="text-xs text-library-textMuted mb-1">{book.author}</p>
                                <div className="flex items-center gap-1 text-[10px] text-library-textMuted">
                                    <span className="text-green-400">In stock</span>
                                    <span>•</span>
                                    <div className="flex items-center text-yellow-500">
                                        <FaStar size={10} /> {book.rating}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Writers/Authors */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">Writers and Authors</h3>
                    <button className="text-xs text-library-textMuted hover:text-white">Show all</button>
                </div>
                <div className="grid grid-cols-1 gap-3">
                    {authors.map((author, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-library-card/50 transition-colors cursor-pointer group">
                            <img src={author.image} alt={author.name} className="w-10 h-10 rounded-full object-cover border border-library-border" />
                            <div className="flex-1">
                                <h4 className="text-white text-sm font-medium group-hover:text-library-accent transition-colors">{author.name}</h4>
                                <p className="text-xs text-library-textMuted">{author.role}</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-white text-sm font-bold">{author.books}</span>
                                <span className="text-[10px] text-library-textMuted">Books</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <Layout rightPanel={RightPanel}>
            <div className="space-y-10 pb-10">
                {/* Previous Reading */}
                <section>
                    <Section title="Previous Reading" linkTo="#">
                        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                            {readingNow.map((book) => (
                                <BookCard
                                    key={book.id}
                                    {...book}
                                />
                            ))}
                        </div>
                    </Section>
                </section>

                {/* Subjects Section */}
                <section>
                    <h2 className="text-2xl font-display font-semibold text-white mb-6">Subjects section</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjects.map((subject, index) => (
                            <SubjectCard key={index} {...subject} />
                        ))}
                    </div>
                </section>

                {/* New Books */}
                <section>
                    <Section title="New books" linkTo="#">
                        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                            {readingNow.reverse().map((book) => (
                                <BookCard
                                    key={`new-${book.id}`}
                                    {...book}
                                />
                            ))}
                        </div>
                    </Section>
                </section>
            </div>
        </Layout>
    );
};

export default Home;
