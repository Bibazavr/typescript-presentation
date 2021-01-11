/**
 Page recursion
 **/

export type Page = {
    content: { title: string, text: string }[],
    child?: Page
}


export interface FromBackend {
    response: Page[]
}
