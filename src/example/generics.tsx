import React from "react";

export function identity<T>(arg: T): T {
    return arg;
}


export const Sample = () => {
    const [counter, setCounter] = React.useState<number>(2)
    return <button onClick={() => setCounter(5)}>Click ME! {counter}</button>
}


export interface State {
    biba: string
}

export interface Props {
    option: {}[]
}

export class SampleClass extends React.PureComponent<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            biba: 'biba'
        }
    }
    render() {
        return null;
    }
};
