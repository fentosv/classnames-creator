# classnames

> Concats CSS classnames, based on conditions

## Install

```
$ npm install classnames-creator
```

## Usage

The `classnames` function accepts any number of arguments `string` or `object` (also `arrays`).

Numbers will be ignored.

Objects arguments will be only included if their keys are [truthy values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)


```js
import classnames from 'classnames-creator';

classnames('foo', 'bar')// => 'foo bar'
classnames('foo', { bar: true })// => 'foo bar'
classnames(['foo','bar'], 'baz')// => 'foo bar baz'
classnames({ 'foo-bar': true })// => 'foo-bar'
classnames({ 'foo-bar': false })// => ''
classnames({ foo: true }, { bar: true })// => 'foo bar'
classnames({ foo: true, bar: true })// => 'foo bar'

// lots of arguments of various types
classnames('foo', { bar: true, duck: false, dog: '' }, 'baz', ['mind', null], { quux: true })// => 'foo bar baz mind quux'

// other falsy values are just ignored
classnames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')// => 'bar'
```

### Usage with React and TypeScript

```tsx
import classnames from 'classnames-creator';
import styles from '@styles/Button.module.css';

export default function Button({ text, invertedColors, shape, ...props }: Props) {
  
  const style = classnames(
    styles.button
    {
        [styles.invertedColors]: invertedColors
        [styles.shape]: shape === 'rounded'
        [styles.shape]: shape === 'bordered'
    }
  )

    return (
        <button
            className={style}
            {...props}
        >
            {text}
        </button>
    )
}
```



