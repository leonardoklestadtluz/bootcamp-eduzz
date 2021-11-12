import React from 'react';

function Layout({ children }) {
    return (
        <div>
            <section>
                <header>header</header>
                {children}
            </section>
        </div>
    )
}

export default Layout;