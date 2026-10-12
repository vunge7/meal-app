type ContentProps = {
    children: React.ReactNode;
    className?: string;
};

export const Content = ({ children, className = "" }: ContentProps) => {
    return (
        <section className={`mx-auto flex w-[calc(100%-10px)] max-w-[1200px] flex-col gap-8 pt-20 sm:pt-24 ${className}`.trim()}>
            {children}
        </section>
    );
};


