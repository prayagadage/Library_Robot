import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const Section = ({ title, children, linkTo = '#' }) => {
    return (
        <section className="mb-12">
            <div className="flex items-center justify-between mb-6 px-2">
                <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                    {title}
                </h2>

                <Link
                    to={linkTo}
                    className="group flex items-center gap-2 text-sm font-medium text-library-textMuted hover:text-library-accent transition-colors"
                >
                    Show all
                    <FaChevronRight className="text-xs transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="relative -mx-2">
                <div className="flex overflow-x-auto gap-8 pb-4 pt-2 px-2 scrollbar-none snap-x">
                    {children}
                </div>

                {/* Fade effect on right edge */}
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-library-bg to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default Section;
