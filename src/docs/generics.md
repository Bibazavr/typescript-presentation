## Generics

```typescript
export function identity<T>(arg: T): T {
  return arg;
}
```



## Generics Usage
```typescript
export const Sample = () => {
  const [counter, setCounter] = React.useState<number>(2)

  return <button
      onClick = {() => setCounter('asd')} // <-- GotError
      > 
  Click ME!
  </button>
}
```



## Generics Usage class
```typescript
export interface State {
  biba: string
}

export interface Props {
  option: {}[]
}
```


## Generics Usage class
```typescript
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
```
