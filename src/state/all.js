import { cloneElement } from 'react';
import { BooksProvider } from './books';


function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
        (kids, parent) => cloneElement(parent, {
            children: kids,
        }),
        children,
    );
}

const ContextProvider = (({ children }) => (
    <ProviderComposer contexts={
        [<BooksProvider />]}
    >
        {children}
    </ProviderComposer>
));

export { ContextProvider };