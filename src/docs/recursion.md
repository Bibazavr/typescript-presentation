## Task Recursion 
- Page:
    - subpage 
        - subpage1:
          - subpage2:
          - subpage21:
          - ...
    - subpage0
    - ...
- Page1:
    - subpage1:
    - ...
 - ....



## Types Recursion 
```typescript
export type Page = {
    content: { title: string, text: string }[],
    child?: Page
}

export interface FromBackend {
    response: Page[]
}
```
