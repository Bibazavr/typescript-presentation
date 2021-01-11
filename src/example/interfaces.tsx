import React from "react";

export type Option = { label: string, id: number, }

export interface PropsSample {
    options: Option[]
}

export const Sample = (props: PropsSample): void | React.ReactElement => {
    if (props.options.length === 0)
        return
    return <div>
        {
            props.options.map(opt => {
                return <div key={opt.id}>{opt.label}</div>
            })
        }
    </div>
}
