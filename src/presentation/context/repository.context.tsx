import { FC, PropsWithChildren, createContext, useContext } from "react";

import { repositories } from "@/domain";

const RepositoryContext = createContext(repositories);

export const RepositoryProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <RepositoryContext.Provider value={repositories}>
            {children}
        </RepositoryContext.Provider>
    );
};

export const useRepositoryContext = () => useContext(RepositoryContext);
