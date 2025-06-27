export const Card : React.FC<{children: React.ReactNode; className?:string}> =({ children, className = ''}) => (

    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 ${className}`}>
        {children}
    </div>
);
