function Numeric () {
  return e('div', {},
      e('input', {type: 'button', value: '-'}),
      e('span', {}, '0'),
      e('input', {type: 'button', value: '+'}),
  )
}
