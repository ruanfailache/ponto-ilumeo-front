interface PresenterReturn<S, P> {
    state: S;
    presenter: P;
}

export type PresenterHook<S, P> = () => PresenterReturn<S, P>;
